/*
 * Vercel serverless function — handles both the Contact and Enroll forms.
 *
 * Both route to the same inbox, distinguished by subject line, so the studio
 * monitors one place but can still filter enrollment leads from general
 * questions.
 *
 * Required environment variables (set in Vercel → Project → Settings → Env):
 *   SENDGRID_API_KEY   API key with "Mail Send" permission only.
 *   FORM_TO_EMAIL      Where submissions are delivered.
 *   FORM_FROM_EMAIL    Sender address. MUST be verified in SendGrid, either via
 *                      Single Sender Verification or domain authentication, or
 *                      SendGrid rejects the send with a 403.
 *
 * Talks to the SendGrid v3 API over plain fetch rather than @sendgrid/mail, so
 * the project keeps zero runtime dependencies.
 */

const SENDGRID_ENDPOINT = "https://api.sendgrid.com/v3/mail/send";

const FORMS = {
  contact: {
    label: "Contact form",
    required: ["name", "email", "message"],
    fields: [
      ["name", "Name"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["message", "Message"],
    ],
    subject: (d) => `Website contact — ${d.name}`,
  },
  enroll: {
    label: "Enrollment interest form",
    required: ["parentName", "childName", "email"],
    fields: [
      ["parentName", "Parent / guardian"],
      ["childName", "Child"],
      ["childAge", "Child's age"],
      ["email", "Email"],
      ["phone", "Phone"],
      ["program", "Program of interest"],
      ["message", "Genre interest / questions"],
    ],
    subject: (d) => `Enrollment interest — ${d.childName} (${d.parentName})`,
  },
};

/* Caps per field. Anything longer is a bot or a paste accident. */
const MAX_FIELD = 4000;
const MAX_SHORT = 200;

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

/* Strip CR/LF so nothing user-supplied can inject an email header. */
const oneLine = (v) => String(v).replace(/[\r\n]+/g, " ").trim();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { SENDGRID_API_KEY, FORM_TO_EMAIL, FORM_FROM_EMAIL } = process.env;
  if (!SENDGRID_API_KEY || !FORM_TO_EMAIL || !FORM_FROM_EMAIL) {
    // Log for us, stay vague for the client — never leak config state.
    console.error("submit: missing SendGrid environment variables");
    return res
      .status(500)
      .json({ error: "The form isn't configured yet. Please call the studio." });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch {
      return res.status(400).json({ error: "Malformed request." });
    }
  }
  if (!body || typeof body !== "object") {
    return res.status(400).json({ error: "Malformed request." });
  }

  // Honeypot: a real person never fills a field they cannot see.
  if (body.company) return res.status(200).json({ ok: true });

  const config = FORMS[body.form];
  if (!config) return res.status(400).json({ error: "Unknown form." });

  const data = {};
  for (const [key] of config.fields) {
    const raw = body[key];
    if (raw == null) continue;
    const value = String(raw).slice(0, MAX_FIELD).trim();
    if (value) data[key] = value;
  }

  const missing = config.required.filter((key) => !data[key]);
  if (missing.length) {
    return res.status(400).json({ error: "Please fill in the required fields." });
  }
  if (!isEmail(data.email)) {
    return res.status(400).json({ error: "That email address doesn't look right." });
  }

  const lines = config.fields
    .filter(([key]) => data[key])
    .map(([key, label]) => `${label}: ${data[key]}`);

  const text = [
    config.label,
    "",
    ...lines,
    "",
    "—",
    "Sent from the Dance Academy West website.",
  ].join("\n");

  const payload = {
    personalizations: [{ to: [{ email: FORM_TO_EMAIL }] }],
    from: { email: FORM_FROM_EMAIL, name: "Dance Academy West Website" },
    // Replying in the inbox goes straight back to the parent.
    reply_to: {
      email: data.email,
      name: oneLine(data.name || data.parentName || "").slice(0, MAX_SHORT),
    },
    subject: oneLine(config.subject(data)).slice(0, MAX_SHORT),
    content: [{ type: "text/plain", value: text }],
  };

  try {
    const response = await fetch(SENDGRID_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    // SendGrid returns 202 Accepted on success, with an empty body.
    if (response.status !== 202) {
      const detail = await response.text();
      console.error("submit: SendGrid rejected send", response.status, detail);
      return res
        .status(502)
        .json({ error: "We couldn't send that just now. Please try again." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("submit: SendGrid request failed", err);
    return res
      .status(502)
      .json({ error: "We couldn't send that just now. Please try again." });
  }
}

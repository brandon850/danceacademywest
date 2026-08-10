/*
 * Posts a form to the serverless handler in /api/submit.js.
 * Throws with a message safe to show the visitor; the caller renders it.
 */
export async function submitForm(form, data) {
  let response;
  try {
    response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ form, ...data }),
    });
  } catch {
    // Network-level failure — offline, DNS, connection dropped.
    throw new Error(
      "We couldn't reach the studio. Check your connection and try again.",
    );
  }

  /*
   * A host with SPA rewrites but no serverless function answers /api/submit
   * with index.html and a 200. Trusting response.ok alone would report success
   * while sending nothing, so require a real JSON body and an explicit ok flag.
   */
  let payload = null;
  if (response.headers.get("content-type")?.includes("application/json")) {
    try {
      payload = await response.json();
    } catch {
      /* Declared JSON but unparseable — treated as a failure below. */
    }
  }

  if (!response.ok) {
    throw new Error(
      payload?.error || "Something went wrong. Please try again.",
    );
  }

  if (!payload?.ok) {
    throw new Error(
      "The form isn't connected yet. Please call or text the studio instead.",
    );
  }

  return payload;
}

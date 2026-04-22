import { useState } from "react";
import PageHero from "../components/ui/PageHero";
import contacthero from "../assets/DAW-contact-hero.jpg";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        image={contacthero}
        label="Get in Touch"
        heading="We'd Love to Hear From You"
        subheading="Questions about classes, enrollment, or scheduling? We're happy to help."
        orb1Color="bg-aurora-cyan"
        orb2Color="bg-brand"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-10 -top-20 right-0" />
        <div className="aurora-orb w-[300px] h-[300px] bg-brand opacity-10 bottom-0 -left-10" />

        <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  icon: "📍",
                  label: "Location",
                  value: "Carrollton, GA (Primary Location)",
                },
                {
                  icon: "📧",
                  label: "Email",
                  value: "info@danceacademy.com",
                  href: "mailto:info@danceacademy.com",
                },
                {
                  icon: "📞",
                  label: "Phone",
                  value: "(770) 595-2390",
                  href: "tel:+17705952390",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-brand/15 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-800 font-semibold hover:text-brand-dark transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-800 font-semibold">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <h3 className="font-display font-bold text-slate-900 mb-4">
              Follow Along
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Facebook',  href: 'https://www.facebook.com/125995280747922' },
                { label: 'Instagram', href: 'https://www.instagram.com/dawdancers'       },
                { label: 'Yelp',      href: 'https://www.yelp.com/biz/W5fBoAOBPbAQ6vRcgV-Muw' },
                { label: 'TikTok',    href: '#'                                           },
                { label: 'YouTube',   href: '#'                                           },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card px-5 py-2.5 rounded-full text-sm font-semibold text-slate-700 hover:text-brand-dark hover:border-brand/30 transition-all duration-200 border border-slate-200"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* Map */}
            <div className="mt-10 glass-card rounded-2xl overflow-hidden h-56">
              <iframe
                title="Dance Academy West location"
                src="https://maps.google.com/maps?q=1004+Bankhead+Highway+Carrollton+GA+30117&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display font-bold text-3xl text-slate-900 mb-8">
              Send a Message
            </h2>

            {submitted ? (
              <div className="glass-card rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                  Message Received!
                </h3>
                <p className="text-slate-500 text-sm">
                  We'll get back to you within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                      placeholder="(770) 555-0100"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full justify-center text-base py-4"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

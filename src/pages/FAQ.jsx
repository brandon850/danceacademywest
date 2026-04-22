import { useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import faqhero from "../assets/DAW-faq-hero.jpg";

const faqs = [
  {
    q: "What age can my child start dancing?",
    a: "We offer classes starting at age 2! Our Tiny Tots / Creative Movement class is designed specifically for our youngest dancers ages 2–4. Mini sessions are available from age 2, and most structured programs begin at age 3.",
  },
  {
    q: "What is a Mini Session and how does it work?",
    a: "A mini session is a 5–6 week trial program for $125. Your child joins an existing class with established students — no special beginner section. It's a real taste of what DAW is like. There's no commitment to continue after the session ends.",
  },
  {
    q: "What is the Progressive Program?",
    a: "The Progressive Program is our year-round, 12-month curriculum. Students attend weekly classes, build skills progressively, and perform in our summer recital production. There's a one-time registration fee that is never charged again in future seasons.",
  },
  {
    q: "Do I need to pay the registration fee every year?",
    a: "No! The registration fee for the Progressive Program is paid once — ever. Once you're enrolled, it's never charged again, even as your child advances through the years.",
  },
  {
    q: "Does my child need prior dance experience?",
    a: "Not at all. We welcome students of all skill levels, including complete beginners. Our instructors are trained to teach students where they are and help them grow from there.",
  },
  {
    q: "What should my child wear to class?",
    a: "Attire varies by genre. Ballet students wear a black leotard, pink tights, and ballet shoes with hair in a bun. Hip hop students wear comfortable athletic wear and clean sneakers. We'll send you a complete attire guide when you enroll.",
  },
  {
    q: "How do I register for classes?",
    a: "Enrollment is handled through Studio Pro, our online parent portal. You can browse class schedules, register your child, and manage your account there. You can also fill out our Interest Form on the Enroll page and we'll reach out to help.",
  },
  {
    q: "Is there a recital? Do all students perform?",
    a: "We hold a summer recital every season. Recital participation is for students in the Progressive Program. Mini session students do not participate in the recital, but are of course welcome to join the Progressive Program to be eligible.",
  },
  {
    q: "How is DAW different from other studios in the area?",
    a: "We lead with acceptance, joy, and community — not competition anxiety or pressure. We want every child and family to feel genuinely welcome here. After 25 seasons, we've built a reputation as the happy side of dance studios in West Georgia.",
  },
  {
    q: "What genres do you offer?",
    a: "We offer ballet, hip hop, tap, jazz, Broadway, acrobatics, and creative movement (for our littlest dancers). See the Classes page for full details on each genre, age ranges, and attire.",
  },
  {
    q: "How do I contact DAW with more questions?",
    a: "You can reach us by email at info@danceacademy.com or by phone at (770) 595-2390. You can also fill out the contact form on our Contact page and we'll get back to you within 1–2 business days.",
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left hover:bg-white/40 transition-colors duration-200"
      >
        <span className="font-display font-bold text-slate-900 text-base leading-snug">
          {q}
        </span>
        <span
          className={`text-brand-dark text-2xl font-bold shrink-0 transition-transform duration-200 ${open ? "rotate-45" : ""}`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-7 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <>
      <PageHero
        image={faqhero}
        label="Got Questions?"
        heading="Frequently Asked Questions"
        subheading="Everything parents most commonly ask about Dance Academy West — answered."
        orb1Color="bg-aurora-purple"
        orb2Color="bg-aurora-pink"
      />

      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-brand opacity-10 -top-20 right-0" />
        <div className="aurora-orb w-[350px] h-[350px] bg-aurora-purple opacity-10 bottom-0 -left-10" />

        <div className="max-w-3xl mx-auto relative">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>

          <div className="mt-14 glass-card rounded-2xl p-10 text-center">
            <div className="text-4xl mb-4">💬</div>
            <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
              Still Have Questions?
            </h3>
            <p className="text-slate-500 text-sm mb-6">
              We're always happy to help. Reach out and we'll get back to you
              quickly.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
              <Link to="/enroll" className="btn-secondary">
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/ui/PageHero'

const steps = [
  { n: '1', title: 'Choose a Program',   desc: 'Decide between a Mini Session (5 weeks, $125, no commitment) or the Progressive Program (year-round).' },
  { n: '2', title: 'Pick Your Classes',  desc: 'Browse the class schedule and choose the genre, day, and time that works best for your family.' },
  { n: '3', title: 'Register Online',    desc: 'Complete enrollment through our secure Studio Pro parent portal — quick and easy.' },
  { n: '4', title: 'Show Up and Dance',  desc: 'Come to your first class ready to have fun. Our instructors will take care of the rest.' },
]

export default function Enroll() {
  const [form, setForm] = useState({
    parentName:   '',
    childName:    '',
    childAge:     '',
    email:        '',
    phone:        '',
    program:      '',
    genre:        '',
    message:      '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // Form submission logic goes here (e.g. fetch to API endpoint)
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        label="Get Started"
        heading="Enroll at Dance Academy West"
        subheading="Ready to join the DAW family? Enroll online through Studio Pro or fill out our interest form and we'll reach out to help."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />

      {/* Steps */}
      <section className="section-pad pt-0 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-cyan opacity-15 -top-20 -right-20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">How It Works</p>
            <h2 className="section-heading">4 Simple Steps</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map(s => (
              <div key={s.n} className="glass-card rounded-2xl p-7 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand/10 to-aurora-cyan/6" />
                <div className="aurora-orb w-24 h-24 bg-brand opacity-20 -top-4 -right-4" />
                <div className="relative">
                  <div className="w-10 h-10 rounded-full bg-brand font-display font-bold text-slate-900 flex items-center justify-center text-lg mb-5">
                    {s.n}
                  </div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Studio Pro live embed */}
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden mb-16">
            <div className="aurora-orb w-96 h-96 bg-brand opacity-15 -top-20 -right-20" />
            <div className="aurora-orb w-80 h-80 bg-aurora-purple opacity-10 bottom-0 left-0" />
            <div className="relative">
              <div className="text-center mb-8">
                <div className="text-5xl mb-5">🎓</div>
                <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
                  Browse &amp; Register Online
                </h2>
                <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Find a class, pick a time, and register — all right here. Powered by our Studio Pro parent portal.
                </p>
              </div>
              <p className="text-slate-400 text-xs mb-4 text-center">
                By enrolling you agree to our{' '}
                <Link to="/policies" className="text-brand-dark font-semibold hover:underline">studio policies</Link>.
              </p>
              <iframe
                src="https://dancestudio-pro.com/apps/api_classes_resp.php?id=zaqlxajd29jd26492e9b21845109jasdklj21dx6492e9b218455"
                width="100%"
                height="600px"
                scrolling="yes"
                frameBorder="0"
                title="DAW Class Schedule &amp; Registration"
                className="rounded-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interest form */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-10 top-0 right-0" />
        <div className="max-w-2xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Not Sure Where to Start?</p>
            <h2 className="section-heading">Send Us an Interest Form</h2>
            <p className="text-slate-500 mt-4">
              Tell us a little about your dancer and we'll help you find the perfect class.
            </p>
          </div>

          {submitted ? (
            <div className="glass-card rounded-2xl p-12 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">Thanks! We'll be in touch.</h3>
              <p className="text-slate-500">Expect to hear from us within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 md:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Parent / Guardian Name *</label>
                  <input
                    type="text" name="parentName" required value={form.parentName} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Child's Name *</label>
                  <input
                    type="text" name="childName" required value={form.childName} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="Emma Smith"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Child's Age *</label>
                  <input
                    type="number" name="childAge" required min="2" max="18" value={form.childAge} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Program of Interest</label>
                  <select
                    name="program" value={form.program} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all bg-white"
                  >
                    <option value="">Select a program...</option>
                    <option value="mini">Mini Session ($125 · 5 weeks)</option>
                    <option value="progressive">Progressive Program (year-round)</option>
                    <option value="competitive">Competitive Team</option>
                    <option value="unsure">Not Sure Yet</option>
                  </select>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="jane@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                  <input
                    type="tel" name="phone" value={form.phone} onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    placeholder="(770) 555-0100"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Dance genre interest or any questions</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={4}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                  placeholder="e.g. My daughter loves ballet but has no experience..."
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center text-base py-4">
                Submit Interest Form
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}

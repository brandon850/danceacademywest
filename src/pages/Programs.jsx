import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import programshero from "../assets/DAW-programs-hero.png";

const miniPerks = [
  "Ages 2–18 welcome",
  "All skill levels — no experience needed",
  "Integrated into existing established classes",
  "Only 5 weeks, $125 flat — no hidden fees",
  "A real taste of what DAW is all about",
  "No commitment to continue afterward",
];

const progressivePerks = [
  "Ages 3–18",
  "12-month year-round program",
  "One-time registration fee — never charged again",
  "Weekly classes building toward summer recital",
  "Full production experience on a real stage",
  "Structured curriculum with measurable growth",
  "Build lasting friendships and community",
];

const comparison = [
  {
    feature: "Duration",
    mini: "5–6 weeks",
    progressive: "Year-round (12 months)",
  },
  {
    feature: "Cost",
    mini: "$125 flat",
    progressive: "Monthly tuition + one-time reg fee",
  },
  { feature: "Commitment", mini: "None", progressive: "12-month enrollment" },
  { feature: "Ages", mini: "2–18", progressive: "3–18" },
  {
    feature: "Recital",
    mini: "No",
    progressive: "Yes — full summer production",
  },
  {
    feature: "Skill level",
    mini: "All levels",
    progressive: "All levels, builds progressively",
  },
  {
    feature: "Class type",
    mini: "Joins existing class",
    progressive: "Dedicated curriculum track",
  },
];

export default function Programs() {
  return (
    <>
      <PageHero
        image={programshero}
        label="Our Programs"
        heading="Find the Right Fit for Your Dancer"
        subheading="Whether you're just curious or ready to commit, we have a program that meets your family right where you are."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-purple"
      />

      {/* Cards */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-cyan opacity-15 -top-20 -left-20" />

        <div className="max-w-7xl mx-auto relative grid md:grid-cols-2 gap-10">
          {/* Mini Session */}
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/12 to-aurora-cyan/8" />
            <div className="aurora-orb w-72 h-72 bg-brand opacity-20 -top-10 -right-10" />
            <div className="relative">
              <div className="text-5xl mb-5">🌟</div>
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Mini Session
              </h2>
              <p className="text-brand-dark font-bold text-xl mb-6">
                $125 &nbsp;·&nbsp; 5 Weeks
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The mini session is our way of saying — come see for yourself.
                Your child joins a real class with no pressure to continue. It's
                dance without strings attached. Perfect for parents who want to
                test the waters before committing.
              </p>
              <ul className="space-y-3 mb-10">
                {miniPerks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/enroll" className="btn-primary">
                Start a Mini Session
              </Link>
            </div>
          </div>

          {/* Progressive */}
          <div className="glass-card rounded-3xl p-10 relative overflow-hidden hover:shadow-lg transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/12 to-aurora-pink/8" />
            <div className="aurora-orb w-72 h-72 bg-aurora-purple opacity-20 -top-10 -right-10" />
            <div className="relative">
              <div className="text-5xl mb-5">🏆</div>
              <h2 className="font-display font-bold text-3xl text-slate-900 mb-2">
                Progressive Program
              </h2>
              <p className="text-aurora-purple font-bold text-xl mb-6">
                Year-Round &nbsp;·&nbsp; One-Time Registration Fee
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                The progressive program is for families ready to invest in their
                child's growth. Students attend weekly classes, build real
                skills, form genuine friendships, and work toward a full summer
                recital performance every season.
              </p>
              <ul className="space-y-3 mb-10">
                {progressivePerks.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="w-5 h-5 rounded-full bg-aurora-purple/15 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link to="/enroll" className="btn-outline">
                Enroll in Progressive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-10 bottom-0 right-0" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Side by Side</p>
            <h2 className="section-heading">Program Comparison</h2>
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-display font-bold">
              <div className="p-5 text-slate-400">Feature</div>
              <div className="p-5 text-brand text-center">Mini Session</div>
              <div className="p-5 text-aurora-purple text-center">
                Progressive
              </div>
            </div>
            {comparison.map((row, i) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? "bg-white/60" : "bg-white/30"}`}
              >
                <div className="p-5 font-semibold text-slate-700">
                  {row.feature}
                </div>
                <div className="p-5 text-slate-600 text-center">{row.mini}</div>
                <div className="p-5 text-slate-600 text-center">
                  {row.progressive}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-slate-500 mt-6">
            Not sure which is right for you?{" "}
            <Link
              to="/contact"
              className="text-brand-dark font-semibold hover:underline"
            >
              Contact us
            </Link>{" "}
            and we'll help you choose.
          </p>
        </div>
      </section>

      {/* Competitive Teams callout */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 -top-10 -right-10" />
        <div className="aurora-orb w-80 h-80 bg-brand opacity-10 bottom-0 left-0" />
        <div className="max-w-7xl mx-auto relative">
          <div className="glass-card rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-10 md:p-14 relative overflow-hidden">
                <div className="aurora-orb w-64 h-64 bg-aurora-purple opacity-15 -top-8 -right-8" />
                <div className="relative">
                  <div className="text-5xl mb-5">🏆</div>
                  <h2 className="font-display font-bold text-3xl text-slate-900 mb-3">
                    Ready to Compete?
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    For dancers who want to take it to the next level, DAW fields two competitive teams — Celebrity and GA Dance Stars. Audition-based placement, multi-day training, and a community that competes with heart.
                  </p>
                  <Link to="/competitive" className="btn-primary">
                    Learn About Competitive Teams →
                  </Link>
                </div>
              </div>
              <div className="bg-slate-900 p-10 md:p-14 flex flex-col justify-center gap-5">
                {[
                  { emoji: '⭐', name: 'Celebrity',      desc: '6 levels · Ballet, Tap, Jazz, Acro, Hip Hop & more · Auditions June 27' },
                  { emoji: '🌟', name: 'GA Dance Stars', desc: 'USASF certified · Ages 7+ · Beginning through Advanced · Auditions June 26' },
                ].map(team => (
                  <div key={team.name} className="flex items-start gap-4">
                    <div className="text-3xl shrink-0">{team.emoji}</div>
                    <div>
                      <p className="font-display font-bold text-white">{team.name}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mt-0.5">{team.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-cyan opacity-10 -top-20 -right-32" />
        <div className="max-w-4xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Transparent Pricing</p>
            <h2 className="section-heading">Tuition &amp; Fees</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              No surprises — here's everything you need to know about costs before you enroll.
            </p>
          </div>

          {/* Monthly tuition table */}
          <div className="glass-card rounded-2xl overflow-hidden mb-8">
            <div className="grid grid-cols-3 bg-slate-900 text-white text-sm font-display font-bold">
              <div className="p-5 text-slate-400">Classes / Week</div>
              <div className="p-5 text-brand text-center">Monthly Tuition</div>
              <div className="p-5 text-aurora-purple text-center">You Save</div>
            </div>
            {[
              { classes: '1 class',    price: '$85',  savings: '—'    },
              { classes: '2 classes',  price: '$145', savings: '$25'  },
              { classes: '3 classes',  price: '$205', savings: '$50'  },
              { classes: '4 classes',  price: '$265', savings: '$75'  },
              { classes: '5 classes',  price: '$325', savings: '$100' },
              { classes: '6+ classes', price: '$385', savings: '$125' },
            ].map((row, i) => (
              <div
                key={row.classes}
                className={`grid grid-cols-3 text-sm border-t border-slate-100 ${i % 2 === 0 ? 'bg-white/60' : 'bg-white/30'}`}
              >
                <div className="p-5 font-semibold text-slate-700">{row.classes}</div>
                <div className="p-5 text-slate-800 font-bold text-center">{row.price}</div>
                <div className={`p-5 text-center font-semibold ${row.savings === '—' ? 'text-slate-400' : 'text-aurora-purple'}`}>
                  {row.savings}
                </div>
              </div>
            ))}
            <div className="bg-slate-50 border-t border-slate-100 px-5 py-3 text-xs text-slate-500 text-center">
              Tuition maxes out at 6 classes — enroll in more at no additional cost.
            </div>
          </div>

          {/* Additional fees */}
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="glass-card rounded-2xl p-7 relative overflow-hidden">
              <div className="aurora-orb w-32 h-32 bg-brand opacity-15 -top-4 -right-4" />
              <div className="relative">
                <div className="text-3xl mb-4">🎟️</div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">New Student Fee</h3>
                <p className="text-brand-dark font-bold text-xl mb-3">$100 <span className="text-sm font-normal text-slate-500">one-time</span></p>
                <p className="text-slate-500 text-sm leading-relaxed">Charged once at enrollment. Only reapplied if a student withdraws and re-enrolls.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 relative overflow-hidden">
              <div className="aurora-orb w-32 h-32 bg-aurora-purple opacity-15 -top-4 -right-4" />
              <div className="relative">
                <div className="text-3xl mb-4">👗</div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">Costumes</h3>
                <p className="text-aurora-purple font-bold text-xl mb-3">$110–$130 <span className="text-sm font-normal text-slate-500">per costume</span></p>
                <p className="text-slate-500 text-sm leading-relaxed">50% due by Dec 15, remaining balance charged Jan 15.</p>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7 relative overflow-hidden">
              <div className="aurora-orb w-32 h-32 bg-aurora-pink opacity-15 -top-4 -right-4" />
              <div className="relative">
                <div className="text-3xl mb-4">🎭</div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">Summer Production</h3>
                <p className="text-aurora-pink font-bold text-xl mb-3">$175 <span className="text-sm font-normal text-slate-500">per student</span></p>
                <p className="text-slate-500 text-sm leading-relaxed">Charged in March. Covers stage time, rehearsals, t-shirt, trophy, and video links.</p>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            Questions about pricing?{' '}
            <a href="/contact" className="text-brand-dark font-semibold hover:underline">Reach out</a> — we're happy to help.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-24 px-6 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/70 to-aurora-purple/50" />
        <div className="aurora-orb w-96 h-96 bg-aurora-pink opacity-20 top-0 right-0" />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl text-white mb-5">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-10">
            Registration is open now. Grab a spot in a Mini Session or jump
            straight into the Progressive Program.
          </p>
          <Link
            to="/enroll"
            className="bg-white text-slate-900 font-display font-bold px-9 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-200"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </>
  );
}

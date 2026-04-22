import { Link } from "react-router-dom";
import girls from "../assets/DAW-girls-dance.jpg";
import kid from "../assets/DAW-kid-dance.jpg";
import girlsoutside from "../assets/DAW-girls-outside.jpg";
import group from "../assets/DAW-group-photo.jpg";

const genres = [
  {
    name: "Ballet",
    emoji: "🩰",
    desc: "Grace, poise, and classical technique for all ages and levels.",
  },
  {
    name: "Hip Hop",
    emoji: "🎤",
    desc: "High-energy moves, rhythm, and creative self-expression.",
  },
  {
    name: "Tap",
    emoji: "👟",
    desc: "Rhythm and footwork that's as fun as it looks — and sounds.",
  },
  {
    name: "Jazz",
    emoji: "✨",
    desc: "Dynamic, expressive movement bursting with personality.",
  },
  {
    name: "Broadway",
    emoji: "🎭",
    desc: "Theatrical performance combining storytelling, song, and dance.",
  },
  {
    name: "Acrobatics",
    emoji: "🤸",
    desc: "Strength, flexibility, and impressive athletic skills.",
  },
];

const testimonials = [
  {
    name: "Nicole E.",
    role: "Mom of Olivia & Aiden",
    quote:
      "Being a part of the Dance Academy West family has been such a joy! We can't imagine being a part of any other studio!",
    avatar: "https://picsum.photos/seed/nicole-e/80/80",
  },
  {
    name: "Jaleen W.",
    role: "Mom of Kennedy",
    quote:
      "My daughter has been dancing at DAW for 3 years now and we have loved every single minute of it. We WILL not dance anywhere else. We love our Dance Academy West family!!!",
    avatar: "https://picsum.photos/seed/jaleen-w/80/80",
  },
  {
    name: "Brittany S.",
    role: "Mom of Lily",
    quote:
      "Dance Academy West is a fun and welcoming dance studio. The instructors and students are encouraging. Thanks DAW for providing my daughter with a loving and professional dance experience!",
    avatar: "https://picsum.photos/seed/brittany-s/80/80",
  },
  {
    name: "Zoey",
    role: "DAW Student, Age 8",
    quote:
      "It feels like joy to me. I'm comfortable with my dance instructors and love how they encourage me. I love my dance sisters and have more friends than ever before. I feel like I can do anything...",
    avatar: "https://picsum.photos/seed/zoey-8/80/80",
  },
  {
    name: "Jennifer A.",
    role: "Mom of Addison & Blakely",
    quote:
      "Our girls have loved every minute at DAW! The teachers are so loving, caring, and so knowledgeable. DAW quickly grew into part of our family.",
    avatar: "https://picsum.photos/seed/jennifer-a/80/80",
  },
];

const stats = [
  { value: "25", label: "Seasons of Dance" },
  { value: "6+", label: "Dance Genres" },
  { value: "Ages 2–18", label: "Programs for All Ages" },
  { value: "$125", label: "Mini Session — 5 Weeks" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Aurora orbs */}
        <div className="aurora-orb w-[700px] h-[700px] bg-brand opacity-20 -top-48 -right-48" />
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-purple opacity-20 -bottom-32 -left-24" />
        <div className="aurora-orb w-[350px] h-[350px] bg-aurora-pink opacity-10 top-1/3 right-1/3" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Copy */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/25 rounded-full px-4 py-1.5 text-sm font-semibold text-brand-dark mb-7">
              🎉 Now Enrolling — Ages 2–18
            </div>
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-slate-900 leading-tight mb-6">
              Where Every Child
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-dark via-cyan-400 to-aurora-purple">
                Finds Their Dance
              </span>
            </h1>
            <p className="text-slate-600 text-xl leading-relaxed mb-10 max-w-lg">
              25 seasons of joyful dance education in Carrollton, GA. From first
              steps to stage performances — we make dance fun, welcoming, and
              unforgettable for every child.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/programs" className="btn-primary text-base px-8 py-4">
                Try a Mini Session — $125
              </Link>
              <Link to="/enroll" className="btn-secondary text-base px-8 py-4">
                Enroll Now
              </Link>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-full max-w-md">
              {/* Aurora glow behind */}
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-to-br from-brand/30 via-aurora-purple/15 to-aurora-pink/20 blur-2xl" />

              {/* Main photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  src={girls}
                  alt="Kids dancing at Dance Academy West"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Floating secondary photo */}
              <div className="absolute -bottom-6 -left-8 w-36 h-36 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src={kid}
                  alt="Dance class"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Logo badge */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center p-2">
                <img
                  src="/logos/MainLogo1.png"
                  alt="DAW"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 py-14">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display font-bold text-4xl text-brand mb-1">
                {s.value}
              </div>
              <div className="text-slate-400 text-sm font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Programs ─────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <img
          src={girlsoutside}
          alt="Dance Academy West Group photo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-10"
        />
        <div className="aurora-orb w-[450px] h-[450px] bg-aurora-cyan opacity-15 -top-32 -left-32" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Choose Your Path</p>
            <h2 className="section-heading">Two Ways to Start Dancing</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mini Session */}
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-brand/12 to-aurora-cyan/8" />
              <div className="aurora-orb w-64 h-64 bg-brand top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl mb-5">🌟</div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Mini Session
                </h3>
                <p className="text-brand-dark font-bold text-lg mb-5">
                  $125 &nbsp;·&nbsp; 5 Weeks &nbsp;·&nbsp; No Commitment
                </p>
                <p className="text-slate-600 leading-relaxed mb-7">
                  Perfect for first-timers. Try a real class alongside
                  established students and discover if dance is the right fit —
                  no pressure, just fun.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-9">
                  {[
                    "Ages 2–18 welcome",
                    "All skill levels",
                    "Integrated into real classes",
                    "No long-term commitment",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-brand/20 flex items-center justify-center text-brand-dark font-bold text-xs shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/programs" className="btn-primary">
                  Start a Mini Session
                </Link>
              </div>
            </div>

            {/* Progressive Program */}
            <div className="glass-card rounded-3xl p-10 relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-aurora-purple/20">
              <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/12 to-aurora-pink/8" />
              <div className="aurora-orb w-64 h-64 bg-aurora-purple top-0 right-0 opacity-20 group-hover:opacity-30 transition-opacity" />
              <div className="relative">
                <div className="text-5xl mb-5">🏆</div>
                <h3 className="font-display font-bold text-2xl text-slate-900 mb-2">
                  Progressive Program
                </h3>
                <p className="text-aurora-purple font-bold text-lg mb-5">
                  Year-Round &nbsp;·&nbsp; One-Time Registration Fee
                </p>
                <p className="text-slate-600 leading-relaxed mb-7">
                  For families ready to invest in growth. Build skills week by
                  week, form lasting friendships, and perform in a full summer
                  recital production.
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700 mb-9">
                  {[
                    "Ages 3–18",
                    "12-month program",
                    "Summer recital performance",
                    "Pay the registration fee once — ever",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-aurora-purple/15 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/programs" className="btn-outline">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Genres ───────────────────────────────────────────── */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-pink opacity-10 -bottom-40 -right-20" />
        <div className="aurora-orb w-[350px] h-[350px] bg-brand opacity-10 top-0 left-1/2" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">Something for Everyone</p>
            <h2 className="section-heading">Explore Our Genres</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {genres.map((genre) => (
              <div
                key={genre.name}
                className="bg-white/80 glass-card rounded-2xl p-7 hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className="text-4xl mb-4">{genre.emoji}</div>
                <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                  {genre.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {genre.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/classes" className="btn-secondary">
              View All Classes & Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden">
        <div className="aurora-orb w-[600px] h-[600px] bg-brand opacity-10 -top-40 -left-40" />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-10 -bottom-20 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-14">
            <p className="section-label mb-3">From Our Families</p>
            <h2 className="section-heading">What Parents Are Saying</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 justify-items-center">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="glass-card rounded-2xl p-8 hover:shadow-md transition-shadow duration-200 flex flex-col w-full relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${i % 3 === 0 ? "from-brand/10 to-aurora-cyan/6" : i % 3 === 1 ? "from-aurora-purple/10 to-aurora-pink/6" : "from-aurora-pink/10 to-brand/6"}`}
                />
                <div className="relative flex flex-col flex-1">
                  <div className="text-brand text-5xl font-display leading-none mb-4">
                    "
                  </div>
                  <p className="text-slate-700 leading-relaxed italic flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover shrink-0 ring-2 ring-brand/30"
                    />
                    <div>
                      <div className="font-display font-bold text-slate-900">
                        {t.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {t.role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-6 md:px-12">
        <img
          src={group}
          alt="Dance Academy West Group photo"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand/80 via-cyan-300/60 to-aurora-purple/50" />
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-pink opacity-25 -top-20 right-0" />
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-purple opacity-20 bottom-0 left-0" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-black mb-5 leading-tight">
            Ready to Find Your Child's Dance?
          </h2>
          <p className="text-black/80 text-lg mb-10 leading-relaxed">
            Start with a no-commitment 5-week Mini Session for just $125.
            Classes are forming now — spots fill fast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/enroll"
              className="bg-white text-slate-900 font-display font-bold px-9 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
            >
              Enroll Today
            </Link>
            <Link
              to="/contact"
              className="border-2 border-black/80 text-black font-display font-bold px-9 py-4 rounded-full hover:bg-white/15 transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

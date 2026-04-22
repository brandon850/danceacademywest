import PageHero from "../components/ui/PageHero";
import { Link } from "react-router-dom";
import eventshero from "../assets/DAW-events-hero.jpg";

const eventTypes = [
  { emoji: "☀️", title: "Summer Session",           desc: "A 6-week summer program open to all ages and skill levels. A great way to keep dancers moving, learning, and having fun all summer long.",                                                                  gradient: "from-brand/12 to-aurora-cyan/8",         orb: "bg-brand"         },
  { emoji: "🎭", title: "Summer Recital",            desc: "The highlight of the year. Progressive Program students take the stage for a full production performance — costumes, lights, and all. Families come from across the community to watch.",                 gradient: "from-aurora-pink/12 to-aurora-purple/8", orb: "bg-aurora-pink"   },
  { emoji: "🏆", title: "Competitions",              desc: "Our competitive teams travel to regional dance competitions throughout the year. Follow along as they represent DAW on a bigger stage.",                                                                  gradient: "from-aurora-cyan/12 to-aurora-purple/8", orb: "bg-aurora-cyan",  link: "/competitive", linkLabel: "Meet the Teams" },
  { emoji: "🌸", title: "Parent Appreciation Weeks", desc: "A special celebration just for our DAW families. Come into the studio, watch your child's class, enjoy light refreshments, and take part in door prizes and raffle drawings.",                          gradient: "from-aurora-purple/12 to-brand/8",       orb: "bg-aurora-purple" },
  { emoji: "🎉", title: "Community Performances",    desc: "DAW dancers perform at local community events, school functions, and special occasions throughout the year — bringing the joy of dance to the wider Carrollton area.",                                   gradient: "from-brand/12 to-aurora-pink/8",         orb: "bg-brand"         },
  { emoji: "📚", title: "Workshops & Masterclasses", desc: "Special workshops and guest instructor masterclasses are offered periodically to help students expand their skills in specific styles or techniques.",                                                    gradient: "from-aurora-purple/12 to-aurora-cyan/8", orb: "bg-aurora-purple" },
];

export default function Events() {
  return (
    <>
      <PageHero
        image={eventshero}
        label="Events & Performances"
        heading="Celebrate Your Dancer"
        subheading="From recitals to competitions to community performances — there's always something exciting happening at Dance Academy West."
        orb1Color="bg-aurora-pink"
        orb2Color="bg-aurora-purple"
      />

      {/* Upcoming events placeholder */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-15 -top-20 -right-20" />

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">What's Coming Up</p>
            <h2 className="section-heading">Upcoming Events</h2>
          </div>

          {/* Summer Session featured card */}
          <div className="glass-card rounded-3xl overflow-hidden mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-aurora-purple/15" />
            <div className="aurora-orb w-96 h-96 bg-brand opacity-20 -top-20 -right-20" />
            <div className="aurora-orb w-80 h-80 bg-aurora-pink opacity-15 bottom-0 left-0" />
            <div className="relative grid md:grid-cols-2 gap-0">
              {/* Info */}
              <div className="p-10 md:p-14">
                <span className="inline-block text-xs font-bold bg-brand text-slate-900 px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                  Now Enrolling
                </span>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-3">
                  Summer Session 2025
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Keep your dancer moving all summer long. Our Summer Session is open to all ages and skill levels — a fun, low-commitment way to dance through the summer months.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href="https://app.gostudiopro.com/online/index.php?account_id=28352"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Register Now →
                  </a>
                  <Link to="/contact" className="btn-secondary">
                    Ask a Question
                  </Link>
                </div>
              </div>
              {/* Details */}
              <div className="bg-white/40 backdrop-blur-sm p-10 md:p-14 flex flex-col justify-center gap-6 border-t md:border-t-0 md:border-l border-white/50">
                {[
                  { icon: "📅", label: "Dates", value: "June 15 – July 24" },
                  { icon: "💰", label: "Cost", value: "$150" },
                  { icon: "📍", label: "Location", value: "Carrollton, GA" },
                  { icon: "👧", label: "Ages", value: "All ages & skill levels welcome" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand/20 flex items-center justify-center text-lg shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                      <p className="font-semibold text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Summer Production featured card */}
          <div className="glass-card rounded-3xl overflow-hidden mb-16 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/20 to-aurora-pink/15" />
            <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-20 -top-20 -right-20" />
            <div className="aurora-orb w-80 h-80 bg-aurora-pink opacity-15 bottom-0 left-0" />
            <div className="relative grid md:grid-cols-2 gap-0">
              {/* Info */}
              <div className="p-10 md:p-14">
                <span className="inline-block text-xs font-bold bg-aurora-purple text-white px-3 py-1 rounded-full mb-5 uppercase tracking-wide">
                  Tickets On Sale May 4
                </span>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-3">
                  Summer Production 2025
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fun, fabulous, and a true theatrical experience. Progressive Program dancers take the stage at the Carrollton Center for the Arts for 6 shows across a full weekend — costumes, lights, and all.
                </p>
                <ul className="space-y-2 text-sm text-slate-600 mb-8">
                  {[
                    'Livestream available for all 6 shows',
                    'Memory Program included for all dancers',
                    'Personal & business program ads available',
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-aurora-purple/20 flex items-center justify-center text-aurora-purple font-bold text-xs shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link to="/enroll" className="btn-primary">
                    Enroll to Participate
                  </Link>
                  <Link to="/contact" className="btn-secondary">
                    Ask a Question
                  </Link>
                </div>
              </div>
              {/* Details */}
              <div className="bg-white/40 backdrop-blur-sm p-10 md:p-14 flex flex-col justify-center gap-6 border-t md:border-t-0 md:border-l border-white/50">
                {[
                  { icon: '📅', label: 'Dates',         value: 'May 29–31, 2025'                          },
                  { icon: '📍', label: 'Venue',         value: 'Carrollton Center for the Arts'            },
                  { icon: '🗺️', label: 'Address',       value: '251 Alabama St., Carrollton, GA 30117'    },
                  { icon: '🎭', label: 'Shows',         value: '6 total — Fri 1 · Sat 3 · Sun 2'          },
                  { icon: '🎟️', label: 'Ticket Price',  value: '$22 + taxes/fees · Purchase online'       },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-aurora-purple/15 flex items-center justify-center text-lg shrink-0">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                      <p className="font-semibold text-slate-800">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Event type cards */}
          <div className="text-center mb-12">
            <p className="section-label mb-3">What to Expect</p>
            <h2 className="section-heading">Types of Events</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {eventTypes.map((e) => (
              <div
                key={e.title}
                className="glass-card rounded-2xl p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${e.gradient}`} />
                <div className={`aurora-orb w-32 h-32 ${e.orb} opacity-20 -top-4 -right-4`} />
                <div className="relative flex flex-col flex-1">
                  <div className="text-4xl mb-4">{e.emoji}</div>
                  <h3 className="font-display font-bold text-lg text-slate-900 mb-2">
                    {e.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {e.desc}
                  </p>
                  {e.link && (
                    <Link
                      to={e.link}
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:underline mt-4"
                    >
                      {e.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recital CTA */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-aurora-purple opacity-10 bottom-0 left-0" />
        <div className="max-w-3xl mx-auto text-center relative">
          <h2 className="font-display font-bold text-3xl text-slate-900 mb-5">
            Interested in the Summer Recital?
          </h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Recital participation is included in the Progressive Program. Enroll
            by spring to secure your dancer's spot on stage.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/programs" className="btn-primary">
              Learn About Programs
            </Link>
            <Link to="/enroll" className="btn-secondary">
              Enroll Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/ui/PageHero";
import ballet from "../assets/DAW-classes-ballet.jpeg";
import hiphop from "../assets/DAW-classes-hiphop.png";
import tap from "../assets/DAW-classes-tap.png";
import jazz from "../assets/DAW-classes-jazz.png";
import broadway from "../assets/DAW-classes-broadway.png";
import acro from "../assets/DAW-classes-acrobatics.jpg";
import creative from "../assets/DAW-classes-tinytots.png";
import girlsdance from "../assets/DAW-girls-dance.jpg";
import kiddance from "../assets/DAW-kid-dance.jpg";
import classeshero from "../assets/DAW-classes-hero.jpg";
import acting from "../assets/DAW-classes-acting.jpg";
import pom from "../assets/DAW-classes-dance-team-pom.jpg";
import contemporary from "../assets/DAW-classes-contemporary-lyrical.jpg";
import technique from "../assets/DAW-classes-ballet-technique.jpg";
import twirl from "../assets/DAW-classes-twirl-groove.jpg";

const dressCodes = [
  {
    name: "Ballet",
    icon: "🩰",
    attire:
      "Black leotard, pink tights, ballet shoes, hair in bun. Everyday undergarments should not be visible — use athletic options instead.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ27eQAD",
  },
  {
    name: "Hip Hop",
    icon: "🎤",
    attire:
      "Loose, comfortable athletic wear that allows full freedom of movement. Clean sneakers required. Personalization and self-expression encouraged.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ2HvQAL",
  },
  {
    name: "Tap",
    icon: "🥾",
    attire: "Comfortable clothing, tap shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Jazz",
    icon: "✨",
    attire: "Form-fitting athletic wear, jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Broadway",
    icon: "🎭",
    attire: "Comfortable clothing, character shoes or jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Acrobatics",
    icon: "🤸",
    attire:
      "Leotard or fitted dance set — no tights. Tights create slipping hazards on the mat. Bare feet or acro shoes.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ2K3QAL",
  },
  {
    name: "Tiny Tots / Creative Movement",
    icon: "🌈",
    attire:
      "Comfortable, easy-to-move-in clothing. Convertible tights work great — worn over the foot or pulled up as needed. Ballet shoes or bare feet.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Twirl & Tap",
    icon: "🩰",
    attire:
      "Comfortable clothing, convertible tights, ballet shoes and tap shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Twirl & Groove",
    icon: "🌟",
    attire: "Comfortable clothing, convertible tights, ballet or jazz shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Ballet Technique",
    icon: "🩰",
    attire:
      "Black leotard, pink tights, ballet shoes, hair in bun. Same requirements as Ballet Performance.",
    shop: "https://www.shopnimbly.com/ClassListView?lid=a0e4R00000MQ27eQAD",
  },
  {
    name: "Contemporary & Lyrical",
    icon: "💫",
    attire: "Form-fitting athletic wear, bare feet or lyrical shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Dance Team & Pom",
    icon: "📣",
    attire: "Athletic wear, clean sneakers or pom shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
  {
    name: "Acting",
    icon: "🎬",
    attire: "Comfortable clothing, any dance shoes.",
    shop: "https://www.shopnimbly.com/daw",
  },
];

const genres = [
  {
    name: "Tiny Tots / Creative Movement",
    ages: "Ages 2–4",
    img: kiddance,
    desc: "Our youngest dancers explore movement, rhythm, and music through imaginative play. This class builds coordination, listening skills, and a love for dance in a nurturing, age-appropriate setting.",
    attire: "Comfortable clothing, ballet shoes or bare feet.",
  },
  {
    name: "Twirl & Tap",
    ages: "Preschool",
    img: creative,
    desc: "A ballet and tap combo class designed for our preschool dancers. Students learn basic technique from both styles while building flexibility, coordination, and motor skills through fun, age-appropriate movement.",
    attire: "Comfortable clothing, ballet shoes and tap shoes.",
  },
  {
    name: "Twirl & Groove",
    ages: "Ages 3–5",
    img: twirl,
    desc: "A ballet and jazz combo class that introduces our youngest movers to basic terminology and technique from both styles. Emphasis on rhythm, self-expression, and building a love for dance.",
    attire: "Comfortable clothing, convertible tights, ballet or jazz shoes.",
  },
  {
    name: "Ballet Performance",
    ages: "Ages 3–18",
    img: ballet,
    desc: "The foundation of all dance. Students learn proper technique, posture, and grace while building strength and flexibility. Our ballet curriculum progresses from basic barre exercises to center floor combinations. Intermediate and advanced students must also enroll in Ballet Technique.",
    attire: "Black leotard, pink tights, ballet shoes, hair in bun.",
    note: "Co-requisite: Intermediate & advanced dancers must enroll in Ballet Technique.",
  },
  {
    name: "Ballet Technique",
    ages: "Ages 7–18",
    img: technique,
    desc: "A non-performance class for dancers who want to accelerate their technical development. Focuses on precision, strength, and skill refinement at a faster pace. Required for all students enrolled in Ballet Performance (intermediate/advanced), Contemporary, or Lyrical.",
    attire: "Black leotard, pink tights, ballet shoes, hair in bun.",
    note: "Required for: Ballet Performance (intermediate/advanced), Contemporary & Lyrical students.",
  },
  {
    name: "Jazz",
    ages: "Ages 3–18",
    img: jazz,
    desc: "Jazz combines technique with personality and flair. Classes focus on turns, leaps, kicks, and stylized combinations that build strength, flexibility, and showmanship. May fulfill the co-requisite for Acting students.",
    attire: "Form-fitting athletic wear, jazz shoes.",
  },
  {
    name: "Tap",
    ages: "Ages 3–18",
    img: tap,
    desc: "Tap dance develops rhythm, coordination, and musicality. Students progress from basic shuffles and flaps to more complex rhythmic patterns, and learn to create music with their feet.",
    attire: "Comfortable clothing, tap shoes.",
  },
  {
    name: "Hip Hop",
    ages: "Ages 5–18",
    img: hiphop,
    desc: "High-energy and expressive, our hip hop classes cover foundational grooves, isolations, breaking, and freestyle. Students learn to move confidently to current music in a fun, supportive environment.",
    attire: "Comfortable athletic wear, clean sneakers.",
  },
  {
    name: "Broadway Dance",
    ages: "Ages 5–18",
    img: broadway,
    desc: "Where dance meets theater. Rooted in the diverse history of Broadway musicals, students explore acting, vocals, and movement to bring characters to life. Prior experience in ballet, tap, or jazz is beneficial.",
    attire: "Comfortable clothing, character shoes or jazz shoes.",
  },
  {
    name: "Contemporary & Lyrical",
    ages: "Ages 8–18",
    img: contemporary,
    desc: "Interpretive dance styles that embrace innovation and blend techniques from multiple genres. Students learn to express emotion and tell stories through movement. Ballet class enrollment required.",
    attire: "Form-fitting athletic wear, bare feet or lyrical shoes.",
    note: "Co-requisite: Must be enrolled in a Ballet class.",
  },
  {
    name: "Acrobatics",
    ages: "Ages 4–14",
    img: acro,
    desc: "Acro builds strength, balance, and flexibility through cartwheels, walkovers, aerials, and more. All skills are taught progressively and safely with proper spotting technique.",
    attire: "Form-fitting athletic wear, bare feet or acro shoes.",
  },
  {
    name: "Dance Team & Pom",
    ages: "Ages 8–18",
    img: pom,
    desc: "Recognized as a GHSA sport, this class prepares students for middle and high school dance teams. Focus areas include turn sequences, leaps, pom choreography, and team technique — everything needed to make the team and shine.",
    attire: "Athletic wear, clean sneakers or pom shoes.",
  },
  {
    name: "Acting",
    ages: "Ages 6–18",
    img: acting,
    desc: "For students pursuing speaking roles or backstage crew positions in the summer recital. Builds confidence, stage presence, and performance skills. Students must also be enrolled in Broadway Dance or Jazz.",
    attire: "Comfortable clothing, any dance shoes.",
    note: "Co-requisite: Must be enrolled in Broadway Dance or Jazz.",
  },
];

export default function Classes() {
  return (
    <>
      <PageHero
        image={classeshero}
        label="What We Offer"
        heading="Dance Classes for Every Child"
        subheading="From tiny tots to teens, we offer classes in a wide range of styles for all skill levels. Find the perfect fit for your dancer."
        orb1Color="bg-brand"
        orb2Color="bg-aurora-cyan"
      />

      {/* Genre cards */}
      <section className="section-pad pt-10 relative overflow-hidden">
        <div className="aurora-orb w-[400px] h-[400px] bg-aurora-pink opacity-10 bottom-0 right-0" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-8">
            {genres.map((g) => (
              <div
                key={g.name}
                className="glass-card rounded-2xl overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                {/* Cover image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-2">
                    <span className="text-white font-display font-bold text-lg drop-shadow">
                      {g.name}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-bold bg-brand text-slate-900 px-3 py-1 rounded-full">
                    {g.ages}
                  </span>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-3">
                    {g.desc}
                  </p>
                  <p className="text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-500">
                      Attire:
                    </span>{" "}
                    {g.attire}
                  </p>
                  {g.note && (
                    <p className="text-xs text-aurora-purple font-semibold bg-aurora-purple/8 rounded-lg px-3 py-2 mt-3">
                      {g.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dress Code & Shop */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-[500px] h-[500px] bg-aurora-purple opacity-10 -bottom-20 -left-20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Come Prepared</p>
            <h2 className="section-heading">What to Wear</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Each style has specific attire that keeps dancers safe and moving
              their best. Shop recommended items directly through our partner
              store.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
            {dressCodes.map((d) => (
              <div
                key={d.name}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow relative overflow-hidden"
              >
                <div className="aurora-orb w-28 h-28 bg-brand opacity-10 -top-4 -right-4" />
                <div className="relative">
                  <div className="text-3xl mb-3">{d.icon}</div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-2">
                    {d.name}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">
                    {d.attire}
                  </p>
                </div>
                <a
                  href={d.shop}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-auto"
                >
                  Shop Attire →
                </a>
              </div>
            ))}
          </div>

          {/* Boys note + Kelly Sews Love */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="glass-card rounded-2xl p-6 flex gap-4 items-start">
              <div className="text-3xl shrink-0">👦</div>
              <div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                  Boys' Attire
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Sleeveless or short-sleeved shirts for freedom of movement.
                  Dance belt optional when wearing tights or fitted pants.
                </p>
                <a
                  href="https://www.shopnimbly.com/daw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-3"
                >
                  Shop Boys' Attire →
                </a>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 flex gap-4 items-start relative overflow-hidden">
              <div className="aurora-orb w-40 h-40 bg-aurora-pink opacity-15 -bottom-6 -right-6" />
              <div className="relative">
                <div className="text-3xl shrink-0 mb-1">🧵</div>
                <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                  Custom Dancewear — Kelly Sews Love
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Want something bright, colorful, or one-of-a-kind? Kelly
                  Gammill (our Broadway Dance &amp; Acting instructor) creates
                  custom dancewear through her shop.
                </p>
                <a
                  href="https://kellysewslove.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-dark hover:underline mt-3"
                >
                  Visit Kelly Sews Love →
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-slate-400 mt-8">
            The studio also stocks a limited selection of leotards, shoes, and
            tights — ask at the front desk.
          </p>
        </div>
      </section>

      {/* Schedule embed section */}
      <section className="bg-slate-50 section-pad relative overflow-hidden">
        <div className="aurora-orb w-96 h-96 bg-brand opacity-10 -top-20 -right-20" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-10">
            <p className="section-label mb-3">Up-to-Date Schedule</p>
            <h2 className="section-heading">Class Schedule</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">
              Our live class schedule is managed through Studio Pro. Browse
              available classes, times, and openings below.
            </p>
          </div>
          {/* Studio Pro iFrame placeholder */}
          <div className="glass-card rounded-2xl overflow-hidden min-h-[500px] items-center justify-center border border-slate-200 hidden">
            <div className="text-center px-8 py-16">
              <div className="text-5xl mb-4">📅</div>
              <h3 className="font-display font-bold text-xl text-slate-700 mb-2">
                Studio Pro Schedule
              </h3>
              <p className="text-slate-500 text-sm max-w-sm">
                The live class schedule will be embedded here via Studio Pro
                iFrame.
              </p>
            </div>
          </div>
          <div className="w-full aspect-video mt-10">
            <iframe
              className="w-full h-full"
              loading="lazy"
              src="https://www.canva.com/design/DAGQlV9EG-4/eQtlg0Xa4K3qHaB6XpDjXw/view?embed"
              allowfullscreen="allowfullscreen"
              allow="fullscreen"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Glass Railings",
    description: "Frameless and semi-frameless tempered glass. Sleek, modern, unobstructed views.",
    href: "/services/glass-railings",
    gradient: "from-cyan-500/20 to-blue-500/20",
    image: "/photos/glass-railing-staircase.jpg",
  },
  {
    title: "Cable Railings",
    description: "Marine-grade stainless steel cable systems. Minimal, durable, code-compliant.",
    href: "/services/cable-railings",
    gradient: "from-slate-500/20 to-zinc-500/20",
    image: "/photos/cable-railing-interior.jpg",
  },
  {
    title: "Iron Railings",
    description: "Custom wrought iron and steel. Ornamental and modern designs, built to last.",
    href: "/services/iron-railings",
    gradient: "from-amber-500/20 to-orange-500/20",
    image: "/photos/iron-staircase-chandelier.jpg",
  },
  {
    title: "Staircases",
    description: "Floating, spiral, and straight staircases. Steel, glass, and mixed materials.",
    href: "/services/staircases",
    gradient: "from-violet-500/20 to-purple-500/20",
    image: "/photos/railing-project-1.jpg",
  },
  {
    title: "Gates & Fences",
    description: "Custom driveway and pedestrian gates. Automated and manual options.",
    href: "/services/gates-fences",
    gradient: "from-emerald-500/20 to-teal-500/20",
    image: "/photos/exterior-gate.jpg",
  },
  {
    title: "Shower Doors",
    description: "Frameless glass shower enclosures. Custom-measured, precision-fitted.",
    href: "/services/shower-doors",
    gradient: "from-sky-500/20 to-indigo-500/20",
    image: "/photos/shower-door.jpg",
  },
  {
    title: "Glass Partitions",
    description: "Commercial and residential dividers. Open, light-filled spaces with privacy.",
    href: "/services/glass-partitions",
    gradient: "from-rose-500/20 to-pink-500/20",
    image: "/photos/glass-partition-office.jpg",
  },
  {
    title: "Commercial",
    description: "ADA-compliant railing systems for offices, retail, and multi-family buildings.",
    href: "/services/commercial-railings",
    gradient: "from-yellow-500/20 to-amber-500/20",
    image: "/photos/commercial-glass-staircase.jpg",
  },
];

const stats = [
  { value: "2,500+", label: "Projects Delivered" },
  { value: "15+", label: "Years of Excellence" },
  { value: "5", label: "States Covered" },
  { value: "100%", label: "Custom Fabricated" },
];

const testimonials = [
  {
    quote: "Alpha Railings installed frameless glass railings on our oceanfront balcony. The clarity and craftsmanship are absolutely stunning. They handled everything from measurement to final installation flawlessly.",
    name: "Michael R.",
    location: "Fort Lauderdale, FL",
    project: "Frameless Glass Railings",
    rating: 5,
  },
  {
    quote: "We needed cable railings for a 3-story commercial building. Alpha delivered on time, on budget, and the quality exceeded our expectations. Their team was professional and clean.",
    name: "Jennifer S.",
    location: "Boston, MA",
    project: "Commercial Cable Railings",
    rating: 5,
  },
  {
    quote: "The custom spiral staircase they built for our home is a work of art. Every detail was considered — from the initial 3D design to the powder coat finish. Absolutely recommend.",
    name: "David L.",
    location: "Portsmouth, NH",
    project: "Custom Spiral Staircase",
    rating: 5,
  },
];

const whyUs = [
  {
    title: "Premium Materials Only",
    description: "We use only the highest quality materials — tempered glass, 316 marine-grade stainless steel, and premium iron alloys.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "In-House Fabrication",
    description: "Every piece is designed and fabricated in our own shop. No outsourcing, no middlemen — just precision craftsmanship.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
      </svg>
    ),
  },
  {
    title: "Licensed in 5 States",
    description: "Fully licensed and insured across Massachusetts, New Hampshire, Maine, Rhode Island, and Florida.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: "Lifetime Craftsmanship",
    description: "We stand behind every project. Our work is built to last with quality you can see and feel for decades.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-2.927 0" />
      </svg>
    ),
  },
];

const materials = [
  {
    name: "Glass",
    tagline: "Pure Elegance",
    features: ["Unobstructed views", "Modern aesthetic", "Easy to clean", "Indoor & outdoor"],
    best: "Luxury homes, oceanfront, modern architecture",
    price: "$$$",
  },
  {
    name: "Cable",
    tagline: "Minimal Strength",
    features: ["Minimal profile", "Extremely durable", "Low maintenance", "Code compliant"],
    best: "Decks, balconies, commercial spaces",
    price: "$$",
  },
  {
    name: "Iron",
    tagline: "Timeless Power",
    features: ["Maximum strength", "Ornamental options", "Classic & modern", "Highest security"],
    best: "Gates, fences, traditional homes, security",
    price: "$$",
  },
];

const serviceAreas = [
  "Boston", "Cambridge", "Miami", "Fort Lauderdale", "Worcester",
  "Portland", "Providence", "Manchester", "Salem", "Newton",
  "Quincy", "West Palm Beach", "Somerville", "Everett", "Brookline",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/hero.webp"
            alt="Modern curved glass railing staircase"
            fill
            className="object-cover"
            style={{ objectPosition: "center center" }}
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/50 to-primary/20 sm:from-primary/95 sm:via-primary/70 sm:to-primary/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/20 sm:to-primary/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-40 lg:py-48 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 glass border border-accent/20 rounded-full px-3 py-1.5 sm:px-5 sm:py-2 mb-5 sm:mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">MA &middot; NH &middot; ME &middot; RI &middot; FL</span>
            </div>

            <h1 className="font-display text-2xl sm:text-5xl lg:text-6xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
              Modern or
              <br />
              Traditional.
              <br />
              <span className="bg-gradient-to-r from-accent via-cyan-300 to-accent bg-clip-text text-transparent">
                You Choose,
              </span>
              <br />
              We Build.
            </h1>

            <p className="mt-5 sm:mt-8 text-sm sm:text-xl text-white/70 leading-relaxed max-w-2xl">
              Custom glass, cable &amp; iron railings — designed to your vision,
              precision fabricated, and professionally installed across
              New England &amp; Florida.
            </p>

            <div className="mt-6 sm:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/quote"
                className="group relative bg-accent text-primary px-5 sm:px-8 lg:px-10 py-2.5 sm:py-4 rounded-xl font-display font-bold text-sm sm:text-base transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="group glass border border-white/10 hover:border-accent/30 text-white px-5 sm:px-8 lg:px-10 py-2.5 sm:py-4 rounded-xl font-display font-semibold text-sm sm:text-base transition-all text-center hover:text-accent"
              >
                View Our Work
                <svg className="inline-block w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="mt-8 sm:mt-16 hidden sm:flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Free Estimates
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Financing Available
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Stats */}
      <section className="relative -mt-20 z-10 pb-8">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="glass rounded-2xl border border-border p-8 sm:p-10 glow-accent">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl sm:text-5xl font-bold bg-gradient-to-b from-accent to-cyan-300 bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">What We Build</span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
                Premium Railings &amp;<br className="hidden sm:block" /> Custom Metalwork
              </h2>
            </div>
            <Link href="/services/glass-railings" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm shrink-0">
              View All Services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative bg-card rounded-2xl p-4 sm:p-6 border border-border hover:border-accent/20 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="h-32 rounded-xl overflow-hidden mb-5 relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1.5 text-accent text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    Explore
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — Full Width */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-card to-secondary" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">The Alpha Difference</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Why Clients Choose{" "}
              <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">Alpha</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => (
              <div
                key={item.title}
                className="group glass rounded-2xl p-8 border border-border hover:border-accent/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display font-bold text-foreground text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Comparison */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">Choose Your Material</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Glass vs Cable vs Iron
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Each material has unique strengths. Find the perfect fit for your project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material, idx) => (
              <div
                key={material.name}
                className={`relative rounded-2xl p-4 sm:p-6 lg:p-8 border transition-all duration-300 hover:translate-y-[-4px] ${
                  idx === 0
                    ? "bg-gradient-to-b from-accent/10 to-card border-accent/20 glow-accent"
                    : "bg-card border-border hover:border-accent/20"
                }`}
              >
                {idx === 0 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-primary text-xs font-bold px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display text-3xl font-bold text-foreground">{material.name}</h3>
                  <p className="text-accent text-sm font-semibold mt-1">{material.tagline}</p>
                  <p className="text-muted-foreground text-2xl font-bold mt-3">{material.price}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {material.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground text-sm">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">Best For</p>
                  <p className="text-sm text-foreground">{material.best}</p>
                </div>
                <Link
                  href="/quote"
                  className={`block mt-6 text-center py-3 rounded-xl font-display font-bold text-sm transition-all ${
                    idx === 0
                      ? "bg-accent text-primary hover:shadow-[0_0_30px_rgba(0,212,255,0.3)]"
                      : "border border-border text-foreground hover:border-accent/30 hover:text-accent"
                  }`}
                >
                  Get a Quote
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/materials" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm">
              View Full Material Guide
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview — Full Bleed */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-card to-secondary" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">Our Work</span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
                Featured Projects
              </h2>
            </div>
            <Link href="/portfolio" className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all text-sm shrink-0">
              View Full Portfolio
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Curved Glass Railing", location: "Commercial Office", type: "Glass", h: "h-56 sm:h-64 lg:h-80", image: "/photos/curved-glass-railing-office.jpg" },
              { title: "Iron Staircase", location: "Residential, NH", type: "Iron", h: "h-48 sm:h-56 lg:h-64", image: "/photos/iron-staircase-chandelier.jpg" },
              { title: "Glass Railing", location: "Residential, MA", type: "Glass", h: "h-56 sm:h-64 lg:h-80", image: "/photos/glass-railing-staircase.jpg" },
              { title: "Floating Staircase", location: "Residential, MA", type: "Cable", h: "h-48 sm:h-56 lg:h-64", image: "/photos/floating-cable-staircase.jpg" },
              { title: "Glass Partitions", location: "Commercial Office", type: "Glass", h: "h-56 sm:h-64 lg:h-80", image: "/photos/glass-partition-office.jpg" },
              { title: "Cable Railing", location: "Residential Exterior", type: "Cable", h: "h-48 sm:h-56 lg:h-64", image: "/photos/exterior-cable-railing.jpg" },
            ].map((project) => (
              <div
                key={project.title}
                className={`group relative ${project.h} rounded-2xl overflow-hidden border border-border hover:border-accent/20 transition-all duration-500 cursor-pointer`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-accent text-xs font-bold uppercase tracking-widest">{project.type}</span>
                  <h3 className="font-display font-bold text-white text-lg mt-1">{project.title}</h3>
                  <p className="text-white/60 text-sm">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">Client Reviews</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground tracking-tight">
              Trusted by Homeowners &amp; Businesses
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass rounded-2xl p-4 sm:p-6 lg:p-8 border border-border">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-foreground/80 leading-relaxed mb-8 text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-display font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location} &middot; {t.project}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing Banner */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-accent/5 to-transparent" />
            <div className="absolute inset-0 bg-card" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/40 via-accent/10 to-transparent" />
            <div className="relative p-6 sm:p-10 lg:p-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div className="max-w-2xl">
                <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">Financing Available</span>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                  Premium Railings,<br />Affordable Payments
                </h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  Low monthly payments. Quick approval. No hidden fees. Get the railings you want today.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <Link href="/financing" className="bg-accent text-primary px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-display font-bold text-base transition-all hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] text-center">
                  Learn More
                </Link>
                <Link href="/quote" className="border border-border text-foreground px-5 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl font-display font-semibold text-base transition-colors hover:border-accent/30 hover:text-accent text-center">
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-24 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-[0.2em]">Where We Work</span>
            <h2 className="mt-3 font-display text-2xl sm:text-4xl font-bold text-foreground tracking-tight">
              5 States. One Standard of Excellence.
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <div key={area} className="glass rounded-lg px-4 py-3 border border-border text-center text-sm font-medium text-foreground">
                {area}
              </div>
            ))}
            <Link href="/areas" className="bg-accent/10 rounded-lg px-4 py-3 border border-accent/20 text-center text-sm font-bold text-accent hover:bg-accent/20 transition-colors">
              &amp; More
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mt-4">
            {[
              { name: "Massachusetts", href: "/areas/massachusetts" },
              { name: "New Hampshire", href: "/areas/new-hampshire" },
              { name: "Maine", href: "/areas/maine" },
              { name: "Rhode Island", href: "/areas/rhode-island" },
              { name: "Florida", href: "/areas/florida" },
            ].map((state) => (
              <Link key={state.name} href={state.href} className="glass rounded-lg px-4 py-3 border border-accent/10 text-center text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 lg:w-[600px] h-72 sm:h-96 lg:h-[600px] bg-accent/8 rounded-full blur-[150px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
            Ready to{" "}
            <span className="bg-gradient-to-r from-accent to-cyan-300 bg-clip-text text-transparent">
              Elevate
            </span>{" "}
            Your Space?
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote. Custom designs, premium materials,
            professional installation across 5 states.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent text-primary px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl font-display font-bold text-lg transition-all hover:shadow-[0_0_60px_rgba(0,212,255,0.3)]"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17543182099"
              className="glass border border-white/10 hover:border-accent/30 text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl font-display font-semibold text-lg transition-all hover:text-accent"
            >
              Call (754) 318-2099
            </a>
          </div>
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-20 lg:hidden" />
    </>
  );
}

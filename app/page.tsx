import Link from "next/link";

const services = [
  {
    title: "Glass Railings",
    description: "Frameless and semi-frameless tempered glass railings. Sleek, modern, and unobstructed views for any space.",
    href: "/services/glass-railings",
    icon: "glass",
  },
  {
    title: "Cable Railings",
    description: "Stainless steel cable railing systems. Minimal, durable, and code-compliant for decks, stairs, and balconies.",
    href: "/services/cable-railings",
    icon: "cable",
  },
  {
    title: "Iron Railings & Handrails",
    description: "Custom wrought iron and steel railings. Ornamental and modern designs, built to last.",
    href: "/services/iron-railings",
    icon: "iron",
  },
  {
    title: "Staircases & Spiral Stairs",
    description: "Custom straight, floating, and spiral staircases in steel, glass, and mixed materials.",
    href: "/services/staircases",
    icon: "stairs",
  },
  {
    title: "Gates & Fences",
    description: "Custom pedestrian and driveway gates. Automated and manual options in iron, steel, and aluminum.",
    href: "/services/gates-fences",
    icon: "gate",
  },
  {
    title: "Shower Doors",
    description: "Frameless glass shower enclosures and doors. Custom-measured, precision-fitted, and stunning.",
    href: "/services/shower-doors",
    icon: "shower",
  },
  {
    title: "Glass Partitions",
    description: "Commercial and residential glass partitions. Create open, light-filled spaces with privacy.",
    href: "/services/glass-partitions",
    icon: "partition",
  },
  {
    title: "Commercial Railings",
    description: "ADA-compliant railing systems for commercial properties, offices, and multi-family buildings.",
    href: "/services/commercial-railings",
    icon: "commercial",
  },
];

const stats = [
  { value: "2,500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "5", label: "States Served" },
  { value: "100%", label: "Custom Built" },
];

const testimonials = [
  {
    quote: "Alpha Railings installed frameless glass railings on our oceanfront balcony. The clarity and craftsmanship are absolutely stunning. They handled everything from measurement to final installation flawlessly.",
    name: "Michael R.",
    location: "Fort Lauderdale, FL",
    project: "Glass Railings",
  },
  {
    quote: "We needed cable railings for a 3-story commercial building. Alpha delivered on time, on budget, and the quality exceeded our expectations. Their team was professional and clean.",
    name: "Jennifer S.",
    location: "Boston, MA",
    project: "Cable Railings",
  },
  {
    quote: "The custom spiral staircase they built for our home is a work of art. Every detail was considered — from the initial 3D design to the powder coat finish. Absolutely recommend.",
    name: "David L.",
    location: "Portsmouth, NH",
    project: "Spiral Staircase",
  },
];

const materials = [
  {
    name: "Glass",
    features: ["Unobstructed views", "Modern aesthetic", "Easy to clean", "Indoor & outdoor"],
    best: "Luxury homes, oceanfront, modern architecture",
  },
  {
    name: "Cable",
    features: ["Minimal profile", "Extremely durable", "Low maintenance", "Code compliant"],
    best: "Decks, balconies, commercial spaces",
  },
  {
    name: "Iron",
    features: ["Maximum strength", "Ornamental options", "Classic & modern", "Highest security"],
    best: "Gates, fences, traditional homes, security",
  },
];

const processSteps = [
  { step: "01", title: "Free Consultation", description: "We visit your site, discuss your vision, and take precise measurements." },
  { step: "02", title: "Custom Design", description: "Our team creates detailed designs and material recommendations for your approval." },
  { step: "03", title: "Fabrication", description: "Every piece is custom-fabricated in our shop to exact specifications." },
  { step: "04", title: "Installation", description: "Our certified crew installs your project with precision and care." },
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
      <section className="relative bg-primary overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(90deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px),
                repeating-linear-gradient(0deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px)`,
            }} />
          </div>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">Premium Railings &amp; Ironworks</span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
              Railings That{" "}
              <span className="text-accent">Define</span>{" "}
              Your Space
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Ultra-modern glass, cable &amp; iron railings — custom designed,
              precision fabricated, and professionally installed. Serving
              Massachusetts, New Hampshire, Maine, Rhode Island &amp; Florida.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25 text-center"
              >
                Get a Free Quote
              </Link>
              <Link
                href="/portfolio"
                className="border border-white/15 hover:border-accent/30 text-white px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors text-center hover:text-accent"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trust Bar */}
      <section className="relative -mt-16 z-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl sm:text-4xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Our Services</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Premium Railings &amp; Custom Metalwork
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From modern glass to classic iron — we design, fabricate, and install it all.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="h-1 w-8 bg-accent/30 rounded group-hover:w-12 group-hover:bg-accent transition-all duration-300 mb-5" />
                <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-4 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Material Comparison */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Compare Materials</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Glass vs Cable vs Iron
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Not sure which material is right for your project? Here is a quick comparison.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {materials.map((material) => (
              <div key={material.name} className="bg-card rounded-2xl p-8 border border-border hover:border-accent/20 transition-colors">
                <h3 className="font-display text-2xl font-bold text-accent mb-4">{material.name}</h3>
                <ul className="space-y-3 mb-6">
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

      {/* Process */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">How It Works</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                From Concept to{" "}
                <span className="text-accent">Completion</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Every project follows our proven 4-step process. We handle
                everything — from the initial consultation and custom design
                through fabrication and professional installation. No
                subcontractors, no middlemen.
              </p>
              <div className="mt-8">
                <Link
                  href="/our-process"
                  className="text-accent font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Learn more about our process
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {processSteps.map((item) => (
                <div key={item.step} className="bg-card rounded-2xl p-6 border border-border">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-display font-bold text-sm mb-3">
                    {item.step}
                  </span>
                  <h3 className="font-display font-bold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Client Reviews</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div>
                  <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location} &middot; {t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/20 text-center">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Flexible Financing</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Premium Railings, Affordable Payments
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              We offer flexible financing options so you can get the railings you
              want today. Low monthly payments, quick approval, and no hidden fees.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/financing"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                Learn About Financing
              </Link>
              <Link
                href="/quote"
                className="border border-border hover:border-accent/30 text-foreground px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors hover:text-accent"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Where We Work</span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
              Serving 5 States Across the East Coast
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 max-w-4xl mx-auto">
            {serviceAreas.map((area) => (
              <Link key={area} href={`/areas/${area.toLowerCase().replace(/\s+/g, "-")}`} className="bg-card rounded-lg px-4 py-3 border border-border text-center text-sm font-medium text-foreground hover:border-accent/30 hover:text-accent transition-colors">
                {area}
              </Link>
            ))}
            <Link href="/areas" className="bg-accent/10 rounded-lg px-4 py-3 border border-accent/20 text-center text-sm font-bold text-accent hover:bg-accent/20 transition-colors">
              &amp; More
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 max-w-4xl mx-auto mt-4">
            {[
              { name: "Massachusetts", href: "/areas/massachusetts" },
              { name: "New Hampshire", href: "/areas/new-hampshire" },
              { name: "Maine", href: "/areas/maine" },
              { name: "Rhode Island", href: "/areas/rhode-island" },
              { name: "Florida", href: "/areas/florida" },
            ].map((state) => (
              <Link key={state.name} href={state.href} className="bg-card rounded-lg px-4 py-3 border border-border text-center text-sm font-semibold text-accent hover:bg-accent/10 transition-colors">
                {state.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">Start Your Project</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Ready to Elevate Your Space?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote for your railing or ironwork project.
            Custom designs, premium materials, professional installation.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17543182099"
              className="border border-border hover:border-accent/30 text-foreground px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors hover:text-accent"
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

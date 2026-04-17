import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Alpha Railings - Premium Railing Fabrication & Installation",
  description:
    "Alpha Railings started in South Florida and expanded to New England. We specialize in modern glass, cable, and iron railings with 15+ years of premium craftsmanship across 5 states.",
  openGraph: {
    title: "About Us | Alpha Railings",
    description:
      "Built on innovation, driven by precision. 15+ years of premium railing fabrication and installation across MA, NH, ME, RI & FL.",
    url: "https://alpharailings.com/about",
  },
};

const values = [
  {
    title: "Innovation",
    description:
      "We stay ahead of the curve with modern materials, cutting-edge fabrication techniques, and design-forward solutions that set your space apart.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: "Precision",
    description:
      "Every measurement, cut, and weld is executed with exacting standards. We engineer each project to fit perfectly — no shortcuts, no compromises.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
      </svg>
    ),
  },
  {
    title: "Transparency",
    description:
      "Clear pricing, honest timelines, and open communication from start to finish. You always know where your project stands.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
  },
  {
    title: "Quality",
    description:
      "We use only premium-grade materials and proven installation methods. Every project is backed by our commitment to lasting craftsmanship.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "2,500+", label: "Projects Completed" },
  { value: "15+", label: "Years Experience" },
  { value: "5", label: "States Served" },
  { value: "100%", label: "Custom Built" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            About Alpha Railings
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Built on Innovation,{" "}
            <span className="text-accent">Driven by Precision</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From South Florida to New England, we have built our reputation on
            delivering premium railings that transform spaces.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                Our Story
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                From South Florida to{" "}
                <span className="text-accent">New England</span>
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Alpha Railings was founded in South Florida with a simple
                  mission: deliver premium-quality railings that combine modern
                  design with uncompromising craftsmanship. What started as a
                  small custom fabrication shop quickly grew as word spread about
                  our commitment to precision and quality.
                </p>
                <p>
                  As demand grew, we expanded our operations to New England,
                  bringing the same level of excellence to Massachusetts, New
                  Hampshire, Maine, and Rhode Island. Today, we serve clients
                  across five states with a full range of glass, cable, and iron
                  railing systems.
                </p>
                <p>
                  Our focus on modern materials sets us apart. We specialize in
                  frameless glass, stainless steel cable, and custom iron
                  solutions — each engineered for durability, code compliance,
                  and visual impact. Every project is custom-designed and
                  fabricated in-house, ensuring quality control from start to
                  finish.
                </p>
              </div>
            </div>
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-accent/20 via-accent/5 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-2xl font-bold text-accent">A</span>
                  </div>
                  <p className="font-display text-lg font-bold text-foreground">Alpha Railings</p>
                  <p className="text-sm text-muted-foreground mt-1">Premium Craftsmanship Since Day One</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              What We Stand For
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              These principles guide every project we take on, from initial
              consultation through final installation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-3xl sm:text-5xl font-bold text-accent">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Start Your Project
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Ready to Work With Us?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote for your railing project. Custom
            designs, premium materials, professional installation.
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

      <div className="h-20 lg:hidden" />
    </>
  );
}

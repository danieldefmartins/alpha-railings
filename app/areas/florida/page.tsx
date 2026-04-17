import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Glass & Iron Railings in Florida | Alpha Railings",
  description:
    "Premium glass, cable & iron railings in South Florida. Custom fabrication and installation in Fort Lauderdale, Miami, West Palm Beach, and across the region. Free quotes.",
};

const counties = [
  {
    name: "Broward County",
    cities: [
      "Fort Lauderdale",
      "Hollywood",
      "Pembroke Pines",
      "Coral Springs",
      "Plantation",
      "Davie",
      "Deerfield Beach",
      "Pompano Beach",
    ],
  },
  {
    name: "Palm Beach County",
    cities: [
      "West Palm Beach",
      "Boca Raton",
      "Delray Beach",
      "Boynton Beach",
      "Jupiter",
      "Palm Beach Gardens",
    ],
  },
  {
    name: "Miami-Dade County",
    cities: [
      "Miami",
      "Miami Beach",
      "Coral Gables",
      "Hialeah",
      "Doral",
      "Aventura",
      "Key Biscayne",
      "Homestead",
    ],
  },
];

const services = [
  { title: "Glass Railings", href: "/services/glass-railings" },
  { title: "Cable Railings", href: "/services/cable-railings" },
  { title: "Iron Railings & Handrails", href: "/services/iron-railings" },
  { title: "Staircases & Spiral Stairs", href: "/services/staircases" },
  { title: "Gates & Fences", href: "/services/gates-fences" },
  { title: "Shower Doors", href: "/services/shower-doors" },
  { title: "Glass Partitions", href: "/services/glass-partitions" },
  { title: "Commercial Railings", href: "/services/commercial-railings" },
];

const reasons = [
  {
    title: "Custom Fabrication",
    description:
      "Every railing is designed and built to your exact specifications in our own shop.",
  },
  {
    title: "Licensed & Insured",
    description:
      "Fully licensed and insured for residential and commercial work throughout Florida.",
  },
  {
    title: "Hurricane-Grade Materials",
    description:
      "We use impact-rated glass and corrosion-resistant hardware built for the South Florida climate.",
  },
  {
    title: "No Subcontractors",
    description:
      "Our own certified crew handles every installation from start to finish.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Alpha Railings",
  description:
    "Premium glass, cable & iron railings in South Florida. Custom fabrication and professional installation.",
  url: "https://alpharailings.com/areas/florida",
  telephone: "+1-754-318-2099",
  email: "support@alpharailings.com",
  areaServed: {
    "@type": "State",
    name: "Florida",
    containedInPlace: {
      "@type": "Country",
      name: "United States",
    },
  },
};

export default function FloridaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px),
                repeating-linear-gradient(0deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px)`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                South Florida
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Glass &amp; Iron Railings in{" "}
              <span className="text-accent">Florida</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Alpha Railings provides premium glass, cable &amp; iron railing
              fabrication and installation throughout South Florida — from Fort
              Lauderdale to Miami and Palm Beach.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="bg-accent hover:bg-accent/90 text-primary px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-accent/25 text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="tel:+17543182099"
                className="border border-border hover:border-accent/30 text-foreground px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors text-center hover:text-accent"
              >
                Call (754) 318-2099
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Counties Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Counties &amp; Cities
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Where We Work in South Florida
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              We serve homeowners, contractors, and businesses across the
              Tri-County area and beyond.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {counties.map((county) => (
              <div
                key={county.name}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-display text-base font-bold text-accent mb-4">
                  {county.name}
                </h3>
                <ul className="space-y-2">
                  {county.cities.map((city) => (
                    <li
                      key={city}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-accent/50 flex-shrink-0" />
                      {city}
                    </li>
                  ))}
                  <li className="text-sm text-accent/70 font-medium pt-1">
                    &amp; More
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              What We Offer in Florida
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="h-1 w-8 bg-accent/30 rounded group-hover:w-12 group-hover:bg-accent transition-all duration-300 mb-5" />
                <h3 className="font-display text-sm font-bold text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <span className="inline-flex items-center gap-1.5 mt-3 text-accent font-semibold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More
                  <svg
                    className="w-3.5 h-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Why Alpha Railings
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="h-1 w-8 bg-accent rounded mb-5" />
                <h3 className="font-display text-sm font-bold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
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
            Ready to Elevate Your Space?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Get a free, no-obligation quote for your railing or ironwork
            project in South Florida.
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

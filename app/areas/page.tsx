import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Areas We Serve | Alpha Railings",
  description:
    "Alpha Railings serves Massachusetts, New Hampshire, Maine, Rhode Island & Florida with premium glass, cable & iron railing installation.",
};

const states = [
  {
    name: "Massachusetts",
    href: "/areas/massachusetts",
    description:
      "Boston, Cambridge, Everett, Worcester, and communities across the state. Full-service railing installation from the North Shore to Cape Cod.",
  },
  {
    name: "New Hampshire",
    href: "/areas/new-hampshire",
    description:
      "Manchester, Nashua, Portsmouth, Concord, and beyond. Custom railings for homes and businesses throughout the Granite State.",
  },
  {
    name: "Maine",
    href: "/areas/maine",
    description:
      "Portland, Scarborough, Biddeford, and Southern Maine communities. Premium railings for coastal and inland properties.",
  },
  {
    name: "Rhode Island",
    href: "/areas/rhode-island",
    description:
      "Providence, Warwick, Newport, and across the Ocean State. Modern and classic railing solutions for every project.",
  },
  {
    name: "Florida",
    href: "/areas/florida",
    description:
      "Fort Lauderdale, Miami, West Palm Beach, and South Florida. Glass, cable & iron railings built for the coastal climate.",
  },
];

export default function AreasPage() {
  return (
    <>
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
                Service Areas
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              Areas We <span className="text-accent">Serve</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Alpha Railings provides premium glass, cable &amp; iron railing
              fabrication and installation across five states on the East Coast.
              From New England to South Florida, we bring the same quality and
              craftsmanship to every project.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* State Cards */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              5 States
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              East Coast Coverage
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Select a state to see the counties and cities we serve.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {states.map((state) => (
              <Link
                key={state.name}
                href={state.href}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
              >
                <div className="h-1 w-8 bg-accent/30 rounded group-hover:w-12 group-hover:bg-accent transition-all duration-300 mb-5" />
                <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {state.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {state.description}
                </p>
                <span className="inline-flex items-center gap-1.5 mt-5 text-accent font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  View Cities
                  <svg
                    className="w-4 h-4"
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
            project. Custom designs, premium materials, professional
            installation.
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

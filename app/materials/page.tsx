import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Material Guide | Glass vs Cable vs Iron | Alpha Railings",
  description:
    "Compare glass, cable, and iron railings side by side. Learn about pros, cons, maintenance, cost, and best applications for each material. Expert guidance from Alpha Railings.",
  openGraph: {
    title: "Material Guide | Glass vs Cable vs Iron | Alpha Railings",
    description:
      "Compare glass, cable, and iron railings. Pros, cons, maintenance, cost, and best applications for each material.",
    url: "https://alpharailings.com/materials",
  },
};

const materials = [
  {
    name: "Glass Railings",
    description:
      "Frameless and semi-frameless tempered glass railing systems deliver a sleek, modern aesthetic with unobstructed views. Ideal for luxury homes, waterfront properties, and modern architecture where maximizing sightlines is a priority.",
    pros: [
      "Unobstructed views and maximum light",
      "Modern, high-end aesthetic",
      "Wind protection for balconies and decks",
      "Easy to clean — no crevices or gaps",
      "Does not obstruct architectural design",
    ],
    cons: [
      "Higher upfront cost than other materials",
      "Shows fingerprints and water spots",
      "Requires periodic cleaning for best appearance",
      "Heavier — may need structural reinforcement",
    ],
    bestFor: "Luxury homes, oceanfront properties, modern architecture, pool fencing, indoor staircases, shower enclosures",
    maintenance: "Clean with glass cleaner every 1-2 weeks. Inspect hardware and seals annually.",
    costRange: "$$$",
    costNote: "$150 - $400+ per linear foot installed",
  },
  {
    name: "Cable Railings",
    description:
      "Stainless steel cable railing systems offer a minimal, industrial-modern look with excellent durability. The thin cables maintain open sightlines while providing a secure barrier that meets all building codes.",
    pros: [
      "Minimal visual profile — preserves views",
      "Extremely durable and weather-resistant",
      "Low maintenance — no painting or staining",
      "Marine-grade stainless steel resists corrosion",
      "Versatile — works with wood, metal, or composite posts",
    ],
    cons: [
      "Cables may need periodic re-tensioning",
      "Not permitted in all jurisdictions for certain applications",
      "Less wind protection than glass",
      "Horizontal cables can be a climbing hazard for children",
    ],
    bestFor: "Decks, balconies, porches, commercial spaces, modern homes, coastal properties",
    maintenance: "Wipe down cables annually. Check tension every 6-12 months. Inspect fittings for corrosion.",
    costRange: "$$",
    costNote: "$100 - $250+ per linear foot installed",
  },
  {
    name: "Iron Railings",
    description:
      "Custom wrought iron and steel railing systems combine maximum strength with versatile design options. From ornamental traditional patterns to clean modern lines, iron railings provide security, durability, and timeless style.",
    pros: [
      "Maximum strength and security",
      "Highly customizable — ornamental and modern designs",
      "Longest lifespan with proper maintenance",
      "Classic aesthetic that increases property value",
      "Ideal for gates, fences, and security applications",
    ],
    cons: [
      "Susceptible to rust without proper coating",
      "Heavier than cable or glass systems",
      "Requires periodic maintenance (touch-up paint)",
      "Ornamental designs can be more expensive",
    ],
    bestFor: "Traditional homes, gates and fences, security applications, staircases, commercial properties, historic buildings",
    maintenance: "Inspect coating annually. Touch up chips or scratches promptly. Full re-coating every 5-10 years depending on exposure.",
    costRange: "$-$$$",
    costNote: "$80 - $300+ per linear foot installed",
  },
];

const comparisonRows = [
  { label: "Aesthetic", glass: "Ultra-modern", cable: "Modern-minimal", iron: "Classic to modern" },
  { label: "View Preservation", glass: "Best", cable: "Excellent", iron: "Good" },
  { label: "Durability", glass: "High", cable: "Very High", iron: "Very High" },
  { label: "Maintenance", glass: "Medium", cable: "Low", iron: "Medium-High" },
  { label: "Wind Protection", glass: "Best", cable: "None", iron: "Partial" },
  { label: "Security", glass: "Good", cable: "Good", iron: "Best" },
  { label: "Customization", glass: "Moderate", cable: "Moderate", iron: "Highest" },
  { label: "Cost Range", glass: "$$$", cable: "$$", iron: "$-$$$" },
  { label: "Lifespan", glass: "20+ years", cable: "20+ years", iron: "30+ years" },
  { label: "Best Setting", glass: "Waterfront, luxury", cable: "Decks, commercial", iron: "Gates, traditional" },
];

export default function MaterialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Material Guide
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Glass vs Cable vs <span className="text-accent">Iron</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Not sure which railing material is right for your project? This
            comprehensive guide compares all three options to help you decide.
          </p>
        </div>
      </section>

      {/* Material Details */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {materials.map((material) => (
              <div
                key={material.name}
                className="bg-card rounded-2xl border border-border p-8 sm:p-12"
              >
                <div className="flex items-center gap-4 mb-6">
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-accent">
                    {material.name}
                  </h2>
                  <span className="bg-accent/10 text-accent text-sm font-bold px-3 py-1 rounded-full">
                    {material.costRange}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                  {material.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Pros */}
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                      Pros
                    </h3>
                    <ul className="space-y-2">
                      {material.pros.map((pro) => (
                        <li key={pro} className="flex items-start gap-3 text-sm">
                          <svg className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          <span className="text-foreground">{pro}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Cons */}
                  <div>
                    <h3 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
                      Cons
                    </h3>
                    <ul className="space-y-2">
                      {material.cons.map((con) => (
                        <li key={con} className="flex items-start gap-3 text-sm">
                          <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                          </svg>
                          <span className="text-foreground">{con}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-border">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      Best For
                    </p>
                    <p className="text-sm text-foreground">{material.bestFor}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      Maintenance
                    </p>
                    <p className="text-sm text-foreground">{material.maintenance}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold mb-1">
                      Estimated Cost
                    </p>
                    <p className="text-sm text-foreground">{material.costNote}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Side by Side
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Quick Comparison
            </h2>
          </div>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 gap-px bg-border">
              <div className="bg-card p-4 sm:p-6">
                <span className="text-muted-foreground text-sm font-semibold">Feature</span>
              </div>
              <div className="bg-card p-4 sm:p-6 text-center">
                <span className="text-accent font-display font-bold text-sm">Glass</span>
              </div>
              <div className="bg-card p-4 sm:p-6 text-center">
                <span className="text-accent font-display font-bold text-sm">Cable</span>
              </div>
              <div className="bg-card p-4 sm:p-6 text-center">
                <span className="text-accent font-display font-bold text-sm">Iron</span>
              </div>
            </div>
            {/* Rows */}
            {comparisonRows.map((row, index) => (
              <div
                key={row.label}
                className={`grid grid-cols-4 gap-px bg-border ${
                  index % 2 === 0 ? "" : ""
                }`}
              >
                <div className="bg-card p-4 sm:p-6">
                  <span className="text-foreground text-sm font-medium">{row.label}</span>
                </div>
                <div className="bg-card p-4 sm:p-6 text-center">
                  <span className="text-muted-foreground text-sm">{row.glass}</span>
                </div>
                <div className="bg-card p-4 sm:p-6 text-center">
                  <span className="text-muted-foreground text-sm">{row.cable}</span>
                </div>
                <div className="bg-card p-4 sm:p-6 text-center">
                  <span className="text-muted-foreground text-sm">{row.iron}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Need Help Deciding?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            We Will Help You Choose the Right Material
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project is different. Request a free consultation and our team
            will recommend the best material for your specific space, budget, and
            style.
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

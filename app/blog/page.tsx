import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Alpha Railings - Railing Tips, Trends & Guides",
  description:
    "Expert guides, design inspiration, and industry insights for glass, cable, and iron railings. Tips for homeowners, builders, and architects from Alpha Railings.",
  openGraph: {
    title: "Blog | Alpha Railings",
    description:
      "Expert guides, design inspiration, and industry insights for glass, cable, and iron railings.",
    url: "https://alpharailings.com/blog",
  },
};

const articles = [
  {
    slug: "glass-vs-cable-railings",
    title: "Glass vs Cable Railings: Which Is Right for Your Home?",
    excerpt:
      "Comparing two of the most popular modern railing options. We break down the pros, cons, cost, and best applications to help you make the right choice for your project.",
    category: "Guides",
    readTime: "6 min read",
    gradient: "from-cyan-900/40 to-blue-900/40",
  },
  {
    slug: "top-railing-trends-2025",
    title: "Top 8 Railing Trends in 2025",
    excerpt:
      "From frameless glass to matte black finishes, discover the railing trends that are defining modern architecture and interior design this year.",
    category: "Trends",
    readTime: "5 min read",
    gradient: "from-violet-900/40 to-indigo-900/40",
  },
  {
    slug: "how-to-choose-deck-railings",
    title: "How to Choose the Perfect Railings for Your Deck",
    excerpt:
      "Your deck railing affects safety, aesthetics, and property value. Learn how to choose the right material, style, and height for your outdoor space.",
    category: "Guides",
    readTime: "7 min read",
    gradient: "from-emerald-900/40 to-teal-900/40",
  },
  {
    slug: "commercial-railing-requirements",
    title: "Commercial Railing Requirements: ADA & Building Code Guide",
    excerpt:
      "ADA compliance, building codes, and safety standards for commercial railing installations. What property owners and managers need to know.",
    category: "Commercial",
    readTime: "8 min read",
    gradient: "from-amber-900/40 to-orange-900/40",
  },
  {
    slug: "frameless-glass-shower-doors-guide",
    title: "The Complete Guide to Frameless Glass Shower Doors",
    excerpt:
      "Everything you need to know about frameless glass shower doors - from glass types and hardware options to installation and maintenance tips.",
    category: "Guides",
    readTime: "6 min read",
    gradient: "from-sky-900/40 to-cyan-900/40",
  },
  {
    slug: "iron-railings-classic-meets-modern",
    title: "Iron Railings: Where Classic Craftsmanship Meets Modern Design",
    excerpt:
      "Iron railings are not just for traditional homes. Discover how modern fabrication techniques are creating sleek, contemporary iron designs for today's architecture.",
    category: "Design",
    readTime: "5 min read",
    gradient: "from-rose-900/40 to-stone-900/40",
  },
  {
    slug: "glass-railings-oceanfront-homes",
    title: "Why Glass Railings Are Perfect for Oceanfront Properties",
    excerpt:
      "Discover why glass railing systems are the top choice for coastal homes. Learn about salt resistance, wind codes, maintenance, and unobstructed ocean views.",
    category: "Design",
    readTime: "5 min read",
    gradient: "from-blue-900/40 to-teal-900/40",
  },
  {
    slug: "cable-railing-installation-guide",
    title: "Cable Railing Systems: What You Need to Know Before Installing",
    excerpt:
      "A comprehensive guide to cable railing systems covering cable types, post spacing, tensioning, DIY vs professional installation, and building codes.",
    category: "Guides",
    readTime: "7 min read",
    gradient: "from-zinc-900/40 to-slate-900/40",
  },
  {
    slug: "staircase-design-ideas",
    title: "15 Stunning Custom Staircase Design Ideas",
    excerpt:
      "From floating stairs to spiral designs and glass treads, discover the most inspiring custom staircase designs for modern homes and commercial spaces.",
    category: "Design",
    readTime: "6 min read",
    gradient: "from-purple-900/40 to-pink-900/40",
  },
  {
    slug: "railing-maintenance-tips",
    title: "How to Maintain Your Railings: Glass, Cable & Iron Care Guide",
    excerpt:
      "Keep your railings looking pristine with our comprehensive maintenance guide. Cleaning schedules, recommended products, and seasonal care tips for every railing type.",
    category: "Maintenance",
    readTime: "5 min read",
    gradient: "from-green-900/40 to-emerald-900/40",
  },
  {
    slug: "choosing-gate-for-property",
    title: "How to Choose the Right Gate for Your Property",
    excerpt:
      "From driveway gates to pedestrian entries, learn how to choose the right gate material, style, and automation features for your residential or commercial property.",
    category: "Guides",
    readTime: "6 min read",
    gradient: "from-yellow-900/40 to-amber-900/40",
  },
  {
    slug: "glass-partitions-office-design",
    title: "Glass Partitions: Transforming Modern Office Spaces",
    excerpt:
      "How glass partitions are revolutionizing office design. Learn about privacy options, acoustics, glass types, and how to create productive, light-filled workspaces.",
    category: "Commercial",
    readTime: "5 min read",
    gradient: "from-indigo-900/40 to-blue-900/40",
  },
  {
    slug: "railing-costs-breakdown",
    title: "Railing Costs Explained: Glass, Cable & Iron Price Comparison",
    excerpt:
      "A transparent look at railing costs. Compare price per linear foot for glass, cable, and iron systems. Understand what factors affect pricing and how to budget your project.",
    category: "Pricing",
    readTime: "7 min read",
    gradient: "from-emerald-900/40 to-cyan-900/40",
  },
  {
    slug: "florida-building-codes-railings",
    title: "Florida Building Codes for Railings: What Homeowners Need to Know",
    excerpt:
      "Navigate Florida's railing building codes with confidence. Learn about hurricane-rated requirements, height standards, glass specifications, and the permit process.",
    category: "Codes",
    readTime: "6 min read",
    gradient: "from-orange-900/40 to-red-900/40",
  },
  {
    slug: "massachusetts-railing-regulations",
    title: "Massachusetts Railing & Building Code Requirements",
    excerpt:
      "A comprehensive guide to Massachusetts building codes for railings. Understand MA-specific requirements, IBC standards, the permit process, and inspection procedures.",
    category: "Codes",
    readTime: "6 min read",
    gradient: "from-slate-900/40 to-zinc-900/40",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0a0a0a] overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0a0a0a]/95 to-[#00d4ff]/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00d4ff] font-display font-semibold text-sm uppercase tracking-widest">
            Insights & Guides
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Alpha Railings <span className="text-[#00d4ff]">Blog</span>
          </h1>
          <p className="mt-6 text-lg text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Expert guides, design inspiration, and industry insights to help you
            make the best decisions for your railing project.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-[#151515] rounded-2xl border border-[#222222] overflow-hidden hover:border-[#00d4ff]/20 transition-all"
              >
                <div
                  className={`aspect-[16/9] bg-gradient-to-br ${article.gradient} flex items-center justify-center`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto">
                      <svg
                        className="w-6 h-6 text-white/60"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6V7.5Z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-[#00d4ff]/10 text-[#00d4ff] text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-[#888888] text-xs">
                      {article.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-[#f5f5f5] mb-2 group-hover:text-[#00d4ff] transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-[#888888] text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 mt-4 text-[#00d4ff] font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Read Article
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-[#111111]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-[#00d4ff] font-display font-semibold text-sm uppercase tracking-widest">
            Ready to Start?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-[#f5f5f5] tracking-tight">
            Turn Inspiration Into Reality
          </h2>
          <p className="mt-4 text-[#888888] text-lg max-w-2xl mx-auto">
            Inspired by what you have read? Get a free quote and let us help you
            choose the perfect railing solution for your space.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-[#00d4ff] hover:bg-[#00d4ff]/90 text-[#0a0a0a] px-8 py-4 rounded-lg font-display font-bold text-base transition-all hover:shadow-lg hover:shadow-[#00d4ff]/25"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:+17543182099"
              className="border border-[#222222] hover:border-[#00d4ff]/30 text-[#f5f5f5] px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors hover:text-[#00d4ff]"
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

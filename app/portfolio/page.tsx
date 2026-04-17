"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

type Category =
  | "All"
  | "Glass Railings"
  | "Cable Railings"
  | "Iron Railings"
  | "Staircases"
  | "Commercial"
  | "Glass Partitions";

const filters: Category[] = [
  "All",
  "Glass Railings",
  "Cable Railings",
  "Iron Railings",
  "Staircases",
  "Commercial",
  "Glass Partitions",
];

interface Project {
  src: string;
  alt: string;
  category: Category;
  tall?: boolean;
}

const projects: Project[] = [
  // Glass Railings (Residential)
  {
    src: "/photos/glass-railing-staircase.jpg",
    alt: "Floating wood stairs with frameless glass panels",
    category: "Glass Railings",
    tall: true,
  },
  {
    src: "/photos/glass-railing-staircase-2.jpg",
    alt: "Floating wood staircase with glass railing, wider angle",
    category: "Glass Railings",
  },
  {
    src: "/photos/modern-glass-staircase.jpg",
    alt: "Black floating stairs with full glass wall",
    category: "Glass Railings",
    tall: true,
  },
  {
    src: "/photos/marble-floating-stairs.jpg",
    alt: "Marble floating stairs with glass railing panels",
    category: "Glass Railings",
  },

  // Cable Railings
  {
    src: "/photos/cable-railing-interior.jpg",
    alt: "Interior cable railing with natural wood cap",
    category: "Cable Railings",
  },
  {
    src: "/photos/exterior-cable-railing.jpg",
    alt: "Exterior cable railing system on residential home",
    category: "Cable Railings",
  },
  {
    src: "/photos/cable-railing-wood-cap.jpg",
    alt: "Cable railing with wood cap and black steel posts",
    category: "Cable Railings",
    tall: true,
  },
  {
    src: "/photos/floating-cable-staircase.jpg",
    alt: "Floating staircase with cable railing and shiplap wall",
    category: "Cable Railings",
    tall: true,
  },
  {
    src: "/photos/cable-railing-above.jpg",
    alt: "Cable railing system viewed from above",
    category: "Cable Railings",
  },
  {
    src: "/photos/railing-project-3.jpg",
    alt: "Cable railing on upper level landing",
    category: "Cable Railings",
  },
  {
    src: "/photos/railing-project-7.jpg",
    alt: "Floating cable staircase in open kitchen",
    category: "Cable Railings",
    tall: true,
  },
  {
    src: "/photos/railing-project-9.jpg",
    alt: "Cable railing loft in modern home",
    category: "Cable Railings",
  },

  // Iron/Metal Railings
  {
    src: "/photos/horizontal-iron-railing-loft.jpg",
    alt: "Modern horizontal iron bars with chandelier in open concept space",
    category: "Iron Railings",
    tall: true,
  },
  {
    src: "/photos/iron-staircase-chandelier.jpg",
    alt: "Horizontal iron staircase in two-story foyer with chandelier",
    category: "Iron Railings",
  },
  {
    src: "/photos/iron-railing-staircase.jpg",
    alt: "Horizontal iron railing going up staircase",
    category: "Iron Railings",
    tall: true,
  },
  {
    src: "/photos/iron-railing-open-loft.jpg",
    alt: "Horizontal iron railing on open loft",
    category: "Iron Railings",
  },
  {
    src: "/photos/iron-vertical-bar-staircase.jpg",
    alt: "Vertical bar iron railing on multi-story staircase",
    category: "Iron Railings",
    tall: true,
  },
  {
    src: "/photos/geometric-iron-railing.jpg",
    alt: "Geometric chevron pattern iron railing design",
    category: "Iron Railings",
  },
  {
    src: "/photos/iron-staircase-topdown.jpg",
    alt: "Iron staircase from above with industrial aesthetic",
    category: "Iron Railings",
  },
  {
    src: "/photos/railing-project-2.jpg",
    alt: "Vertical bar iron staircase with wall sconces",
    category: "Iron Railings",
  },
  {
    src: "/photos/railing-project-4.jpg",
    alt: "Horizontal bar iron L-shaped staircase in black steel",
    category: "Iron Railings",
    tall: true,
  },
  {
    src: "/photos/railing-project-5.jpg",
    alt: "Iron railing with wood slats under skylight",
    category: "Iron Railings",
  },
  {
    src: "/photos/railing-project-11.jpg",
    alt: "Curved iron staircase with traditional design",
    category: "Iron Railings",
  },
  {
    src: "/photos/railing-project-17.jpg",
    alt: "Floating wood treads with mono-stringer iron railing",
    category: "Iron Railings",
    tall: true,
  },

  // Staircases
  {
    src: "/photos/railing-project-1.jpg",
    alt: "Floating wood treads with steel stringer and shiplap wall",
    category: "Staircases",
    tall: true,
  },
  {
    src: "/photos/railing-project-10.jpg",
    alt: "Mono-stringer floating staircase with steel and wood",
    category: "Staircases",
    tall: true,
  },
  {
    src: "/photos/railing-project-12.jpg",
    alt: "Floating staircase with mono-stringer and cable railing",
    category: "Staircases",
  },

  // Commercial
  {
    src: "/photos/commercial-glass-staircase.jpg",
    alt: "Commercial staircase with structural glass railing",
    category: "Commercial",
    tall: true,
  },
  {
    src: "/photos/university-glass-railing-1.jpg",
    alt: "University of Houston glass railing installation",
    category: "Commercial",
  },
  {
    src: "/photos/university-glass-railing-2.jpg",
    alt: "University glass railing from different angle",
    category: "Commercial",
  },
  {
    src: "/photos/ucf-glass-railing-1.jpg",
    alt: "UCF campus glass post railing system",
    category: "Commercial",
  },
  {
    src: "/photos/ucf-glass-railing-2.jpg",
    alt: "UCF glass railing detail view",
    category: "Commercial",
  },
  {
    src: "/photos/bank-glass-railing.jpg",
    alt: "Bank of the Ozarks structural glass railing",
    category: "Commercial",
    tall: true,
  },
  {
    src: "/photos/bank-glass-railing-2.jpg",
    alt: "Bank glass railing wide view",
    category: "Commercial",
  },
  {
    src: "/photos/curved-glass-railing-office.jpg",
    alt: "Curved glass railing in luxury office with marble floors",
    category: "Commercial",
  },
  {
    src: "/photos/spiral-staircase-office.jpg",
    alt: "Spiral staircase in commercial office building",
    category: "Commercial",
    tall: true,
  },
  {
    src: "/photos/mall-glass-railings.jpg",
    alt: "Glass railings in retail space",
    category: "Commercial",
  },
  {
    src: "/photos/services-glass-railing.jpg",
    alt: "Commercial glass railing detail",
    category: "Commercial",
  },

  // Glass Partitions
  {
    src: "/photos/glass-partition-office.jpg",
    alt: "Office glass partition walls",
    category: "Glass Partitions",
  },
  {
    src: "/photos/bank-exterior-glass.jpg",
    alt: "Exterior glass conference room enclosure",
    category: "Glass Partitions",
    tall: true,
  },
  {
    src: "/photos/bank-interior-glass.jpg",
    alt: "Interior glass conference room partition",
    category: "Glass Partitions",
  },
  {
    src: "/photos/bank-interior-lounge.jpg",
    alt: "Bank lobby with glass partition walls",
    category: "Glass Partitions",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Our Work
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Project <span className="text-accent">Portfolio</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Browse our collection of custom glass, cable, and iron railing
            installations across residential and commercial projects.
          </p>
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              {projects.length}+ Projects
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Residential & Commercial
            </span>
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-14">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-all duration-300 ${
                  activeFilter === filter
                    ? "bg-accent text-primary shadow-lg shadow-accent/20"
                    : "bg-card/80 backdrop-blur-sm border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                {filter}
                {activeFilter === filter && (
                  <span className="ml-2 text-xs opacity-70">
                    ({filtered.length})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((project, index) => (
              <div
                key={project.src}
                className="group relative break-inside-avoid rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 bg-card"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className={`relative ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block bg-accent/20 backdrop-blur-md text-accent text-xs font-bold px-3 py-1 rounded-full border border-accent/30 mb-3">
                        {project.category}
                      </span>
                      <p className="text-white text-sm font-medium leading-snug">
                        {project.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Like What You See?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Let Us Build Something Amazing for You
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Every project in our portfolio started with a free consultation.
            Tell us about your vision and we will bring it to life.
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

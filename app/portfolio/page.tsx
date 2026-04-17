"use client";

import Link from "next/link";
import { useState } from "react";

const filters = ["All", "Glass", "Cable", "Iron", "Stairs", "Commercial"];

const projects = [
  { title: "Frameless Glass Balcony", type: "Glass", gradient: "from-cyan-900/40 to-blue-900/40" },
  { title: "Cable Railing Deck System", type: "Cable", gradient: "from-slate-800/40 to-zinc-900/40" },
  { title: "Ornamental Iron Staircase", type: "Iron", gradient: "from-amber-900/40 to-stone-900/40" },
  { title: "Commercial Glass Partition", type: "Commercial", gradient: "from-emerald-900/40 to-teal-900/40" },
  { title: "Floating Glass Staircase", type: "Stairs", gradient: "from-violet-900/40 to-indigo-900/40" },
  { title: "Rooftop Cable Railing", type: "Cable", gradient: "from-sky-900/40 to-slate-900/40" },
  { title: "Modern Iron Gate", type: "Iron", gradient: "from-rose-900/40 to-stone-900/40" },
  { title: "Frameless Shower Enclosure", type: "Glass", gradient: "from-blue-900/40 to-cyan-900/40" },
  { title: "Spiral Staircase with Glass", type: "Stairs", gradient: "from-purple-900/40 to-fuchsia-900/40" },
  { title: "Office Glass Railing System", type: "Commercial", gradient: "from-teal-900/40 to-emerald-900/40" },
  { title: "Pool Fence Glass Panels", type: "Glass", gradient: "from-cyan-900/40 to-sky-900/40" },
  { title: "Custom Iron Handrails", type: "Iron", gradient: "from-orange-900/40 to-amber-900/40" },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
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
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-16">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-lg font-display font-semibold text-sm transition-colors ${
                  activeFilter === filter
                    ? "bg-accent text-primary"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-accent/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-accent/20 transition-all"
              >
                <div
                  className={`aspect-[4/3] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative`}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6 text-white/60" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
                      </svg>
                    </div>
                    <p className="text-white/40 text-xs font-medium">Photo Coming Soon</p>
                  </div>
                  <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-accent text-xs font-bold px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    Custom {project.type.toLowerCase()} installation
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
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

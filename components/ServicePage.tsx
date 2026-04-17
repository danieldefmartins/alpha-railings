"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Feature {
  title: string;
  description: string;
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage?: string;
  gallery?: GalleryImage[];
  features: Feature[];
  process: ProcessStep[];
  faqs: FAQ[];
  ctaTitle?: string;
  ctaDescription?: string;
}

function FAQItem({ faq }: { faq: FAQ }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="font-display font-semibold text-foreground text-sm sm:text-base pr-4">
          {faq.question}
        </span>
        <svg
          className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-5">
          <p className="text-muted-foreground text-sm leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function ServicePage({
  badge,
  title,
  subtitle,
  description,
  heroImage,
  gallery,
  features,
  process,
  faqs,
  ctaTitle = "Ready to Get Started?",
  ctaDescription = "Get a free, no-obligation quote for your project. Custom designs, premium materials, and professional installation — backed by years of experience.",
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          {heroImage ? (
            <>
              <Image
                src={heroImage}
                alt={title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-primary/70" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
          )}
          <div
            className="absolute top-0 right-0 w-1/2 h-full opacity-5"
            style={{
              backgroundImage: `repeating-linear-gradient(90deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px),
                repeating-linear-gradient(0deg, #00d4ff 0px, #00d4ff 1px, transparent 1px, transparent 60px)`,
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 mb-8">
              <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold uppercase tracking-widest">
                {badge}
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
              {title}
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
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
                className="border border-white/15 hover:border-accent/30 text-white px-8 py-4 rounded-lg font-display font-semibold text-base transition-colors text-center hover:text-accent"
              >
                Call (754) 318-2099
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Overview + Features Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                Overview
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Why Choose Our{" "}
                <span className="text-accent">{badge}</span>
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {description}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-accent/20 transition-colors"
                >
                  <div className="h-1 w-8 bg-accent/30 rounded mb-4" />
                  <h3 className="font-display font-bold text-foreground text-sm mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="py-24 sm:py-32 bg-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                Our Work
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
                Recent Projects
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Browse our portfolio of completed {badge.toLowerCase()} installations.
              </p>
            </div>
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 ${
                gallery.length === 4
                  ? "lg:grid-cols-4"
                  : gallery.length >= 3
                    ? "lg:grid-cols-3"
                    : ""
              } gap-4`}
            >
              {gallery.map((image) => (
                <div
                  key={image.src}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border group"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process Steps */}
      <section className={`py-24 sm:py-32 ${gallery && gallery.length > 0 ? "" : "bg-secondary"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Our Process
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From initial consultation to final installation, here is what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {process.map((step) => (
              <div
                key={step.step}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent/10 text-accent font-display font-bold text-sm mb-3">
                  {step.step}
                </span>
                <h3 className="font-display font-bold text-foreground text-sm mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} faq={faq} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-3xl p-8 sm:p-12 border border-accent/20">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Start Your Project
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              {ctaTitle}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              {ctaDescription}
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
        </div>
      </section>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-20 lg:hidden" />
    </>
  );
}

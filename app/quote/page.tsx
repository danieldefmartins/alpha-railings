import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Free Quote | Alpha Railings",
  description:
    "Request a free, no-obligation quote for your railing project. Custom glass, cable, and iron railings with professional installation across MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Get a Free Quote | Alpha Railings",
    description:
      "Request a free quote for custom glass, cable & iron railings. Professional installation across 5 states.",
    url: "https://alpharailings.com/quote",
  },
};

const benefits = [
  {
    title: "100% Custom Design",
    description: "Every project is designed specifically for your space — no cookie-cutter solutions.",
  },
  {
    title: "Transparent Pricing",
    description: "Detailed, itemized quotes with no hidden fees or surprise charges.",
  },
  {
    title: "Fast Turnaround",
    description: "Most projects completed in 2-4 weeks from design approval to installation.",
  },
  {
    title: "Premium Materials",
    description: "We use only top-grade glass, stainless steel, and iron — built to last.",
  },
  {
    title: "Licensed & Insured",
    description: "Fully licensed and insured across all five states we serve.",
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We do not consider a project complete until you are 100% satisfied.",
  },
];

const trustBadges = [
  "Licensed & Insured",
  "5 States Served",
  "2,500+ Projects",
  "15+ Years Experience",
  "100% Custom Built",
  "Free Estimates",
];

export default function QuotePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Free Estimate
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Get a <span className="text-accent">Free Quote</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Tell us about your project and we will provide a detailed,
            no-obligation quote within 24 hours.
          </p>
        </div>
      </section>

      {/* Quote Form + Benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Form Placeholder */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
                Request Your Quote
              </h2>
              <div className="bg-card rounded-2xl border border-border border-dashed p-12 text-center min-h-[400px] flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                  </svg>
                </div>
                <p className="font-display text-lg font-bold text-foreground mb-2">
                  Quote Form Coming Soon
                </p>
                <p className="text-muted-foreground text-sm max-w-sm mx-auto mb-4">
                  Our online quote form is being integrated with our project
                  management system for a seamless experience.
                </p>
                <p className="text-xs text-muted-foreground italic">
                  GHL form will be embedded here
                </p>
                <div className="mt-6 pt-6 border-t border-border w-full">
                  <p className="text-foreground font-medium text-sm">
                    In the meantime, call or email us directly:
                  </p>
                  <div className="mt-3 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="tel:+17543182099"
                      className="text-accent font-semibold text-sm hover:underline"
                    >
                      (754) 318-2099
                    </a>
                    <span className="text-muted-foreground hidden sm:block">|</span>
                    <a
                      href="mailto:support@alpharailings.com"
                      className="text-accent font-semibold text-sm hover:underline"
                    >
                      support@alpharailings.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Benefits + Call */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-6">
                Why Request a Quote?
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display text-sm font-bold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-0.5">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prefer to Call */}
              <div className="mt-10 bg-card rounded-2xl border border-border p-8">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  Prefer to Call?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Speak directly with our team. We are available Monday through
                  Friday, 7:00 AM to 6:00 PM, and Saturday by appointment.
                </p>
                <a
                  href="tel:+17543182099"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-primary px-6 py-3 rounded-lg font-display font-bold text-sm transition-all hover:shadow-lg hover:shadow-accent/25"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                  </svg>
                  Call (754) 318-2099
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-secondary">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="bg-card rounded-xl border border-border p-4 text-center"
              >
                <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-2">
                  <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                  </svg>
                </div>
                <p className="text-foreground text-xs font-semibold">{badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 lg:hidden" />
    </>
  );
}

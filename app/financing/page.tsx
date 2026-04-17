import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Financing | Alpha Railings - Affordable Payment Options",
  description:
    "Alpha Railings offers flexible financing for your railing project. Low monthly payments, quick approval, no hidden fees. Premium glass, cable & iron railings made affordable.",
  openGraph: {
    title: "Financing | Alpha Railings",
    description:
      "Flexible financing for premium railings. Low monthly payments, quick approval, no hidden fees.",
    url: "https://alpharailings.com/financing",
  },
};

const benefits = [
  {
    title: "Low Monthly Payments",
    description:
      "Break your project cost into manageable monthly payments that fit your budget.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
      </svg>
    ),
  },
  {
    title: "Quick Approval",
    description:
      "Get approved fast so your project can start without unnecessary delays.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
      </svg>
    ),
  },
  {
    title: "No Hidden Fees",
    description:
      "Transparent terms with no surprises. What you see is what you pay.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: "Flexible Terms",
    description:
      "Choose the repayment plan that works best for your financial situation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Apply",
    description:
      "Fill out a simple application during your consultation or online. It takes just a few minutes.",
  },
  {
    step: "02",
    title: "Get Approved",
    description:
      "Receive a quick decision on your financing options with clear terms and rates.",
  },
  {
    step: "03",
    title: "Start Your Project",
    description:
      "Once approved, we begin your custom railing project right away — no waiting.",
  },
];

export default function FinancingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Flexible Financing
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Premium Railings,{" "}
            <span className="text-accent">Affordable Payments</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Do not let budget hold you back. We offer flexible financing options
            so you can get the railings you want today.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Why Finance?
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Financing Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-8 border border-border hover:border-accent/20 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mx-auto mb-5">
                  {benefit.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Simple Steps
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              How It Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <div key={item.step} className="relative">
                {index < howItWorks.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2 z-0" />
                )}
                <div className="bg-card rounded-2xl p-8 border border-border text-center relative z-10">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent/10 text-accent font-display font-bold text-xl mb-4">
                    {item.step}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Placeholder */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-2xl border border-border border-dashed p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">
              Financing Details Coming Soon
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              We are finalizing partnerships with financing providers to bring
              you the best rates and terms. In the meantime, ask about financing
              during your free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Get Started
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Request a free quote and ask about our financing options. Premium
            railings are more affordable than you think.
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

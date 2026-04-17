import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Process | Alpha Railings - From Consultation to Installation",
  description:
    "Learn how Alpha Railings delivers premium railing projects in 6 steps: consultation, site visit, design & engineering, fabrication, installation, and final inspection.",
  openGraph: {
    title: "Our Process | Alpha Railings",
    description:
      "From consultation to final inspection — our proven 6-step process ensures premium results on every project.",
    url: "https://alpharailings.com/our-process",
  },
};

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We start with a detailed conversation about your project. Share your vision, budget, and timeline, and we will recommend the best materials and design approach for your space.",
  },
  {
    number: "02",
    title: "Site Visit",
    description:
      "Our team visits your property to take precise measurements, assess structural requirements, and evaluate site conditions. This ensures a perfect fit and code-compliant installation.",
  },
  {
    number: "03",
    title: "Design & Engineering",
    description:
      "We create detailed designs and engineering drawings tailored to your specifications. You will review and approve everything before we move forward — no surprises.",
  },
  {
    number: "04",
    title: "Fabrication",
    description:
      "Every component is custom-fabricated in our shop to exact specifications. We use premium-grade materials and quality-control every piece before it leaves the facility.",
  },
  {
    number: "05",
    title: "Installation",
    description:
      "Our certified installation crew handles every aspect of the install with precision and care. We protect your property, work efficiently, and leave your site clean.",
  },
  {
    number: "06",
    title: "Final Inspection",
    description:
      "We conduct a thorough walkthrough with you to ensure every detail meets our standards and your expectations. We do not consider a project complete until you are 100% satisfied.",
  },
];

const faqs = [
  {
    question: "How long does a typical railing project take?",
    answer:
      "Most residential projects take 2-4 weeks from initial consultation to completed installation. This includes design, fabrication, and installation. Larger commercial projects may take 4-8 weeks depending on scope and complexity.",
  },
  {
    question: "Do you handle permits and inspections?",
    answer:
      "Yes, we handle all necessary permits and coordinate inspections as required by local building codes. Our team is familiar with regulations across all five states we serve.",
  },
  {
    question: "What if I need changes during the project?",
    answer:
      "We are flexible and understand that design preferences can evolve. Changes during the design phase are easy to accommodate. Changes after fabrication has begun may incur additional costs, which we will communicate transparently before proceeding.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, all our installations come with a comprehensive warranty covering both materials and workmanship. Specific warranty terms vary by material type and project scope — we will provide full details during your consultation.",
  },
  {
    question: "Can you match existing railings or architectural styles?",
    answer:
      "Absolutely. We specialize in custom work and can match existing styles, replicate specific designs, or create something entirely new. Bring us photos or sketches and we will work with you to achieve the perfect look.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            How We Work
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Our <span className="text-accent">Process</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From first conversation to final walkthrough, our proven 6-step
            process ensures premium results on every project.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative flex gap-6 sm:gap-8">
                {/* Timeline line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 bottom-0 w-px bg-border sm:left-8" />
                )}
                {/* Number */}
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="font-display text-lg sm:text-xl font-bold text-accent">
                    {step.number}
                  </span>
                </div>
                {/* Content */}
                <div className="bg-card rounded-2xl border border-border p-6 sm:p-8 flex-1 hover:border-accent/20 transition-colors">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
              Common Questions
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
              Process FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-2xl border border-border p-6 sm:p-8"
              >
                <h3 className="font-display text-base font-bold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Ready to Begin?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            Start With a Free Consultation
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Step one is easy. Tell us about your project and we will guide you
            through every step from design to installation.
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

import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Alpha Railings - Frequently Asked Questions",
  description:
    "Find answers to common questions about Alpha Railings services, materials, process, and pricing. Glass, cable & iron railings across MA, NH, ME, RI & FL.",
  openGraph: {
    title: "FAQ | Alpha Railings",
    description:
      "Answers to common questions about our railing services, materials, installation process, and pricing.",
    url: "https://alpharailings.com/faq",
  },
};

const faqCategories = [
  {
    category: "General",
    faqs: [
      {
        question: "What areas does Alpha Railings serve?",
        answer:
          "We serve residential and commercial clients across five states: Massachusetts, New Hampshire, Maine, Rhode Island, and Florida. We cover major cities and surrounding communities in each state.",
      },
      {
        question: "Are you licensed and insured?",
        answer:
          "Yes, Alpha Railings is fully licensed and insured in all five states we operate in. We carry comprehensive general liability insurance and workers' compensation coverage for your protection.",
      },
      {
        question: "Do you work on both residential and commercial projects?",
        answer:
          "Absolutely. We handle everything from single-family home railings and shower doors to large commercial installations including office buildings, restaurants, and multi-family developments. All our commercial work is ADA-compliant.",
      },
    ],
  },
  {
    category: "Materials",
    faqs: [
      {
        question: "What types of glass do you use for railings?",
        answer:
          "We use tempered safety glass for all our railing installations. Depending on the application, we offer clear, frosted, tinted, and low-iron (ultra-clear) glass options. All glass meets or exceeds building code requirements for safety.",
      },
      {
        question: "How durable are cable railing systems?",
        answer:
          "Our cable railing systems use marine-grade 316 stainless steel, which is extremely resistant to corrosion and weathering. With proper installation, cable railings can last 20+ years with minimal maintenance — just occasional cleaning.",
      },
      {
        question: "What is the difference between wrought iron and steel railings?",
        answer:
          "Wrought iron is a traditional material known for its ornamental detail and classic look. Steel is stronger, more versatile, and can be fabricated into both modern and traditional designs. Both receive protective powder coating for durability. We work with both materials depending on the design goals.",
      },
    ],
  },
  {
    category: "Process",
    faqs: [
      {
        question: "How long does a typical railing project take?",
        answer:
          "Most residential projects take 2-4 weeks from consultation to completed installation. This includes design, fabrication, and installation. Larger commercial projects may take 4-8 weeks depending on scope and complexity.",
      },
      {
        question: "Do you handle permits and inspections?",
        answer:
          "Yes, we handle all necessary permits and coordinate inspections as required by local building codes. Our team is experienced with regulations across all five states we serve, ensuring full compliance.",
      },
      {
        question: "What happens during the site visit?",
        answer:
          "During the site visit, our team takes precise measurements, assesses structural conditions, discusses design options in person, and identifies any potential challenges. This visit is essential for ensuring a perfect fit and accurate quote.",
      },
    ],
  },
  {
    category: "Pricing",
    faqs: [
      {
        question: "How much do custom railings cost?",
        answer:
          "Pricing varies based on material, design complexity, and linear footage. Glass railings typically range from $150-$400+ per linear foot, cable railings from $100-$250+ per linear foot, and iron railings from $80-$300+ per linear foot. We provide detailed, itemized quotes for every project.",
      },
      {
        question: "Do you offer financing?",
        answer:
          "Yes, we offer flexible financing options to help make your project more affordable. Low monthly payments, quick approval, and no hidden fees. Visit our financing page or ask about options during your consultation.",
      },
      {
        question: "Is the quote really free?",
        answer:
          "Yes, our quotes are completely free with no obligation. We will visit your site, take measurements, discuss your options, and provide a detailed written estimate — all at no cost to you.",
      },
    ],
  },
];

const allFaqs = faqCategories.flatMap((cat) => cat.faqs);

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: allFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent/10" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Questions & Answers
          </span>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Frequently Asked <span className="text-accent">Questions</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions about our services, materials,
            process, and pricing.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.category}>
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
                    {category.category}
                  </span>
                  <div className="h-px flex-1 bg-border" />
                </div>
                <div className="space-y-4">
                  {category.faqs.map((faq) => (
                    <div
                      key={faq.question}
                      className="bg-card rounded-2xl border border-border p-6 sm:p-8 hover:border-accent/20 transition-colors"
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
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-display font-semibold text-sm uppercase tracking-widest">
            Still Have Questions?
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-bold text-foreground tracking-tight">
            We Are Here to Help
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Can not find what you are looking for? Contact us directly and our
            team will be happy to answer any questions about your project.
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

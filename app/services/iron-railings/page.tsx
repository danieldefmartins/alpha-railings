import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Iron Railings & Handrails | Alpha Railings",
  description:
    "Custom wrought iron railings and handrails. Ornamental and modern minimalist designs with durable powder coat finishes. Serving MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Iron Railings & Handrails | Alpha Railings",
    description:
      "Custom wrought iron railings and handrails. Ornamental and modern minimalist designs with durable powder coat finishes.",
    url: "https://alpharailings.com/services/iron-railings",
  },
};

export default function IronRailingsPage() {
  return (
    <ServicePage
      badge="Iron Railings"
      title="Custom Iron Railings & Handrails"
      subtitle="Hand-forged wrought iron and steel railings in ornamental, transitional, and modern minimalist styles. Built for strength, finished for beauty."
      heroImage="/photos/iron-staircase-chandelier.jpg"
      gallery={[
        { src: "/photos/horizontal-iron-railing-loft.jpg", alt: "Horizontal iron railing in loft space" },
        { src: "/photos/geometric-iron-railing.jpg", alt: "Geometric pattern iron railing" },
        { src: "/photos/iron-vertical-bar-staircase.jpg", alt: "Iron vertical bar staircase railing" },
      ]}
      description="From classic scrollwork to clean contemporary lines, our custom iron railings and handrails are designed and fabricated to your exact specifications. Every piece is hand-welded by our skilled metalworkers, then finished with a multi-step powder coating process for lasting durability and color. Whether it is a grand staircase railing, a balcony guardrail, or a simple exterior handrail, we deliver craftsmanship that stands the test of time."
      features={[
        {
          title: "Custom Designs",
          description:
            "Every railing is designed to your specifications — from ornamental scrollwork and rosettes to sleek horizontal bars and geometric patterns.",
        },
        {
          title: "Powder Coat Finish",
          description:
            "Our multi-step powder coating process provides a durable, chip-resistant finish in any color. Far superior to traditional paint for longevity.",
        },
        {
          title: "Structural Strength",
          description:
            "Wrought iron and steel provide the highest strength-to-weight ratio, making them ideal for load-bearing railings and high-traffic areas.",
        },
        {
          title: "Code Compliant",
          description:
            "All iron railings are engineered and installed to meet IBC/IRC building codes, including graspability requirements for handrails.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Design Consultation",
          description:
            "We discuss your style preferences, take measurements, and create sketches or 3D renderings of your custom railing design.",
        },
        {
          step: "02",
          title: "Approval & Color Selection",
          description:
            "Review final drawings and choose your powder coat color. We offer hundreds of colors and textures including matte, satin, and gloss.",
        },
        {
          step: "03",
          title: "Fabrication & Finishing",
          description:
            "Each piece is hand-cut, welded, ground smooth, and powder coated in our shop for a factory-quality finish.",
        },
        {
          step: "04",
          title: "Installation",
          description:
            "Our crew installs your railings with concealed mounting hardware for a clean, professional look that lasts.",
        },
      ]}
      faqs={[
        {
          question: "Will iron railings rust?",
          answer:
            "Our iron railings are finished with a multi-step process: cleaning, priming, and powder coating. This creates a sealed barrier that prevents rust. With proper maintenance — occasional cleaning and touch-ups to any chips — powder-coated iron railings can last decades without rust.",
        },
        {
          question: "What maintenance do iron railings require?",
          answer:
            "Very little. Wipe down with a damp cloth periodically and inspect for any chips in the powder coat finish. If you notice a chip, touch it up with matching paint to prevent moisture from reaching the bare metal. We provide touch-up paint with every installation.",
        },
        {
          question: "What design options are available?",
          answer:
            "The options are virtually unlimited. We create everything from traditional ornamental designs with scrolls, twists, and baskets to modern minimalist styles with clean horizontal bars, vertical pickets, and geometric patterns. We can also replicate historic designs or create something entirely custom.",
        },
        {
          question: "How long does a custom iron railing project take?",
          answer:
            "Typical timeline is 3-5 weeks from design approval to installation. This includes fabrication and powder coating. More complex or large-scale projects may take longer. We provide a detailed timeline during your consultation.",
        },
        {
          question: "Can iron railings be used outdoors?",
          answer:
            "Absolutely. Our powder-coated iron railings are designed for exterior use. The finish is UV-resistant, chip-resistant, and stands up to rain, snow, and salt air. We use hot-dip galvanizing for coastal or high-exposure installations for extra protection.",
        },
      ]}
      ctaTitle="Ready for Custom Iron Railings?"
      ctaDescription="Get a free quote for hand-forged iron railings and handrails. Ornamental or modern, interior or exterior — built to your exact design."
    />
  );
}

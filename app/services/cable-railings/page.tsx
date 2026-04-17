import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Cable Railings | Alpha Railings",
  description:
    "Marine-grade 316 stainless steel cable railing systems. Horizontal and vertical cable options for decks, balconies, stairs, and commercial spaces in MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Cable Railings | Alpha Railings",
    description:
      "Marine-grade 316 stainless steel cable railing systems for decks, balconies, stairs, and commercial spaces.",
    url: "https://alpharailings.com/services/cable-railings",
  },
};

export default function CableRailingsPage() {
  return (
    <ServicePage
      badge="Cable Railings"
      title="Stainless Steel Cable Railing Systems"
      subtitle="Marine-grade 316 stainless steel cable railings for decks, balconies, staircases, and commercial properties. Minimal design with maximum durability and unobstructed views."
      description="Our cable railing systems combine a sleek, modern look with exceptional strength and corrosion resistance. We use 316 marine-grade stainless steel cable and fittings — the same grade used in marine and coastal applications — ensuring your railings stand up to salt air, rain, and UV exposure for decades. Available in horizontal or vertical cable configurations with wood, metal, or composite posts."
      features={[
        {
          title: "Marine-Grade Stainless",
          description:
            "All cables and fittings are 316-grade stainless steel, providing superior corrosion resistance — ideal for coastal, poolside, and exposed environments.",
        },
        {
          title: "Low Maintenance",
          description:
            "No painting, staining, or sealing required. Occasional cleaning with soap and water keeps your cable railings looking new for years.",
        },
        {
          title: "Unobstructed Views",
          description:
            "Thin cable profiles preserve sightlines to landscapes, water views, and open spaces — perfect for decks, balconies, and elevated areas.",
        },
        {
          title: "ADA Compliant",
          description:
            "Our cable railing systems meet ADA accessibility requirements and comply with IBC/IRC building codes for residential and commercial applications.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Consultation & Measurement",
          description:
            "We assess your space, discuss cable orientation (horizontal or vertical), post materials, and take precise measurements.",
        },
        {
          step: "02",
          title: "System Design",
          description:
            "We design your cable railing system with detailed specifications for posts, cables, tensioners, and top rails.",
        },
        {
          step: "03",
          title: "Fabrication & Prep",
          description:
            "Posts are custom-fabricated and cables are cut to length. All components are prepared for a seamless on-site installation.",
        },
        {
          step: "04",
          title: "Install & Tension",
          description:
            "Our crew installs posts, threads cables, and tensions each line to the proper specification for safety and aesthetics.",
        },
      ]}
      faqs={[
        {
          question: "What is the required spacing between cables?",
          answer:
            "Building codes typically require that the space between cables does not allow a 4-inch sphere to pass through. This usually means cables are spaced approximately 3 inches apart. We ensure every installation meets local code requirements.",
        },
        {
          question: "How often do cable railings need maintenance?",
          answer:
            "Very little maintenance is needed. We recommend cleaning with mild soap and water a few times a year. In coastal areas, more frequent rinsing helps prevent salt buildup. Cable tension should be checked annually — we can handle this for you as part of our service.",
        },
        {
          question: "Can cable railings be used indoors?",
          answer:
            "Absolutely. Cable railings are a popular choice for interior staircases, loft edges, and mezzanines. The thin cable profile creates a modern, open feel that makes spaces look larger and more connected.",
        },
        {
          question: "Do cables sag over time?",
          answer:
            "High-quality 316 stainless steel cables maintain tension extremely well. Some minor settling can occur in the first few months after installation, but our tensioning hardware allows for easy adjustment. We offer a follow-up tensioning service at no extra charge.",
        },
        {
          question: "What post materials are available?",
          answer:
            "We offer posts in stainless steel, aluminum, powder-coated steel, and wood. You can also mix materials — for example, wood posts with stainless cable — to match your design vision.",
        },
      ]}
      ctaTitle="Ready for Sleek Cable Railings?"
      ctaDescription="Get a free quote for marine-grade stainless steel cable railings. Durable, low-maintenance, and designed to preserve your views."
    />
  );
}

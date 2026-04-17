import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Commercial Railings | Alpha Railings",
  description:
    "ADA-compliant commercial railing systems for offices, multi-family buildings, retail, and parking structures. Multiple materials, engineered for high traffic. Serving MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Commercial Railings | Alpha Railings",
    description:
      "ADA-compliant commercial railing systems for offices, multi-family buildings, retail, and parking structures.",
    url: "https://alpharailings.com/services/commercial-railings",
  },
};

export default function CommercialRailingsPage() {
  return (
    <ServicePage
      badge="Commercial Railings"
      title="Commercial Railing Systems"
      subtitle="ADA-compliant railing systems for multi-family buildings, offices, retail spaces, parking structures, and public facilities. Engineered for durability, designed for code compliance."
      description="Commercial projects demand railings that meet strict building codes, ADA accessibility requirements, and withstand heavy daily use. We design, engineer, and install commercial railing systems using stainless steel, aluminum, glass, and cable — tailored to your project specifications. From luxury condominiums to parking garages, we deliver on time and on budget with full documentation, shop drawings, and engineering stamps."
      features={[
        {
          title: "ADA Compliant",
          description:
            "All commercial railings meet ADA requirements for graspability, height, extensions, and clearances. We ensure full compliance with federal and state accessibility standards.",
        },
        {
          title: "High-Traffic Durability",
          description:
            "Commercial-grade materials and finishes built for heavy daily use. Anti-vandal hardware, impact-resistant panels, and corrosion-proof coatings come standard.",
        },
        {
          title: "Multiple Materials",
          description:
            "Choose from stainless steel, aluminum, glass, cable, iron, or combinations. We match materials to your design intent, budget, and performance requirements.",
        },
        {
          title: "Engineered Systems",
          description:
            "Every commercial railing includes structural engineering, shop drawings, and load calculations. We provide PE-stamped documentation for permitting.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Scope Review",
          description:
            "We review architectural drawings, visit the site, and coordinate with your project team to define railing specifications and schedule.",
        },
        {
          step: "02",
          title: "Shop Drawings & Engineering",
          description:
            "We produce detailed shop drawings and structural calculations, then submit for architect and engineer approval before fabrication.",
        },
        {
          step: "03",
          title: "Fabrication",
          description:
            "Railing components are fabricated in our shop to exact specifications, powder coated or polished, and staged for delivery.",
        },
        {
          step: "04",
          title: "Phased Installation",
          description:
            "We coordinate installation with your construction schedule, working floor-by-floor or zone-by-zone to keep your project on track.",
        },
      ]}
      faqs={[
        {
          question: "What are the ADA requirements for commercial railings?",
          answer:
            "ADA requires handrails on both sides of stairs and ramps, with a graspable profile (1.25 to 2 inches in diameter), mounted 34-38 inches above the stair nosing. Handrails must extend 12 inches beyond the top riser and one tread depth beyond the bottom riser. Guardrails must be at least 42 inches high. We ensure every installation meets these and all local code requirements.",
        },
        {
          question: "What is the typical timeline for a large commercial railing project?",
          answer:
            "Timelines depend on project scale. A typical multi-floor commercial project takes 8-16 weeks from shop drawing approval to completed installation. We work in phases to align with your construction schedule and can fast-track fabrication when needed. We provide detailed schedules during the bidding process.",
        },
        {
          question: "What materials are best for commercial railings?",
          answer:
            "It depends on the application. Stainless steel offers the best corrosion resistance and is ideal for exterior and high-moisture areas. Aluminum is lightweight and cost-effective for interior applications. Glass panels create an upscale aesthetic for lobbies and atriums. Cable infill provides unobstructed views for elevated walkways. We help you select the right material for each area of your project.",
        },
        {
          question: "Do you provide engineering stamps and shop drawings?",
          answer:
            "Yes. We provide PE-stamped structural calculations and detailed shop drawings for every commercial project. These documents are submitted for architect and engineer review and are required for building permit applications.",
        },
        {
          question: "Can you match existing railings in a renovation project?",
          answer:
            "Yes. We frequently match existing railing styles, materials, and finishes for renovation and expansion projects. We take samples and measurements from existing railings to ensure new sections blend seamlessly with the original installation.",
        },
      ]}
      ctaTitle="Need Commercial Railing Solutions?"
      ctaDescription="Get a free quote for ADA-compliant commercial railing systems. Engineered, code-compliant, and built for high-traffic durability."
    />
  );
}

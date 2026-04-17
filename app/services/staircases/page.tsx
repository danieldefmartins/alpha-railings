import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Staircases & Spiral Stairs | Alpha Railings",
  description:
    "Custom straight, floating, and spiral staircases in steel, glass, and wood combinations. Structural engineering and professional installation in MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Staircases & Spiral Stairs | Alpha Railings",
    description:
      "Custom straight, floating, and spiral staircases in steel, glass, and wood combinations.",
    url: "https://alpharailings.com/services/staircases",
  },
};

export default function StaircasesPage() {
  return (
    <ServicePage
      badge="Staircases"
      title="Custom Staircases & Spiral Stairs"
      subtitle="Straight, floating, and spiral staircases crafted from steel, glass, and wood. Engineered for structural integrity and designed to be the centerpiece of your space."
      description="A staircase is more than a way to move between floors — it is a statement. We design and fabricate custom staircases that combine structural engineering with stunning aesthetics. From dramatic floating stairs with hidden steel stringers to compact spiral staircases in powder-coated steel, every project is built from scratch to fit your space, your style, and your building codes."
      features={[
        {
          title: "Structural Engineering",
          description:
            "Every staircase is engineered for load-bearing requirements. We work with structural engineers to ensure your stairs are safe and code-compliant.",
        },
        {
          title: "Mixed Materials",
          description:
            "Combine steel stringers with wood treads, glass railings, and cable infill. We work with any combination of materials to achieve your vision.",
        },
        {
          title: "Custom Dimensions",
          description:
            "No standard sizes — every staircase is built to your exact floor-to-floor height, width, and tread dimensions for a perfect fit.",
        },
        {
          title: "Indoor & Outdoor",
          description:
            "From grand interior feature staircases to exterior deck stairs and fire escapes, we build for any environment with appropriate materials and finishes.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Site Survey & Design",
          description:
            "We measure your space, discuss design goals, and create detailed 3D renderings showing your staircase from every angle.",
        },
        {
          step: "02",
          title: "Engineering & Permits",
          description:
            "Our team handles structural calculations and building permit documentation. We coordinate with local authorities as needed.",
        },
        {
          step: "03",
          title: "Fabrication",
          description:
            "Steel stringers, brackets, and components are fabricated in our shop. Wood treads and glass panels are sourced and prepared.",
        },
        {
          step: "04",
          title: "Installation",
          description:
            "Our crew installs the staircase on-site, including all structural connections, treads, risers, and railing systems.",
        },
      ]}
      faqs={[
        {
          question: "What is the difference between spiral and straight staircases?",
          answer:
            "Straight staircases follow a linear path and require more floor space but are easier to navigate and move furniture on. Spiral staircases rotate around a central column, taking up significantly less floor space — typically a 5-foot diameter circle. Both can be designed with various materials and styles.",
        },
        {
          question: "What is the load capacity of a custom staircase?",
          answer:
            "Our staircases are engineered to meet or exceed building code requirements, which typically call for a minimum live load capacity of 300 pounds per step and 100 pounds per square foot. We work with structural engineers to ensure every staircase is safe for its intended use.",
        },
        {
          question: "How long does a staircase project take?",
          answer:
            "A typical custom staircase takes 6-10 weeks from design approval to completed installation. This includes engineering, fabrication, finishing, and on-site installation. Spiral staircases are usually on the shorter end, while complex floating stair designs may take longer.",
        },
        {
          question: "Can you add railings to an existing staircase?",
          answer:
            "Yes. We frequently add or replace railings on existing staircases. Whether you want to update old wooden balusters with modern cable, glass, or iron railings, we can retrofit your existing stairs with a new railing system.",
        },
        {
          question: "Do floating stairs require a wall for support?",
          answer:
            "Not always. While many floating stair designs use a wall-mounted steel stringer for support, we also build freestanding floating staircases with a central spine or hidden structural framework. The best approach depends on your space and structural conditions.",
        },
      ]}
      ctaTitle="Ready for a Custom Staircase?"
      ctaDescription="Get a free quote for a custom staircase — straight, floating, or spiral. Engineered for safety, designed to impress."
    />
  );
}

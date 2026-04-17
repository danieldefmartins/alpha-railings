import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Shower Doors | Alpha Railings",
  description:
    "Custom frameless glass shower doors and enclosures. Sliding, hinged, and custom shapes with premium hardware. Professional measurement and installation in MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Shower Doors | Alpha Railings",
    description:
      "Custom frameless glass shower doors and enclosures. Sliding, hinged, and custom shapes with premium hardware.",
    url: "https://alpharailings.com/services/shower-doors",
  },
};

export default function ShowerDoorsPage() {
  return (
    <ServicePage
      badge="Shower Doors"
      title="Frameless Glass Shower Doors"
      subtitle="Custom frameless glass shower enclosures, sliding doors, hinged doors, and specialty shapes. Precision-measured, beautifully installed, and built to last."
      heroImage="/photos/shower-door.jpg"
      description="Transform your bathroom with a custom frameless glass shower enclosure. We design and install shower doors that eliminate bulky frames, making your bathroom feel larger and more luxurious. Every enclosure is precision-measured for your exact shower opening and built with thick tempered glass and premium hardware in finishes like chrome, brushed nickel, matte black, and gold."
      features={[
        {
          title: "Tempered Glass",
          description:
            "All shower doors use 3/8-inch or 1/2-inch tempered safety glass that meets ANSI Z97.1 standards for safety glazing in bathrooms.",
        },
        {
          title: "Custom Sizes",
          description:
            "No standard sizes — every shower door is custom-measured and fabricated to fit your exact opening, including non-standard and angled configurations.",
        },
        {
          title: "Hardware Options",
          description:
            "Choose from chrome, brushed nickel, matte black, gold, and oil-rubbed bronze hardware. Hinges, handles, and clips in matching finishes.",
        },
        {
          title: "Waterproof Seals",
          description:
            "Precision-fitted sweeps, seals, and drip rails keep water inside the enclosure. No leaks, no puddles — just a clean, dry bathroom floor.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "In-Home Measurement",
          description:
            "We measure your shower opening precisely, check for level and plumb, and discuss glass type, hardware finish, and door configuration.",
        },
        {
          step: "02",
          title: "Design Confirmation",
          description:
            "We provide a detailed quote with a diagram showing your enclosure layout, glass thickness, hardware placement, and finish selections.",
        },
        {
          step: "03",
          title: "Glass Fabrication",
          description:
            "Your glass panels are cut, tempered, and polished to exact dimensions. Holes for hinges and handles are precision-drilled before tempering.",
        },
        {
          step: "04",
          title: "Installation",
          description:
            "Our installers mount all hardware, set glass panels, align doors, and install seals. We leave your bathroom spotless.",
        },
      ]}
      faqs={[
        {
          question: "What glass thickness is best for shower doors?",
          answer:
            "We recommend 3/8-inch (10mm) tempered glass for most shower doors and 1/2-inch (12mm) for larger panels and frameless enclosures. Thicker glass provides a more substantial feel and greater stability, especially for heavy frameless doors.",
        },
        {
          question: "How do I keep glass shower doors clean?",
          answer:
            "Squeegee after each use to prevent water spots. For deeper cleaning, use a non-abrasive glass cleaner. We also offer optional protective glass coatings that repel water and reduce mineral buildup, making cleaning even easier.",
        },
        {
          question: "Can you make shower doors for non-standard openings?",
          answer:
            "Absolutely. We specialize in custom configurations including neo-angle showers, curved enclosures, steam showers with transom panels, and openings with sloped ceilings or benches. Every door is made to fit your exact space.",
        },
        {
          question: "How long does shower door installation take?",
          answer:
            "Most shower door installations are completed in 2-4 hours. The total project timeline from measurement to installation is typically 2-3 weeks, including fabrication time for your custom glass panels.",
        },
        {
          question: "Is frameless better than framed shower doors?",
          answer:
            "Frameless shower doors offer a cleaner, more modern look and are easier to clean since there are no frames to trap water and soap residue. They also make small bathrooms feel larger. Framed doors can be more budget-friendly but lack the premium aesthetic of frameless glass.",
        },
      ]}
      ctaTitle="Ready for a Stunning Shower Upgrade?"
      ctaDescription="Get a free quote for custom frameless glass shower doors. Precision-measured, beautifully finished, and professionally installed."
    />
  );
}

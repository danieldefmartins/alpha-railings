import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Gates & Fences | Alpha Railings",
  description:
    "Custom driveway gates, pedestrian gates, and fencing with automation options. Iron, steel, and aluminum in modern and ornamental styles. Serving MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Gates & Fences | Alpha Railings",
    description:
      "Custom driveway gates, pedestrian gates, and fencing with automation options in iron, steel, and aluminum.",
    url: "https://alpharailings.com/services/gates-fences",
  },
};

export default function GatesFencesPage() {
  return (
    <ServicePage
      badge="Gates & Fences"
      title="Custom Gates & Fences"
      subtitle="Driveway gates, pedestrian gates, and perimeter fencing in iron, steel, and aluminum. Manual or fully automated — designed for security and curb appeal."
      heroImage="/photos/exterior-gate.jpg"
      gallery={[
        { src: "/photos/railing-project-8.jpg", alt: "Custom gate installation" },
        { src: "/photos/railing-project-6.jpg", alt: "Iron fence and gate project" },
      ]}
      description="Our custom gates and fences combine security with striking design. Whether you need an automated driveway gate with keypad access, a decorative pedestrian gate, or a full perimeter fence, we design, fabricate, and install every component. All metalwork is powder coated for lasting durability, and we offer full automation packages including motors, keypads, intercoms, and smartphone integration."
      features={[
        {
          title: "Automation Ready",
          description:
            "We install gate automation systems with swing or slide motors, keypads, remote controls, intercoms, and smartphone app integration.",
        },
        {
          title: "Security Focused",
          description:
            "Heavy-gauge steel and iron construction with anti-climb designs, secure locking mechanisms, and optional camera integration.",
        },
        {
          title: "Custom Designs",
          description:
            "From ornamental scrollwork to modern horizontal slat designs — every gate and fence is custom-designed to match your property and style.",
        },
        {
          title: "Weather Resistant",
          description:
            "Multi-step powder coating and optional hot-dip galvanizing protect against rust, UV damage, and harsh weather conditions year-round.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Property Assessment",
          description:
            "We survey your property, discuss security needs, design preferences, and automation requirements. We measure openings and grade.",
        },
        {
          step: "02",
          title: "Design & Automation Plan",
          description:
            "We create detailed gate and fence designs and specify automation components, access control, and electrical requirements.",
        },
        {
          step: "03",
          title: "Fabrication",
          description:
            "Gates and fence panels are fabricated, welded, and powder coated in our shop. Posts and hardware are prepared for installation.",
        },
        {
          step: "04",
          title: "Install & Program",
          description:
            "We install gates, fencing, and posts, then mount and program automation systems, keypads, and access controls.",
        },
      ]}
      faqs={[
        {
          question: "What automation options are available for gates?",
          answer:
            "We offer swing gate motors, sliding gate motors, keypads, remote controls, intercom systems, and smartphone app integration. We can also integrate with existing security camera systems and smart home platforms. Solar-powered options are available for gates without nearby electrical access.",
        },
        {
          question: "What materials do you use for gates and fences?",
          answer:
            "We work primarily with wrought iron, mild steel, and aluminum. Iron and steel provide maximum strength and security, while aluminum offers a lighter, rust-free alternative. All metal is powder coated for durability. We can also combine metal with wood accents.",
        },
        {
          question: "How secure are your gates?",
          answer:
            "Our gates use heavy-gauge steel or iron, reinforced frames, and commercial-grade locking mechanisms. Automated gates add an additional layer of security with magnetic locks that engage when the gate is closed. We can design anti-climb features and integrate with security systems.",
        },
        {
          question: "Do you handle permits for fence and gate installations?",
          answer:
            "Yes. We handle or assist with all necessary permits for gate and fence installations. We are familiar with local zoning regulations regarding fence heights, setbacks, and gate requirements across all the states we serve.",
        },
        {
          question: "How long do gates and fences last?",
          answer:
            "With proper powder coating and occasional maintenance, our steel and iron gates and fences last 30 years or more. Aluminum is virtually maintenance-free and can last even longer. Automation components typically last 10-15 years before needing replacement.",
        },
      ]}
      ctaTitle="Ready for a Custom Gate or Fence?"
      ctaDescription="Get a free quote for custom gates, fencing, and automation systems. Security, style, and durability — all custom-built for your property."
    />
  );
}

import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Glass Railings | Alpha Railings",
  description:
    "Premium frameless and semi-frameless tempered glass railings for balconies, decks, stairs, and indoor spaces. Custom glass railing installation in MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Glass Railings | Alpha Railings",
    description:
      "Premium frameless and semi-frameless tempered glass railings for balconies, decks, stairs, and indoor spaces.",
    url: "https://alpharailings.com/services/glass-railings",
  },
};

export default function GlassRailingsPage() {
  return (
    <ServicePage
      badge="Glass Railings"
      title="Frameless & Semi-Frameless Glass Railings"
      subtitle="Sleek, modern tempered glass railing systems for balconies, decks, staircases, and interior spaces. Unobstructed views with maximum safety and style."
      heroImage="/photos/glass-railing-staircase.jpg"
      gallery={[
        { src: "/photos/glass-railing-staircase-2.jpg", alt: "Glass railing on modern staircase" },
        { src: "/photos/modern-glass-staircase.jpg", alt: "Modern glass staircase installation" },
        { src: "/photos/marble-floating-stairs.jpg", alt: "Marble floating stairs with glass railings" },
      ]}
      description="Our glass railing systems are engineered for beauty and durability. We use premium tempered and laminated glass panels with precision-machined hardware in stainless steel, brass, or matte black finishes. Whether you need frameless glass railings for a waterfront balcony or semi-frameless panels for an interior staircase, every installation is custom-measured, fabricated, and professionally installed by our in-house crew."
      features={[
        {
          title: "Tempered Safety Glass",
          description:
            "All panels use tempered or laminated safety glass that meets or exceeds building code requirements for strength and impact resistance.",
        },
        {
          title: "Custom Hardware",
          description:
            "Choose from stainless steel, matte black, brass, or brushed nickel hardware. Standoffs, clamps, channels, and top rails — all precision-machined.",
        },
        {
          title: "Indoor & Outdoor",
          description:
            "Engineered for any environment. Our glass railings perform beautifully on oceanfront balconies, pool decks, interior lofts, and staircases.",
        },
        {
          title: "Code Compliant",
          description:
            "Every installation meets local and national building codes including IBC and IRC requirements for guardrails and handrails.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Site Visit & Measurement",
          description:
            "We visit your property to assess the space, discuss design options, and take precise laser measurements.",
        },
        {
          step: "02",
          title: "Design & Material Selection",
          description:
            "Choose your glass type, hardware finish, and mounting style. We provide detailed drawings for your approval.",
        },
        {
          step: "03",
          title: "Custom Fabrication",
          description:
            "Each glass panel and hardware component is fabricated to your exact specifications in our facility.",
        },
        {
          step: "04",
          title: "Professional Installation",
          description:
            "Our certified installers mount every panel with precision, ensuring a flawless and secure finish.",
        },
      ]}
      faqs={[
        {
          question: "What thickness of glass do you use for railings?",
          answer:
            "We typically use 3/8-inch (10mm) or 1/2-inch (12mm) tempered glass for railing panels. The thickness depends on the span, height, and whether the system is frameless or semi-frameless. All glass meets safety glazing standards.",
        },
        {
          question: "Are glass railings safe for homes with children?",
          answer:
            "Absolutely. Our tempered glass panels are 4-5 times stronger than regular glass. If broken, they shatter into small, rounded pieces rather than sharp shards. We also offer laminated glass options that hold together even if cracked, providing an additional layer of safety.",
        },
        {
          question: "How do I maintain and clean glass railings?",
          answer:
            "Glass railings are very low maintenance. Simply clean them with glass cleaner and a soft cloth as needed. For outdoor installations, we recommend cleaning every few months to remove salt, dust, or water spots. There is no painting, staining, or sealing required.",
        },
        {
          question: "How much do glass railings cost?",
          answer:
            "Glass railing costs vary based on the type of system (frameless vs. semi-frameless), glass thickness, hardware finish, and linear footage. We provide free, detailed quotes after an on-site measurement so you get an accurate price for your specific project.",
        },
        {
          question: "Can glass railings be installed outdoors in cold climates?",
          answer:
            "Yes. Our glass railing systems are engineered for all climates, including the harsh winters in New England. Tempered glass handles extreme temperature changes without issue, and our stainless steel hardware resists corrosion from salt, rain, and snow.",
        },
      ]}
      ctaTitle="Ready for Stunning Glass Railings?"
      ctaDescription="Get a free quote for custom glass railings — frameless or semi-frameless, indoor or outdoor. Premium materials, expert installation, and unmatched craftsmanship."
    />
  );
}

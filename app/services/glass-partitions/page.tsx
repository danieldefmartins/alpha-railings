import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Glass Partitions | Alpha Railings",
  description:
    "Custom glass partitions for offices, homes, and commercial spaces. Frosted, clear, and switchable privacy options with sound dampening. Serving MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Glass Partitions | Alpha Railings",
    description:
      "Custom glass partitions for offices, homes, and commercial spaces. Frosted, clear, and switchable privacy options.",
    url: "https://alpharailings.com/services/glass-partitions",
  },
};

export default function GlassPartitionsPage() {
  return (
    <ServicePage
      badge="Glass Partitions"
      title="Custom Glass Partitions"
      subtitle="Office dividers, room partitions, and commercial glass walls. Create open, light-filled spaces with privacy, sound control, and modern style."
      description="Glass partitions let you divide spaces without sacrificing natural light or openness. We design and install custom glass partition systems for offices, conference rooms, residential lofts, restaurants, and retail environments. Choose from clear, frosted, tinted, or switchable smart glass with aluminum, steel, or minimalist framing systems. Every installation is engineered for your space and finished to the highest standard."
      features={[
        {
          title: "Sound Dampening",
          description:
            "Our glass partition systems use laminated acoustic glass that significantly reduces sound transmission — ideal for offices, conference rooms, and shared spaces.",
        },
        {
          title: "Privacy Options",
          description:
            "Choose from frosted, etched, tinted, or switchable smart glass that toggles between transparent and opaque at the flip of a switch.",
        },
        {
          title: "Frosted & Clear",
          description:
            "Mix frosted and clear panels to balance privacy and openness. Add custom patterns, logos, or branding elements with etched or printed glass.",
        },
        {
          title: "Modular Systems",
          description:
            "Our partition systems can be reconfigured as your space evolves. Modular framing allows for easy expansion, relocation, or layout changes.",
        },
      ]}
      process={[
        {
          step: "01",
          title: "Space Assessment",
          description:
            "We evaluate your space, discuss privacy and acoustic requirements, and measure for custom glass panels and framing.",
        },
        {
          step: "02",
          title: "Design & Specification",
          description:
            "We create detailed layouts showing partition placement, glass types, door locations, and framing details for your approval.",
        },
        {
          step: "03",
          title: "Fabrication",
          description:
            "Glass panels are cut, tempered or laminated, and finished. Framing systems are prepared with all mounting hardware.",
        },
        {
          step: "04",
          title: "Installation",
          description:
            "Our crew installs framing, sets glass panels, hangs doors, and ensures everything is level, plumb, and properly sealed.",
        },
      ]}
      faqs={[
        {
          question: "How much soundproofing do glass partitions provide?",
          answer:
            "Standard single-pane glass partitions provide moderate sound reduction (STC 30-35). Our laminated acoustic glass partitions achieve STC ratings of 38-45, which significantly reduces speech intelligibility — suitable for most office and conference room applications. For maximum sound isolation, we offer double-glazed systems.",
        },
        {
          question: "What privacy options are available?",
          answer:
            "We offer frosted glass, acid-etched glass, tinted glass, and switchable smart glass (PDLC technology) that goes from clear to opaque with an electric current. You can also combine clear and frosted panels, or add custom patterns and logos to frosted sections.",
        },
        {
          question: "Are glass partitions suitable for commercial spaces?",
          answer:
            "Absolutely. Glass partitions are one of the most popular choices for modern commercial spaces including offices, co-working spaces, conference rooms, restaurants, retail stores, and medical facilities. They meet building codes, fire ratings (when specified), and ADA requirements.",
        },
        {
          question: "Can glass partitions include doors?",
          answer:
            "Yes. We install sliding glass doors, pivot doors, and swing doors within partition systems. Doors can be frameless or framed, and we offer soft-close hardware, locks, and ADA-compliant handles.",
        },
        {
          question: "How long does a glass partition installation take?",
          answer:
            "Most residential partitions are installed in 1-2 days. Commercial projects with multiple partitions typically take 3-7 days depending on the scope. The total timeline from measurement to installation is usually 3-4 weeks.",
        },
      ]}
      ctaTitle="Ready for Custom Glass Partitions?"
      ctaDescription="Get a free quote for glass partitions — offices, homes, or commercial spaces. Privacy, acoustics, and modern design all in one."
    />
  );
}

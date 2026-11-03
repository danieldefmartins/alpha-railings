import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Alpha Railings - Railings & Staircases We've Built",
  description:
    "Photos of glass, cable and iron railings, custom staircases, gates and commercial glass work fabricated and installed by Alpha Railings.",
  alternates: { canonical: "/portfolio" },
  openGraph: {
    type: "website",
    siteName: "Alpha Railings",
    title: "Portfolio | Alpha Railings",
    description: "Glass, cable and iron railings, custom staircases and commercial glass projects by Alpha Railings.",
    url: "https://alpharailings.com/portfolio",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Alpha Railings custom railings and staircases" }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}

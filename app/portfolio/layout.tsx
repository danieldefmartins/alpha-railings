import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Alpha Railings - Our Work & Project Gallery",
  description:
    "Browse our portfolio of custom glass, cable, and iron railing installations. Residential and commercial projects across MA, NH, ME, RI & FL.",
  openGraph: {
    title: "Portfolio | Alpha Railings",
    description:
      "Custom glass, cable, and iron railing installations. Residential and commercial projects across 5 states.",
    url: "https://alpharailings.com/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

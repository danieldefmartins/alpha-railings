import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Alpha Railings - #1 Staircase & Railing Company in Florida",
  description: "South Florida's premier provider of custom glass railings, cable railings, and staircase solutions. Professional installation for residential and commercial projects.",
  keywords: "glass railings, cable railings, staircases, shower doors, South Florida, custom railings, commercial railings, residential railings",
  authors: [{ name: "Alpha Railings" }],
  openGraph: {
    title: "Alpha Railings - #1 Staircase & Railing Company in Florida",
    description: "South Florida's premier provider of custom glass railings, cable railings, and staircase solutions.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StructuredData />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyCTA } from "@/components/StickyCTA";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Alpha Railings | Premium Glass, Cable & Iron Railings | MA, NH, ME, RI, FL",
  description:
    "Ultra-modern glass railings, cable railings, iron railings, staircases, gates, shower doors & commercial railings. Premium fabrication and installation across Massachusetts, New Hampshire, Maine, Rhode Island & Florida.",
  keywords: [
    "glass railings",
    "cable railings",
    "iron railings",
    "custom staircases",
    "shower doors",
    "glass partitions",
    "commercial railings",
    "railing installation",
    "Massachusetts",
    "Florida",
    "New Hampshire",
  ],
  metadataBase: new URL("https://alpharailings.com"),
  openGraph: {
    title: "Alpha Railings | Premium Railings & Ironworks",
    description:
      "Ultra-modern glass, cable & iron railings. Premium fabrication and installation across MA, NH, ME, RI & FL.",
    url: "https://alpharailings.com",
    siteName: "Alpha Railings",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Railings | Premium Railings & Ironworks",
    description:
      "Ultra-modern glass, cable & iron railings. MA, NH, ME, RI & FL.",
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
    >
      <head>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Alpha Railings",
              description:
                "Premium glass, cable & iron railings. Custom fabrication and professional installation.",
              url: "https://alpharailings.com",
              telephone: "+1-754-318-2099",
              email: "support@alpharailings.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "MA",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "State", name: "Massachusetts" },
                { "@type": "State", name: "New Hampshire" },
                { "@type": "State", name: "Maine" },
                { "@type": "State", name: "Rhode Island" },
                { "@type": "State", name: "Florida" },
              ],
              openingHours: "Mo-Fr 07:00-18:00",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

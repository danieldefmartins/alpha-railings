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
  title: "Alpha Railings | Custom Staircases & Premium Railings | Ships Nationwide",
  description:
    "Custom staircases, glass railings, cable railings, iron railings, gates, shower doors & commercial projects. Premium in-house fabrication — shipped nationwide across all 50 states.",
  keywords: [
    "custom staircases",
    "floating staircases",
    "spiral staircases",
    "glass railings",
    "cable railings",
    "iron railings",
    "staircase fabrication",
    "nationwide shipping",
    "custom staircase design",
    "railing installation",
  ],
  metadataBase: new URL("https://alpharailings.com"),
  openGraph: {
    title: "Alpha Railings | Custom Staircases & Premium Railings",
    description:
      "Custom staircases, glass, cable & iron railings. In-house fabrication, shipped nationwide.",
    url: "https://alpharailings.com",
    siteName: "Alpha Railings",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Railings | Custom Staircases & Premium Railings",
    description:
      "Custom staircases, glass, cable & iron railings. Ships nationwide.",
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
                "Custom staircases, glass, cable & iron railings. In-house fabrication shipped nationwide.",
              url: "https://alpharailings.com",
              telephone: "+1-754-318-2099",
              email: "support@alpharailings.com",
              address: {
                "@type": "PostalAddress",
                addressRegion: "MA",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Country",
                name: "United States",
              },
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

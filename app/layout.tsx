import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import ScrollReset from "@/components/ScrollReset";
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
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: "Alpha Railings custom railings and staircases" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Railings | Custom Staircases & Premium Railings",
    description:
      "Custom staircases, glass, cable & iron railings. Ships nationwide.",
    images: ["/og-default.jpg"],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "@id": "https://alpharailings.com/#business",
              name: "Alpha Railings",
              logo: "https://alpharailings.com/logo-header.png",
              image: "https://alpharailings.com/og-default.jpg",
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
        <ScrollReset />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}

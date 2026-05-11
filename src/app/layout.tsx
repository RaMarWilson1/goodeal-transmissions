/* Root layout — wraps every page with fonts, global nav, footer, and SEO metadata */
import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

/* ─── Google Fonts ───────────────────────────────────────────────────────── */
/* Display/headings: Barlow Condensed — bold, mechanical feel */
const barlow = Barlow_Condensed({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

/* Body: DM Sans — clean, readable */
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/* ─── Default Metadata (overridden per-page via generateMetadata) ─────────── */
export const metadata: Metadata = {
  title:
    "Transmission Repair Hammonton NJ | Goodeal Discount Transmissions",
  description:
    "Goodeal Discount Transmissions in Hammonton, NJ — trusted transmission repair, rebuild & auto service for 40+ years. Serving all of South Jersey. Call (609) 567-0900.",
  metadataBase: new URL("https://www.goodealdiscounttransmissions.com"),
  openGraph: {
    title: "Goodeal Discount Transmissions | Hammonton, NJ",
    description:
      "Trusted transmission repair, rebuilds & full auto service for 40+ years. Serving South Jersey. Call (609) 567-0900.",
    url: "https://www.goodealdiscounttransmissions.com",
    siteName: "Goodeal Discount Transmissions",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

/* ─── JSON-LD Structured Data (LocalBusiness + AutoRepair) ───────────────── */
/* No priceRange field — all pricing questions directed to phone */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutoRepair"],
  name: "Goodeal Discount Transmissions",
  url: "https://www.goodealdiscounttransmissions.com",
  telephone: "+16095670900",
  founder: {
    "@type": "Person",
    name: "Ken Baldino",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "261 N White Horse Pike",
    addressLocality: "Hammonton",
    addressRegion: "NJ",
    postalCode: "08037",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 39.6474,
    longitude: -74.8037,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "97",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${dmSans.variable}`}
    >
      <head>
        {/* Inject JSON-LD structured data for Google Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        {/* Sticky navigation */}
        <Header />

        {/* Page content */}
        <main className="flex-1">{children}</main>

        {/* Site-wide footer */}
        <Footer />
      </body>
    </html>
  );
}

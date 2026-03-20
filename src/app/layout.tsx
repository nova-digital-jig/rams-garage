import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ram's Garage Auto Repair | Edison, NJ | Honest Repairs Since 1987",
  description:
    "Family-owned auto repair shop in Edison, NJ. ASE Certified mechanics, A+ BBB rated. Oil changes, brake repair, engine diagnostics, NJ state inspection & more. 4.9★ Google rating.",
  keywords:
    "auto repair Edison NJ, mechanic Edison, oil change Edison, brake repair Edison, NJ state inspection, ASE certified mechanic, Ram's Garage",
  openGraph: {
    title: "Ram's Garage Auto Repair | Edison, NJ",
    description:
      "Honest Repairs. Fair Prices. Since 1987. Family-owned ASE Certified auto repair in Edison, NJ. 4.9★ Google · 280+ Reviews.",
    type: "website",
    locale: "en_US",
    url: "https://ramsgarage.com",
    siteName: "Ram's Garage Auto Repair",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ram's Garage Auto Repair | Edison, NJ",
    description:
      "Honest Repairs. Fair Prices. Since 1987. ASE Certified, A+ BBB Rated.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://ramsgarage.com" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Ram's Garage Auto Repair",
  image: "https://ramsgarage.com/og-image.jpg",
  url: "https://ramsgarage.com",
  telephone: "(732) 555-0187",
  email: "info@ramsgarage.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Main St",
    addressLocality: "Edison",
    addressRegion: "NJ",
    postalCode: "08817",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 40.5187,
    longitude: -74.4121,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:30",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "15:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "280",
  },
  priceRange: "$$",
  areaServed: ["Edison", "Metuchen", "Woodbridge", "Piscataway", "Middlesex County"],
  founder: { "@type": "Person", name: "Ram Patel" },
  foundingDate: "1987",
  description:
    "Family-owned auto repair shop serving Edison, NJ since 1987. ASE Certified mechanics, A+ BBB rated.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Repair Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Oil Change" }, price: "39.99", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brake Repair" }, price: "149.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Engine Diagnostics" }, price: "89.00", priceCurrency: "USD" },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NJ State Inspection" }, price: "50.00", priceCurrency: "USD" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

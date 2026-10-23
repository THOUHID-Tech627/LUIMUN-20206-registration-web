import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumuna.org"),
  title: {
    default: "LUIMUN 2026 | Leading University International Model United Nation",
    template: "%s | LUIMUN 2026",
  },
  description:
    "Official website for Leading University International Model United Nation 2026 (LUIMUN). Where Diplomacy Meets Youth — Empowering young leaders through dialogue, policy, and multilateral engagement from 23–26 December 2026 in Sylhet, Bangladesh.",
  keywords: [
    "LUIMUN",
    "LUIMUN 2026",
    "LUMUNA",
    "LUMUNA 2026",
    "Model United Nations",
    "Model United Nations Bangladesh",
    "MUN Bangladesh 2026",
    "Leading University",
    "Leading University MUN",
    "Sylhet MUN",
    "Sylhet Model United Nations",
    "International Model United Nations",
    "Diplomacy",
    "Youth Leadership",
    "Delegate Registration",
    "Kamal Bazar Sylhet",
  ],
  authors: [{ name: "LUMUNA", url: "https://lumuna.org" }],
  creator: "LUMUNA",
  publisher: "Leading University Model United Nations Association",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "udAx7g7BP10ISaN9d2hbEsyra9HfxaBULnOvcTEkUME",
  },
  icons: {
    icon: [
      { url: "/images/logo-nobg.png", type: "image/png" },
    ],
    shortcut: "/images/logo-nobg.png",
    apple: "/images/logo-nobg.png",
  },
  openGraph: {
    title: "LUIMUN 2026 — Leading University International Model United Nation",
    description:
      "Where Diplomacy Meets Youth. 23–26 December 2026 at Leading University, Kamal Bazar, Sylhet. 4 days of international diplomacy, negotiation, and debate.",
    url: "https://lumuna.org",
    siteName: "LUIMUN 2026",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo-nobg.png",
        width: 800,
        height: 800,
        alt: "LUIMUN 2026 Official Seal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LUIMUN 2026 — Leading University International Model United Nation",
    description:
      "Where Diplomacy Meets Youth. 23–26 December 2026 at Leading University, Sylhet, Bangladesh.",
    images: ["/images/logo-nobg.png"],
    creator: "@LUMUNA_SYLHET",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://lumuna.org/#website",
      "url": "https://lumuna.org",
      "name": "LUIMUN 2026",
      "description": "Leading University International Model United Nation 2026",
      "publisher": {
        "@id": "https://lumuna.org/#organization",
      },
      "inLanguage": "en-US",
    },
    {
      "@type": "EducationalOrganization",
      "@id": "https://lumuna.org/#organization",
      "name": "Leading University Model United Nations Association",
      "alternateName": ["LUMUNA", "LUIMUN"],
      "url": "https://lumuna.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lumuna.org/images/logo-nobg.png",
      },
      "sameAs": [
        "https://www.facebook.com/LUMUNA.SYLHET",
        "https://www.facebook.com/share/1D8R5dnosW/",
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ragibnagar, Kamal Bazar",
        "addressLocality": "Sylhet",
        "postalCode": "3112",
        "addressCountry": "BD",
      },
    },
    {
      "@type": "Event",
      "@id": "https://lumuna.org/#event",
      "name": "LUIMUN 2026 — Leading University International Model United Nation",
      "description":
        "The 5th international edition of Leading University International Model United Nation (LUIMUN 2026). Four full days of diplomacy, debate, and multilateral negotiation.",
      "startDate": "2026-12-23T09:00:00+06:00",
      "endDate": "2026-12-26T20:00:00+06:00",
      "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
      "eventStatus": "https://schema.org/EventScheduled",
      "location": {
        "@type": "Place",
        "name": "Leading University Permanent Campus",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Ragibnagar, Kamal Bazar",
          "addressLocality": "Sylhet",
          "postalCode": "3112",
          "addressCountry": "BD",
        },
      },
      "image": [
        "https://lumuna.org/images/logo-nobg.png",
        "https://lumuna.org/images/hero-lumuna-new.png",
      ],
      "organizer": {
        "@id": "https://lumuna.org/#organization",
      },
      "offers": {
        "@type": "Offer",
        "url": "https://lumuna.org",
        "availability": "https://schema.org/InStock",
        "validFrom": "2026-01-01T00:00:00+06:00",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        {/* Structured Data (Schema.org JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="bg-white text-neutral-900 antialiased min-h-screen selection:bg-black selection:text-white">
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HE12C5DWJV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HE12C5DWJV');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}

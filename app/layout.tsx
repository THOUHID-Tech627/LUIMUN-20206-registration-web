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
  title: "LUMUNA 2026 | Leading University International Model United Nation",
  description:
    "Official website for Leading University International Model United Nation 2026 (LUMUNA). Where Diplomacy Meets Youth — Empowering young leaders through dialogue, policy, and multilateral engagement in Sylhet, Bangladesh.",
  keywords: [
    "LUMUNA",
    "LUMUNA 2026",
    "Model United Nations",
    "Leading University",
    "MUN Bangladesh",
    "Sylhet MUN",
    "Diplomacy",
    "Youth Leadership",
  ],
  authors: [{ name: "LUMUNA" }],
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
    title: "LUMUNA 2026 — Leading University International Model United Nation",
    description:
      "Where Diplomacy Meets Youth. 23–26 December 2026 at Leading University, Kamal Bazar, Sylhet.",
    type: "website",
    images: [
      {
        url: "/images/logo-nobg.png",
        width: 800,
        height: 800,
        alt: "LUMUNA 2026 Official Seal",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} scroll-smooth`}>
      <body className="bg-white text-neutral-900 antialiased min-h-screen selection:bg-black selection:text-white">
        {/* Google Analytics (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-HE12C5DWJV"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HE12C5DWJV');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}

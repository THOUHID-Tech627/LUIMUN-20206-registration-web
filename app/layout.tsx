import type { Metadata } from "next";
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
  authors: [{ name: "Leading University MUN Secretariat" }],
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "LUMUNA 2026 — Leading University International Model United Nation",
    description:
      "Where Diplomacy Meets Youth. 23–26 December 2026 at Leading University, Kamal Bazar, Sylhet.",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
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
        {children}
      </body>
    </html>
  );
}

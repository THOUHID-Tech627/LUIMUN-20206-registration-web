import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Ten Years of Multilateral Diplomacy & Leadership",
  description:
    "Discover the journey of LUMUNA since 2016. From Sylhet's first-ever national Model United Nations conference to our 5th international edition, LUIMUN 2026.",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About LUMUNA — Ten Years of Multilateral Diplomacy & Leadership",
    description:
      "From Sylhet's first national Model United Nations conference to LUIMUN 2026. Explore our journey, vision, and decade of diplomatic excellence.",
    url: "https://lumuna.org/about-us",
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delegate Resources & Study Guides | Rules of Procedure",
  description:
    "Access essential delegate resources for LUIMUN 2026: official Rules of Procedure (RoP), UN Charter, Position Paper formatting guide, and committee study guides.",
  alternates: {
    canonical: "/resources",
  },
  openGraph: {
    title: "Delegate Resources & Study Guides — LUIMUN 2026",
    description:
      "Prepare for debate with official Rules of Procedure, Position Paper guidelines, and substantive committee study guides for LUIMUN 2026.",
    url: "https://lumuna.org/resources",
  },
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


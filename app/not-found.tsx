import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-deep text-white px-4 text-center">
      <div className="relative h-16 w-16 mb-6">
        <Image
          src={SITE_CONFIG.assets.logo}
          alt="LUMUNA Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-brand-blue">
        404
      </h1>
      <h2 className="mt-2 text-xl sm:text-2xl font-bold">Protocol Not Found</h2>
      <p className="mt-3 text-white/70 max-w-md text-sm sm:text-base">
        The requested diplomatic committee or resource does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-brand-blue px-6 py-3 text-sm font-bold text-white hover:bg-brand-blue-hover transition-colors"
      >
        Return to Plenary Assembly
      </Link>
    </div>
  );
}

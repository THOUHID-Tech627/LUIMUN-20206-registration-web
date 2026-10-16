import Link from "next/link";
import Image from "next/image";
import { SITE_CONFIG } from "@/constants/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white px-4 text-center">
      <div className="relative h-16 w-16 mb-6 rounded-full overflow-hidden border border-neutral-700 shadow-md bg-black">
        <Image
          src={SITE_CONFIG.assets.logo}
          alt="LUIMUN Logo"
          fill
          className="object-contain"
        />
      </div>
      <h1 className="font-display text-4xl sm:text-6xl font-black text-white">
        404
      </h1>
      <h2 className="mt-2 text-xl sm:text-2xl font-bold text-neutral-200">Protocol Not Found</h2>
      <p className="mt-3 text-neutral-400 max-w-md text-sm sm:text-base">
        The requested diplomatic committee or resource does not exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-xs transition-all duration-200"
      >
        Return to Plenary Assembly
      </Link>
    </div>
  );
}

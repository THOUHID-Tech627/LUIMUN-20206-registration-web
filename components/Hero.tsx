"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { Countdown } from "./Countdown";

interface HeroProps {
  onOpenUpcoming: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenUpcoming }) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image Layer: Grayscale monochrome diplomatic photography/artwork */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={SITE_CONFIG.assets.heroBg}
          alt="LUMUNA Conference Background"
          fill
          priority
          quality={100}
          className="object-cover object-center grayscale contrast-125 brightness-105 opacity-80"
          sizes="100vw"
        />

        {/* Directional contrast overlay: ensures left text readability while highlighting the banner emblem */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-black/25 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/75 pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col justify-between">
        {/* Main Content Area (Left-shifted ~20% on desktop) */}
        <div className="flex flex-col items-start text-left max-w-2xl lg:-translate-x-[14%] xl:-translate-x-[20%] transition-transform">
          {/* Main Title with Strategic Contrast Box */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.12]">
            Where Diplomacy Meets{" "}
            <span className="inline-block bg-white text-black px-3.5 py-0.5 rounded-xl font-black border border-neutral-300 shadow-sm align-middle">
              Youth
            </span>
          </h1>

          {/* Subheading - strictly the requested line */}
          <h2 className="mt-5 text-xl sm:text-2xl lg:text-[26px] font-bold text-white/95 leading-snug max-w-xl">
            Leading University International Model United Nation 2026
          </h2>

          {/* Button Group:
              Buttons are white with black text on dark backgrounds!
          */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <button
              onClick={onOpenUpcoming}
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-sm sm:text-base font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="#about"
              onClick={(e) => handleScrollToSection(e, "#about")}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200"
            >
              Learn More
            </a>
          </div>

          {/* High-Credibility Subtext */}
          <div className="mt-10 flex items-center gap-2 text-xs sm:text-sm text-neutral-400">
            <ShieldCheck className="h-4 w-4 text-neutral-300 flex-shrink-0" />
            <span>Organised by LUMUNA Secretariat • High-credibility youth diplomacy</span>
          </div>
        </div>

        {/* Right-Down Corner: Countdown to Conference */}
        <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-10 lg:right-8 xl:bottom-12 xl:right-14 z-20 flex justify-center lg:justify-end">
          <Countdown />
        </div>
      </div>
    </section>
  );
};

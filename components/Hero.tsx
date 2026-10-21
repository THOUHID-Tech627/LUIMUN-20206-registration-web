"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
      {/* Background video and contrast overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/images/LUIMUN 2026_ Global Justice Network.png"
          alt="LUIMUN 2026 Background"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="pointer-events-none object-cover object-center"
        />

        {/* Directional contrast overlay: ensures left text readability while highlighting the banner emblem */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35 pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex items-center min-h-[calc(100vh-10rem)] py-8 sm:py-12">
        {/* Unified Content Column: Countdown -> Headline -> Subheading -> Buttons -> Attribution */}
        <div className="flex flex-col items-start text-left max-w-[680px] xl:max-w-[740px] w-full">
          {/* 1. Upper-Left Countdown to Conference */}
          <div data-reveal="down" className="w-full mb-6 sm:mb-7 lg:mb-8">
            <Countdown />
          </div>

          {/* 2. Conference Theme */}
          <div data-reveal="up" className="w-full">
            <h1 className="font-display text-xl sm:text-2xl md:text-[26px] lg:text-[28px] xl:text-[30px] font-extrabold tracking-tight text-white leading-snug md:leading-[1.3] max-w-[700px]">
              <span className="sm:block">A WORLD IN TRANSITION: REIMAGINING GLOBAL </span>
              <span className="sm:block">COOPERATION, ADVANCING HUMAN PROGRESS, </span>
              <span className="sm:block">AND SHAPING OUR SHARED FUTURE</span>
            </h1>

            {/* Subheading - strictly the requested line */}
            <h2 className="mt-3.5 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg font-bold text-white/95 leading-snug max-w-2xl">
              Leading University International Model United Nation 2026
            </h2>

            {/* Button Group:
                Buttons are white with black text on dark backgrounds!
            */}
            <div className="mt-7 sm:mt-8 md:mt-9 flex flex-wrap items-center justify-start gap-3 sm:gap-4">
              <a
                href="#opportunities"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#opportunities");
                  if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer"
              >
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1" />
              </a>

              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-full px-7 sm:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base font-semibold bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200"
              >
                Learn More
              </Link>
            </div>

            {/* Organization Attribution */}
            <div className="mt-5 sm:mt-6 md:mt-7 flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
              <ShieldCheck className="h-4 w-4 text-neutral-300 flex-shrink-0" />
              <span>Organised by LUMUNA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

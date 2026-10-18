"use client";

import React from "react";
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
        <iframe
          className="pointer-events-none absolute left-1/2 top-1/2 h-full w-full min-h-[56.25vw] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 border-0"
          src="https://player.vimeo.com/video/1236837112?background=1&autoplay=1&muted=1&loop=1&quality=1080p&autopause=0"
          title="LUIMUN 2026"
          allow="autoplay; fullscreen; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
          aria-hidden="true"
        />

        {/* Directional contrast overlay: ensures left text readability while highlighting the banner emblem */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/5 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col justify-between lg:min-h-[calc(100vh-12rem)]">
        {/* Main Content Area: lower-left, beneath the countdown */}
        <div data-reveal="up" className="flex flex-col items-start text-left max-w-[700px] mx-auto translate-y-4 sm:translate-y-8 lg:absolute lg:left-8 lg:bottom-2 lg:translate-y-0 lg:mx-0 transition-transform">
          {/* Conference Theme */}
          <h1 className="font-display text-2xl sm:text-3xl lg:text-[27px] font-extrabold tracking-tight text-white leading-[1.35] max-w-[700px]">
            <span className="block">A WORLD IN TRANSITION: REIMAGINING GLOBAL</span>
            <span className="block">COOPERATION, ADVANCING HUMAN PROGRESS,</span>
            <span className="block">AND SHAPING OUR SHARED FUTURE</span>
          </h1>

          {/* Subheading - strictly the requested line */}
          <h2 className="mt-5 text-base sm:text-lg lg:text-lg font-bold text-white/95 leading-snug max-w-2xl">
            Leading University International Model United Nation 2026
          </h2>

          {/* Button Group:
              Buttons are white with black text on dark backgrounds!
          */}
          <div className="mt-10 flex flex-wrap items-center justify-start gap-3.5">
            <a
              href="#opportunities"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#opportunities");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="group inline-flex items-center justify-center gap-2 rounded-full px-10 py-4 text-base font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400 cursor-pointer"
            >
              <span>Apply Now</span>
              <ArrowRight className="h-4 w-4 text-black transition-transform group-hover:translate-x-1" />
            </a>

            <Link
              href="/about-us"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold bg-white/5 border border-white/20 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-200"
            >
              Learn More
            </Link>
          </div>

          {/* Organization Attribution */}
          <div className="mt-7 flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
            <ShieldCheck className="h-4 w-4 text-neutral-300 flex-shrink-0" />
            <span>Organised by LUMUNA</span>
          </div>
        </div>

        {/* Upper-Left Countdown to Conference */}
        <div data-reveal="left" data-reveal-delay="2" className="mt-12 lg:mt-0 lg:absolute lg:top-[17rem] lg:left-8 z-20 flex justify-start">
          <Countdown />
        </div>
      </div>
    </section>
  );
};

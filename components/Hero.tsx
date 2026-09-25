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
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-brand-deep">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src={SITE_CONFIG.assets.heroBg}
          alt="LUMUNA Conference Background"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-100"
          sizes="100vw"
        />

        {/* Sophisticated Reference Atmospheric Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85" />
        <div className="absolute inset-0 bg-radial-diplomatic opacity-40" />
      </div>

      {/* Diplomatic UN Laurel / Seal Watermark on Background Left */}
      <div className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-white/10 z-1 opacity-40" />
      <div className="pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full border border-dashed border-white/15 z-1 opacity-30" />

      {/* Main 2-Column Split Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Subheading, Narrative & Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Title with Highlight Box */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white leading-[1.12]">
              Where Diplomacy Meets{" "}
              <span className="inline-block bg-[#0e78b8] px-3 py-0.5 rounded-lg text-white font-extrabold shadow-md border border-[#16A6F6]/40 align-middle">
                Youth
              </span>
            </h1>

            {/* 3. Subheading / Theme Statement */}
            <h2 className="mt-5 text-xl sm:text-2xl lg:text-[26px] font-bold text-white/95 leading-snug max-w-xl">
              Leading University International Model United Nation 2026: Maximizing Youth Potential through Dialogue, Policy, and Sustainable Development
            </h2>

            {/* 4. Narrative Paragraph */}
            <p className="mt-4 text-sm sm:text-base text-white/80 leading-relaxed max-w-lg font-normal">
              Leading University International Model United Nations 2026 brings young people together to research issues, debate ideas, negotiate solutions, and grow into thoughtful leaders.
            </p>

            {/* 5. Button Group */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenUpcoming}
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm sm:text-base font-bold text-[#06182C] shadow-lg hover:bg-white/95 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-white"
              >
                <span>Apply Now</span>
                <ArrowRight className="h-4 w-4 text-[#06182C] transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#about"
                onClick={(e) => handleScrollToSection(e, "#about")}
                className="inline-flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-md px-6 py-3.5 text-sm sm:text-base font-semibold text-white border border-white/20 hover:bg-white/20 active:scale-95 transition-all"
              >
                Learn More
              </a>
            </div>

            {/* 6. High-Credibility Subtext */}
            <div className="mt-10 flex items-center gap-2 text-xs sm:text-sm text-white/70">
              <ShieldCheck className="h-4 w-4 text-white/80 flex-shrink-0" />
              <span>Organised by LUMUNA Secretariat • High-credibility youth diplomacy</span>
            </div>
          </div>

          {/* Right Column: Countdown to Conference */}
          <div className="lg:col-span-5 flex justify-start lg:justify-end items-center">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
};

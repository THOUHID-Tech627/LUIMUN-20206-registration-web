"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <Image
        src="/images/about-background.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-white/20" />
      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-0 lg:pl-[15.5vw] lg:pr-[2vw]">
        {/* Main 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Visual & Logo Identity Anchor with Silver Gradient */}
          <div data-reveal="left" className="lg:col-span-4 lg:-translate-x-10 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              {/* Subtle Silver Gradient Emblem Frame */}
              <div className="relative h-[19.2rem] w-[19.2rem] sm:h-[24rem] sm:w-[24rem] rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-300 border border-neutral-300 p-4 shadow-xs flex items-center justify-center">
                {/* Concentric diplomatic ring with silver accent */}
                <div className="absolute inset-2 rounded-full border border-neutral-300/80" />
                <div className="relative h-[15.6rem] w-[15.6rem] sm:h-[19.2rem] sm:w-[19.2rem] rounded-full overflow-hidden bg-black flex items-center justify-center">
                  <Image
                    src={SITE_CONFIG.assets.logo}
                    alt="LUIMUN Official Seal"
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 640px) 208px, 256px"
                  />
                </div>
              </div>


            </div>

            {/* Quick Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm pt-6 border-t border-neutral-200">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  2026
                </div>
                <div className="text-[11px] font-bold text-neutral-500 uppercase mt-0.5">
                  Edition
                </div>
              </div>
              <div className="text-center border-x border-neutral-200 px-2">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  8+
                </div>
                <div className="text-[11px] font-bold text-neutral-500 uppercase mt-0.5">
                  Committees
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  400+
                </div>
                <div className="text-[11px] font-bold text-neutral-500 uppercase mt-0.5">
                  Delegates
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div data-reveal="right" data-reveal-delay="1" className="lg:col-span-8 space-y-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Where Young Voices Meet{" "}
              <span className="inline-block bg-black px-1.5 text-white">
                Global Policy
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
              <p>
                Founded in 2016, LUMUNA has spent a decade shaping the future of youth diplomacy in Northeast Bangladesh, empowering young negotiators, writers, and leaders. As we celebrate ten years of legacy, LUIMUN 2026 marks our <strong>5th international edition</strong> and our most ambitious chapter yet.
              </p>
              <p>
                Under the theme <strong>“A World in Transition: Reimagining Global Cooperation, Advancing Human Progress, and Shaping Our Shared Future,”</strong> LUIMUN 2026 brings together aspiring leaders to navigate global challenges, bridge competing interests, and envision a more inclusive, peaceful, and cooperative world.
              </p>
              <p><strong>Date:</strong> December 23 | 24 | 25 | 26, 2026 (4-day event)</p>
            </div>

            {/* Primary Action Button: Black button with white text on light surface */}
            <div className="pt-4">
              <Link
                href="/about-us"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

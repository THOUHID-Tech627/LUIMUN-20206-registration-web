"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column: Visual & Logo Identity Anchor with Silver Gradient */}
          <div data-reveal="left" className="lg:col-span-4 lg:mt-28 lg:-translate-x-10 lg:-translate-y-[10%] flex flex-col items-center lg:items-start text-center lg:text-left">
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

              {/* Decorative Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0 rounded-full bg-black px-4 py-1.5 text-xs font-bold text-white border border-neutral-800 shadow-xs flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5 text-neutral-300" />
                <span>Premier MUN of Bangladesh</span>
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
                  5+
                </div>
                <div className="text-[11px] font-bold text-neutral-500 uppercase mt-0.5">
                  Committees
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900">
                  300+
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
                The Leading University Model United Nations Association (LUMUNA) proudly announces <strong>Leading University International Model United Nations 2026</strong>, returning to Sylhet for four days of debate, negotiation and discovery.
              </p>
              <p>
                Since its founding in 2016, LUMUNA has grown into the foremost platform for youth diplomacy in Northeast Bangladesh, shaping young negotiators, writers and leaders one committee session at a time. This year marks ten years of that work, and LUIMUN 2026 stands as our 5th international edition, the furthest we have ever taken it.
              </p>
              <p>
                <strong className="font-black text-neutral-950">LUIMUN 2026 convenes under the theme: “A World in Transition: Reimagining Global Cooperation, Advancing Human Progress, and Shaping Our Shared Future.”</strong>
              </p>
              <p>
                In an increasingly multipolar world, shifting geopolitical alignments, rapid technological advancements, and widening disparities in development continue to reshape the international order. LUIMUN 2026 invites delegates to examine the complexities of multilateral cooperation, the tension between national sovereignty and collective responsibility, and the pursuit of equitable and sustainable global progress.
              </p>
              <p>
                Through diplomatic dialogue, multilateral engagement, and constructive deliberation, LUIMUN 2026 seeks to foster a platform where delegates can navigate geopolitical uncertainties, reconcile competing national interests, and advance a more inclusive, peaceful, and cooperative international order.
              </p>
              <p><strong>Date:</strong> December 23 | 24 | 25 | 26, 2026 (4-day event)</p>
            </div>

            {/* Primary Action Button: Black button with white text on light surface */}
            <div className="pt-4">
              <a
                href="#opportunities"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex min-h-[3.5rem] items-center gap-2 rounded-full border border-neutral-800 bg-gradient-to-b from-neutral-900 to-black py-1.5 pl-1.5 pr-1.5 text-xs font-bold text-white shadow-[0_12px_30px_rgba(0,0,0,0.28)] transition-all duration-200 hover:from-black hover:to-neutral-950 sm:min-h-[4.5rem] sm:gap-4 sm:py-2 sm:pl-2 sm:pr-2 sm:text-base"
              >
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-neutral-500/50 bg-[radial-gradient(circle_at_34%_28%,#f4f4f5_0%,#737373_24%,#262626_55%,#050505_78%)] shadow-[0_3px_12px_rgba(0,0,0,0.65)] sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src="/images/globe-icon.png"
                    alt=""
                    fill
                    sizes="64px"
                    className="scale-[1.3] rounded-full object-cover"
                  />
                </span>
                <span className="whitespace-nowrap">Explore Participation Opportunities</span>
                <span className="ml-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-black/70 sm:ml-1 sm:h-12 sm:w-12">
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6" />
                </span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe2, ShieldCheck, Award, Landmark, Users } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const AboutSection: React.FC = () => {
  const photoShowcase = [
    {
      title: "Multilateral Diplomacy",
      subtitle: "Structured committee debate & global consensus",
      image: "/images/photo-diplomacy.jpg",
      icon: ShieldCheck,
    },
    {
      title: "Assembly Architecture",
      subtitle: "International parliamentary standards & decorum",
      image: "/images/photo-architecture.jpg",
      icon: Landmark,
    },
    {
      title: "Empowered Delegates",
      subtitle: "Future diplomats negotiating sustainable policy",
      image: "/images/photo-delegates.jpg",
      icon: Users,
    },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Logo Identity Anchor with Silver Gradient */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              {/* Subtle Silver Gradient Emblem Frame */}
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-tr from-neutral-200 via-white to-neutral-300 border border-neutral-300 p-4 shadow-xs flex items-center justify-center">
                {/* Concentric diplomatic ring with silver accent */}
                <div className="absolute inset-2 rounded-full border border-neutral-300/80" />
                <div className="relative h-52 w-52 sm:h-64 sm:w-64 rounded-full overflow-hidden bg-black flex items-center justify-center">
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
                <span>Premier MUN of Sylhet</span>
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
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3.5 py-1 text-xs font-bold text-neutral-800 uppercase tracking-widest border border-neutral-300 shadow-2xs">
              <span>About LUMUNA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight leading-[1.15]">
              Where Young Voices Meet{" "}
              <span className="underline decoration-neutral-300 decoration-2 underline-offset-8">
                Global Policy
              </span>
            </h2>

            {/* Body text kept dark on white for high readability */}
            <p className="text-base sm:text-lg text-neutral-900 leading-relaxed font-normal">
              <strong>Leading University International Model United Nation (LUMUNA) 2026</strong> is the flagship multilateral conference organized at Leading University, Sylhet. Dedicated to cultivating the next generation of global diplomats, civil advocates, and visionary leaders, LUMUNA bridges academic theory with practical geopolitical statecraft.
            </p>

            <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
              Through immersive committee simulations, delegates dissect complex international crises, engage in structured parliamentary debate, draft actionable resolutions, and negotiate consensus across diverse diplomatic viewpoints.
            </p>

            {/* Core Values Grid with Thin Grey Borders */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200 shadow-2xs">
                <div className="p-2 rounded-lg bg-white text-neutral-900 border border-neutral-200">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Diplomatic Rigor</h4>
                  <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">
                    Adherence to UN parliamentary procedure and authentic policy simulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-neutral-50 border border-neutral-200 shadow-2xs">
                <div className="p-2 rounded-lg bg-white text-neutral-900 border border-neutral-200">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900">Youth Empowerment</h4>
                  <p className="text-xs text-neutral-700 mt-0.5 leading-relaxed">
                    Providing an international forum for students to influence future policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Button: Black button with white text on light surface */}
            <div className="pt-4">
              <a
                href="#opportunities"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm sm:text-base font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs transition-all duration-200 group"
              >
                <span>Explore Participation Opportunities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        {/* Monochrome Photographs Showcase: Diplomacy, Architecture, Delegates */}
        <div className="mt-20 pt-16 border-t border-neutral-200">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
              Multilateral Excellence
            </span>
            <h3 className="mt-1.5 font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Diplomacy, Architecture & Delegation
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {photoShowcase.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-white shadow-2xs hover:border-neutral-400 transition-all duration-300"
                >
                  {/* Photo container with strict monochrome styling */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                    
                    {/* Badge on Photo */}
                    <div className="absolute top-4 left-4 p-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/20 text-white">
                      <Icon className="h-4 w-4" />
                    </div>

                    {/* Bottom Caption Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-display font-bold text-lg text-white">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-300 mt-0.5 line-clamp-1 font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

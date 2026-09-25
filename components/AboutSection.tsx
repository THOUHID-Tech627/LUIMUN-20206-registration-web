"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Globe2, ShieldCheck, Award, BookOpen } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const AboutSection: React.FC = () => {
  const handleScrollToPrinciples = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#principles");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle Circular Geometry Background */}
      <div className="pointer-events-none absolute -right-36 top-1/3 h-96 w-96 rounded-full border border-brand-blue/15 bg-radial-diplomatic" />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full border border-brand-blue/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual & Logo Identity Anchor */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="relative">
              {/* Laurel / Circular Seal Frame */}
              <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-gradient-to-tr from-brand-blue-soft via-white to-brand-blue-light/50 border-2 border-brand-blue/30 p-4 shadow-xl shadow-brand-blue/10 flex items-center justify-center">
                {/* Concentric diplomatic rings */}
                <div className="absolute inset-2 rounded-full border border-dashed border-brand-blue/40 animate-spin-slow" />
                <div className="relative h-48 w-48 sm:h-60 sm:w-60">
                  <Image
                    src={SITE_CONFIG.assets.logo}
                    alt="LUMUNA Official Seal"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 192px, 240px"
                  />
                </div>
              </div>

              {/* Decorative Pill Badge */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-2 sm:translate-x-0 rounded-full bg-brand-deep px-4 py-1.5 text-xs font-bold text-white border border-brand-blue/40 shadow-lg flex items-center gap-1.5">
                <Globe2 className="h-3.5 w-3.5 text-brand-blue" />
                <span>Premier MUN of Sylhet</span>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="mt-10 grid grid-cols-3 gap-4 w-full max-w-sm pt-6 border-t border-brand-blue-border/40">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                  2026
                </div>
                <div className="text-[11px] font-semibold text-brand-slate uppercase mt-0.5">
                  Edition
                </div>
              </div>
              <div className="text-center border-x border-brand-blue-border/40 px-2">
                <div className="font-display text-2xl sm:text-3xl font-bold text-brand-blue">
                  5+
                </div>
                <div className="text-[11px] font-semibold text-brand-slate uppercase mt-0.5">
                  Committees
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl font-bold text-brand-deep">
                  300+
                </div>
                <div className="text-[11px] font-semibold text-brand-slate uppercase mt-0.5">
                  Delegates
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1 text-xs font-bold text-brand-blue uppercase tracking-widest border border-brand-blue/20">
              <span>About LUMUNA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deep tracking-tight leading-[1.15]">
              Where Young Voices Meet{" "}
              <span className="text-brand-blue">Global Policy</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-slate leading-relaxed">
              <strong>Leading University International Model United Nation (LUMUNA) 2026</strong> is the flagship multilateral conference organized at Leading University, Sylhet. Dedicated to cultivating the next generation of global diplomats, civil advocates, and visionary leaders, LUMUNA bridges academic theory with practical geopolitical statecraft.
            </p>

            <p className="text-sm sm:text-base text-brand-slate/90 leading-relaxed">
              Through immersive committee simulations, delegates dissect complex international crises, engage in structured parliamentary debate, draft actionable resolutions, and negotiate consensus across diverse diplomatic viewpoints.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-blue-soft border border-brand-blue-border/50">
                <div className="p-2 rounded-lg bg-white text-brand-blue shadow-xs">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-deep">Diplomatic Rigor</h4>
                  <p className="text-xs text-brand-slate mt-0.5">
                    Adherence to UN parliamentary procedure and authentic policy simulation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-brand-blue-soft border border-brand-blue-border/50">
                <div className="p-2 rounded-lg bg-white text-brand-blue shadow-xs">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-deep">Youth Empowerment</h4>
                  <p className="text-xs text-brand-slate mt-0.5">
                    Providing an international forum for students to influence future policy.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Link */}
            <div className="pt-4">
              <a
                href="#opportunities"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#opportunities")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-hover group transition-colors"
              >
                <span>Explore Participation Opportunities</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenUpcoming: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenUpcoming }) => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-32 bg-[#F5F5F7] px-4 sm:px-6 lg:px-8">
      {/* Strategic Deep Black Card Container for High-Contrast Punch */}
      <div className="relative max-w-5xl mx-auto rounded-3xl bg-[#0A0A0A] border border-neutral-800 p-12 sm:p-18 lg:p-24 text-center shadow-xl overflow-hidden">
        {/* Subtle Silver Decorative Accent Bar */}
        <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-transparent via-neutral-400 to-transparent mb-6" />

        {/* Category Label in Subtle Silver Pill */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold text-neutral-200 uppercase tracking-widest border border-white/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-neutral-400" />
          <span>REGISTRATION</span>
        </div>

        {/* Heading: Pure White on Black */}
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
          Applications Are Open
        </h2>

        {/* Subtitle: High Readability on Black */}
        <p className="mt-5 text-base sm:text-xl lg:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-normal">
          Apply now to join Bangladesh&apos;s most ambitious youth diplomacy conference.
        </p>

        {/* Inverted Button: White with black text on dark background */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onOpenUpcoming}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl px-10 py-4 sm:py-5 text-base sm:text-lg font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-md transition-all duration-200 active:scale-98 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-5 w-5 text-black transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

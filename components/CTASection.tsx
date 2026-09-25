"use client";

import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenUpcoming: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenUpcoming }) => {
  return (
    <section className="relative py-24 sm:py-32 lg:py-36 bg-[#F5F5F7] px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200/90 shadow-sm p-12 sm:p-18 lg:p-24 text-center">
        {/* Category Label in LUMUNA Brand Blue */}
        <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1 text-xs font-bold text-brand-blue uppercase tracking-widest border border-brand-blue/20 mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>REGISTRATION</span>
        </div>

        {/* Heading */}
        <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-black text-brand-deep tracking-tight leading-[1.15]">
          Applications Are Open
        </h2>

        {/* Subtitle */}
        <p className="mt-5 text-base sm:text-xl lg:text-2xl text-brand-slate max-w-2xl mx-auto leading-relaxed font-normal">
          Apply now to join Bangladesh&apos;s most ambitious youth diplomacy conference.
        </p>

        {/* Centered Button in LUMUNA Brand Blue */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={onOpenUpcoming}
            className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-blue px-10 py-4 sm:py-5 text-base sm:text-lg font-bold text-white shadow-xl shadow-brand-blue/30 hover:bg-brand-blue-hover active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
          >
            <span>Apply Now</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>
    </section>
  );
};

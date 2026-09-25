"use client";

import React from "react";
import { BookOpen, GraduationCap, Gavel, ArrowUpRight } from "lucide-react";

interface OpportunitiesProps {
  onOpenUpcoming: () => void;
}

export const OpportunitiesSection: React.FC<OpportunitiesProps> = ({
  onOpenUpcoming,
}) => {
  const items = [
    {
      id: "delegate",
      title: "Delegate",
      description:
        "Represent a country, debate a global issue, and negotiate a resolution. Apply as a delegate.",
      buttonText: "Apply as Delegate",
      icon: BookOpen,
    },
    {
      id: "campus-ambassador",
      title: "Campus Ambassador",
      description:
        "Represent LUMUNA 2026 at your institution and help bring delegates from your campus.",
      buttonText: "Apply as CA",
      icon: GraduationCap,
    },
    {
      id: "executive-board",
      title: "Executive Board",
      description:
        "Chair a committee, guide debate, and shape the conference as a senior academic leader.",
      buttonText: "Apply for EB",
      icon: Gavel,
    },
  ];

  return (
    <section id="opportunities" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Larger Header */}
        <div className="text-left mb-12 sm:mb-14">
          <span className="text-sm font-bold tracking-widest text-brand-slate uppercase">
            OPPORTUNITIES
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-5xl font-black text-brand-deep tracking-tight">
            Three Ways to Participate
          </h2>
        </div>

        {/* 3 Larger Minimalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl bg-[#F5F5F7] border border-slate-200/90 p-8 sm:p-10 lg:p-11 min-h-[380px] sm:min-h-[430px] hover:border-slate-300 transition-all duration-200 shadow-sm"
              >
                <div>
                  {/* Larger Icon Box */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-sm text-brand-deep">
                    <Icon className="h-6 w-6 text-brand-deep" strokeWidth={1.8} />
                  </div>

                  {/* Larger Title */}
                  <h3 className="mt-7 text-2xl sm:text-3xl font-extrabold text-brand-deep font-display tracking-tight">
                    {item.title}
                  </h3>

                  {/* Larger Description */}
                  <p className="mt-3.5 text-base sm:text-lg text-brand-slate leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Larger Bottom Button */}
                <div className="mt-10 pt-2">
                  <button
                    onClick={onOpenUpcoming}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-white py-3.5 px-5 text-sm sm:text-base font-bold text-brand-deep border border-neutral-700/80 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 active:scale-[0.98] transition-all shadow-xs"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

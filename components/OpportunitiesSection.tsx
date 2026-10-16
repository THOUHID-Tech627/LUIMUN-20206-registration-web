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
        "Represent a sovereign nation or portfolio, debate critical global agendas, and negotiate multilateral consensus. Apply as an individual delegate.",
      buttonText: "Apply as Delegate",
      icon: BookOpen,
    },
    {
      id: "campus-ambassador",
      title: "Campus Ambassador",
      description:
        "Serve as the official institutional liaison for LUMUNA 2026, mobilize student delegations, and foster diplomatic leadership on your campus.",
      buttonText: "Apply as CA",
      icon: GraduationCap,
    },
    {
      id: "executive-board",
      title: "Executive Board",
      description:
        "Preside over committee proceedings, steer substantive debate, evaluate delegate policy solutions, and uphold parliamentary academic rigor.",
      buttonText: "Apply for EB",
      icon: Gavel,
    },
  ];

  return (
    <section id="opportunities" className="relative py-20 sm:py-28 bg-[#F5F5F7] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left-Aligned Editorial Header */}
        <div className="text-left mb-12 sm:mb-14">
          <span className="text-sm font-bold tracking-widest text-neutral-500 uppercase">
            OPPORTUNITIES
          </span>
          <h2 className="mt-2.5 font-display text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Three Ways to Participate
          </h2>
        </div>

        {/* 3 High-Contrast Cards with Thin Grey Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col justify-between rounded-3xl bg-white border border-neutral-200/90 p-8 sm:p-10 lg:p-11 min-h-[380px] sm:min-h-[430px] hover:border-neutral-400 transition-all duration-200 shadow-2xs"
              >
                <div>
                  {/* Icon Box */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-neutral-100 border border-neutral-200 text-neutral-900 shadow-2xs">
                    <Icon className="h-6 w-6 text-neutral-900" strokeWidth={1.8} />
                  </div>

                  {/* Title */}
                  <h3 className="mt-7 text-2xl sm:text-3xl font-extrabold text-neutral-900 font-display tracking-tight">
                    {item.title}
                  </h3>

                  {/* Body description kept dark on light for high readability */}
                  <p className="mt-3.5 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Button: Black with white text on light card */}
                <div className="mt-10 pt-2">
                  <button
                    onClick={onOpenUpcoming}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-5 text-sm sm:text-base font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs transition-all duration-200 group"
                  >
                    <span>{item.buttonText}</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

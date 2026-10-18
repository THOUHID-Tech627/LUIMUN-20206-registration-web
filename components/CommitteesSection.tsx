"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CommitteesSectionProps {
  onOpenUpcoming: () => void;
}

interface CommitteeItem {
  name: string;
  fullName: string;
  logo: string;
}

const COMMITTEES: CommitteeItem[] = [
  {
    name: "UNSC",
    fullName: "United Nations Security Council",
    logo: "/images/committees/unsc.svg",
  },
  {
    name: "ICJ",
    fullName: "International Court of Justice",
    logo: "/images/committees/icj.png",
  },
  {
    name: "IP",
    fullName: "International Press",
    logo: "/images/committees/ip.svg",
  },
  {
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    logo: "/images/committees/unhrc.png",
  },
  {
    name: "ILO",
    fullName: "International Labour Organization",
    logo: "/images/committees/ilo.svg",
  },
  {
    name: "AL",
    fullName: "League of Arab States",
    logo: "/images/committees/al.svg",
  },
  {
    name: "UNDP",
    fullName: "United Nations Development Programme",
    logo: "/images/committees/undp.png",
  },
  {
    name: "WTO",
    fullName: "World Trade Organization",
    logo: "/images/committees/wto.png",
  },
];

export const CommitteesSection: React.FC<CommitteesSectionProps> = ({
  onOpenUpcoming,
}) => {
  const handleScrollToOpportunities = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#opportunities");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else if (onOpenUpcoming) {
      onOpenUpcoming();
    }
  };

  return (
    <section
      id="committees"
      className="relative py-20 sm:py-28 bg-[#E5E7EB] scroll-mt-20 border-t border-neutral-300/60"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div data-reveal="up" className="text-left mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-800 shadow-2xs mb-3">
            <span>Committees • LUIMUN 2026</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
            Official Simulation <span className="inline-block bg-black px-2 py-0.5 text-white">Committees</span>
          </h2>
        </div>

        {/* 8 Committee Boxes: Maximum 4 in a row, side by side */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {COMMITTEES.map((comm) => (
            <div
              key={comm.name}
              data-reveal="up"
              className="group relative flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 min-h-[220px] sm:min-h-[250px]"
            >
              {/* Committee Logo Box */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src={comm.logo}
                  alt={`${comm.name} Official Logo`}
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </div>

              {/* Committee Name Below the Logo */}
              <div className="mt-4 sm:mt-5 text-center w-full pt-3 border-t border-neutral-100">
                <h3 className="font-display font-black text-base sm:text-lg md:text-xl text-neutral-900 tracking-tight">
                  {comm.name}
                </h3>
                <p className="mt-1 text-xs sm:text-sm font-semibold text-neutral-600 leading-snug line-clamp-2">
                  {comm.fullName}
                </p>
              </div>
            </div>
          ))}

          {/* 2 Surprise Committees: Centered on desktop via md:col-start-2 */}
          {[1, 2].map((num, idx) => (
            <div
              key={`surprise-${num}`}
              data-reveal="up"
              className={`group relative flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 min-h-[220px] sm:min-h-[250px] ${
                idx === 0 ? "md:col-start-2" : ""
              }`}
            >
              {/* Question Mark Logo Box */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center my-auto transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/committees/surprise.svg"
                  alt="Surprise Committee Logo"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, 112px"
                />
              </div>

              {/* Committee Name Below the Logo */}
              <div className="mt-4 sm:mt-5 text-center w-full pt-3 border-t border-neutral-100 flex items-center justify-center min-h-[52px]">
                <h3 className="font-display font-black text-base sm:text-lg md:text-xl text-neutral-900 tracking-tight">
                  Surprise Committee
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* End of Section: Register Now Button */}
        <div data-reveal="up" className="mt-12 sm:mt-16 text-center">
          <button
            onClick={handleScrollToOpportunities}
            className="group inline-flex items-center justify-center gap-2 rounded-full px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs active:scale-95 transition-all duration-200 cursor-pointer"
          >
            <span>Register Now</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};


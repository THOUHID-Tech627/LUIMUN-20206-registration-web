"use client";

import React, { useState, useEffect } from "react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 81,
    hours: 9,
    minutes: 3,
    seconds: 28,
    isStarted: false,
  });

  useEffect(() => {
    const targetDate = new Date(SITE_CONFIG.conferenceDateIso).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isStarted: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isStarted: false,
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isStarted) {
    return (
      <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-5 text-center">
        <span className="text-white font-bold text-base font-display">
          Conference Has Begun
        </span>
        <p className="text-xs text-white/70 mt-1">16–17 December 2026 • Sylhet, Bangladesh</p>
      </div>
    );
  }

  const units = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINUTES", value: timeLeft.minutes },
    { label: "SECONDS", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-md flex flex-col items-center lg:items-end">
      {/* Top Label */}
      <span className="text-xs sm:text-[13px] font-semibold tracking-wider text-white/80 uppercase mb-4 text-center lg:text-right">
        COUNTING DOWN TO THE CONFERENCE
      </span>

      {/* 4 Countdown Boxes with colons */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2.5">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            {/* Box */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-white/10 backdrop-blur-md border border-white/15 px-3 py-3 sm:px-4 sm:py-3.5 min-w-[62px] sm:min-w-[74px] shadow-lg">
              <span className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums leading-none">
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-white/75">
                {unit.label}
              </span>
            </div>

            {/* Colon divider between boxes */}
            {index < units.length - 1 && (
              <span className="text-lg sm:text-xl font-bold text-white/50 -mt-3 select-none">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Sub-label under countdown */}
      <p className="mt-3.5 text-xs sm:text-[13px] text-white/75 font-medium text-center lg:text-right">
        {SITE_CONFIG.dateDisplay} • Sylhet, Bangladesh
      </p>
    </div>
  );
};

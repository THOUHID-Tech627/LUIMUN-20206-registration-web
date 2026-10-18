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

const calculateTime = (): TimeLeft => {
  const targetDate = new Date(SITE_CONFIG.conferenceDateIso).getTime();
  const now = Date.now();
  const difference = targetDate - now;

  if (isNaN(difference) || difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isStarted: true,
    };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (difference % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
    isStarted: false,
  };
};

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTime);

  useEffect(() => {
    // Run an initial calculation immediately on mount
    setTimeLeft(calculateTime());

    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.isStarted) {
    return (
      <div className="rounded-xl bg-black/60 backdrop-blur-md border border-white/20 p-5 text-left">
        <span className="text-white font-bold text-base font-display">
          Conference Has Begun
        </span>
        <p className="text-xs text-neutral-400 mt-1">{SITE_CONFIG.dateDisplay} • Sylhet, Bangladesh</p>
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
    <div className="w-full max-w-md flex flex-col items-start text-left">
      {/* Top: Date in White Bold matching background */}
      <span className="text-base sm:text-lg font-bold text-white tracking-wide mb-3 text-left drop-shadow-sm">
        {SITE_CONFIG.dateDisplay} • Sylhet, Bangladesh
      </span>

      {/* Middle: 4 Countdown Boxes with colons */}
      <div className="flex items-center justify-start gap-1.5 sm:gap-2.5">
        {units.map((unit, index) => (
          <React.Fragment key={unit.label}>
            {/* Box with frosted dark background for clear contrast over visible banner */}
            <div className="flex flex-col items-center justify-center rounded-xl bg-black/75 backdrop-blur-md border border-white/20 px-3 py-3 sm:px-5 sm:py-4 min-w-[72px] sm:min-w-[96px] shadow-md">
              <span
                suppressHydrationWarning
                className="font-display font-extrabold text-2xl sm:text-3xl text-white tabular-nums leading-none"
              >
                {String(unit.value).padStart(2, "0")}
              </span>
              <span className="mt-1.5 text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                {unit.label}
              </span>
            </div>

            {/* Colon divider between boxes */}
            {index < units.length - 1 && (
              <span className="text-lg sm:text-xl font-bold text-white/30 -mt-3 select-none">
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};

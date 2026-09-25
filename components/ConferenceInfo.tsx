import React from "react";
import { Calendar, Building2, MapPin, Users2, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

export const ConferenceInfo: React.FC = () => {
  const details = [
    {
      id: "date",
      icon: Calendar,
      label: "CONFERENCE DATES",
      value: SITE_CONFIG.dateDisplay,
      subvalue: "Wednesday – Thursday",
    },
    {
      id: "venue",
      icon: Building2,
      label: "HOST VENUE",
      value: SITE_CONFIG.venue,
      subvalue: "Main Campus Auditorium",
    },
    {
      id: "location",
      icon: MapPin,
      label: "LOCATION",
      value: SITE_CONFIG.location,
      subvalue: "Bangladesh",
    },
    {
      id: "format",
      icon: Users2,
      label: "PARTICIPATION FORMAT",
      value: SITE_CONFIG.format,
      subvalue: "In-Person Deliberation",
    },
  ];

  return (
    <section
      id="conference-info"
      className="relative py-14 sm:py-16 bg-slate-50 border-y border-slate-200 overflow-hidden"
    >
      {/* Subtle Diplomatic Geometric Watermark */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-radial-diplomatic opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-blue-light px-3.5 py-1 text-xs font-bold text-brand-blue uppercase tracking-widest border border-brand-blue/25 mb-2.5">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Conference at a Glance</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-brand-deep tracking-tight">
            Key Information & Logistics
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white p-6 border border-slate-200/80 shadow-sm hover:shadow-brand-md hover:border-brand-blue/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                {/* Top Subtle Accent Indicator */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent group-hover:via-brand-blue transition-colors" />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-blue-light border border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 shadow-2xs">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-brand-blue uppercase">
                      {item.label}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-brand-deep font-display leading-snug">
                      {item.value}
                    </h3>
                    <p className="text-xs text-brand-slate mt-1 font-medium">
                      {item.subvalue}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

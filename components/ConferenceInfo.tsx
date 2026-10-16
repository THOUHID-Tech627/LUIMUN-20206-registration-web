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
      subvalue: "Wednesday – Saturday",
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
      className="relative py-14 sm:py-16 bg-[#F9FAFB] border-y border-neutral-200 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-neutral-800 uppercase tracking-widest border border-neutral-300 mb-2.5 shadow-2xs">
            <Sparkles className="h-3.5 w-3.5 text-neutral-500" />
            <span>Conference at a Glance</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            Key Information & Logistics
          </h2>
        </div>

        {/* 4 Cards Grid with Thin Grey Borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {details.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-white p-6 border border-neutral-200 hover:border-neutral-400 transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between shadow-2xs"
              >
                {/* Subtle Silver Gradient Accent Top Line */}
                <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-neutral-300 to-transparent group-hover:via-neutral-500 transition-colors" />

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-900 group-hover:bg-black group-hover:text-white transition-colors duration-200">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
                      {item.label}
                    </span>
                    <h3 className="mt-1 text-base sm:text-lg font-bold text-neutral-900 font-display leading-snug">
                      {item.value}
                    </h3>
                    <p className="text-xs text-neutral-600 mt-1 font-medium">
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

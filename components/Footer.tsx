"use client";

import React from "react";
import { Facebook, Instagram, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface FooterProps {
  onOpenUpcoming: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenUpcoming }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer id="contact" className="relative bg-white text-neutral-800 pt-20 sm:pt-24 pb-14 overflow-hidden border-t border-neutral-200">
      {/* Full-Width Edge-to-Edge Distributed Background Text in Subtle Monochrome */}
      <div className="pointer-events-none select-none absolute inset-0 w-full h-full flex items-center justify-center opacity-[0.04] z-0 overflow-hidden px-4 sm:px-8">
        <svg
          viewBox="0 0 1600 280"
          className="w-full h-full select-none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-black"
            style={{
              fontFamily: "var(--font-outfit), system-ui, sans-serif",
              fontWeight: 900,
              fontSize: "240px",
            }}
            textLength="1540"
            lengthAdjust="spacing"
          >
            LUIMUN 2026
          </text>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        {/* 4 Columns Distributed Evenly */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 w-full">
          {/* Column 1: ABOUT */}
          <div className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-900">
              ABOUT
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "#about")}
                  className="text-neutral-600 hover:text-black transition-colors inline-block"
                >
                  About LUMUNA
                </a>
              </li>
              <li>
                <a
                  href="#conference-info"
                  onClick={(e) => handleNavClick(e, "#conference-info")}
                  className="text-neutral-600 hover:text-black transition-colors inline-block"
                >
                  Theme & Vision
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Committees
                </button>
              </li>
            </ul>
          </div>

          {/* Column 2: PARTICIPATE */}
          <div className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-900">
              PARTICIPATE
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Delegate Application
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Campus Ambassador
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Executive Board
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-900">
              SUPPORT
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Sponsor/Partner
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.socials.email}`}
                  className="text-neutral-600 hover:text-black transition-colors inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-900">
              LEGAL
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-neutral-600 hover:text-black transition-colors text-left"
                >
                  Code of Conduct
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Row Divider & Sub-footer */}
        <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-neutral-600 font-medium">
          {/* Copyright notice */}
          <p>© 2026 {SITE_CONFIG.name}. Organised by Leading University MUN Secretariat.</p>

          {/* Language Selector & Social Icons */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5 text-neutral-900">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-bold">LANGUAGE</span>
              <span className="font-extrabold text-neutral-900 underline decoration-black underline-offset-4">EN</span>
              <span className="text-neutral-300">|</span>
              <span className="text-neutral-600 hover:text-black transition-colors cursor-pointer font-bold">বাংলা</span>
            </div>

            {/* Social Icons with Thin Grey Border */}
            <div className="flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-2xs"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-2xs"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.socials.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200 hover:bg-black hover:text-white hover:border-black transition-all duration-200 shadow-2xs"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

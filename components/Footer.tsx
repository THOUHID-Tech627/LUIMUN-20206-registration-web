"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
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
    <footer id="contact" className="relative overflow-hidden border-t border-white/15 bg-neutral-950 pt-20 pb-14 text-neutral-100 sm:pt-24">
      {/* PC Background Image & Contrast Overlay */}
      <Image
        src="/images/footer-background.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none hidden md:block object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/35 hidden md:block" />

      {/* Mobile-only Military style responsive Bolder background text */}
      <div
        className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden md:hidden select-none"
        aria-hidden="true"
      >
        <span className="font-display font-black uppercase tracking-[0.16em] text-[13vw] sm:text-[10vw] leading-none text-white/[0.12] text-center whitespace-nowrap">
          LUIMUN 2026
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full">
        {/* Four footer columns, balanced across screen sizes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 lg:gap-16 w-full">
          {/* Column 1: ABOUT */}
          <div data-reveal="up" className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-white">
              ABOUT
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <Link
                  href="/about-us"
                  className="text-white/80 hover:text-white transition-colors inline-block"
                >
                  About LUMUNA
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white/80 hover:text-white transition-colors inline-block"
                >
                  Theme & Vision
                </Link>
              </li>
              <li>
                <Link
                  href="/committees"
                  className="text-white/80 hover:text-white transition-colors inline-block"
                >
                  Committees
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: PARTICIPATE */}
          <div data-reveal="up" data-reveal-delay="1" className="space-y-5">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-white">
              PARTICIPATE
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Delegate Application
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Campus Ambassador
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Executive Board
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: SUPPORT */}
          <div data-reveal="up" data-reveal-delay="2" className="space-y-5 sm:col-span-2 md:col-span-1">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-white">
              SUPPORT
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  Sponsor/Partner
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenUpcoming}
                  className="text-white/80 hover:text-white transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: CONTACT US */}
          <div data-reveal="up" data-reveal-delay="3" className="space-y-5 sm:col-span-2 md:col-span-1">
            <h4 className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-white">
              CONTACT US
            </h4>
            <ul className="space-y-3.5 text-sm sm:text-base font-semibold">
              <li><a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors inline-block">Event Page</a></li>
              <li><a href={SITE_CONFIG.socials.facebook} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors inline-block">Facebook</a></li>
              <li><a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors inline-block">Instagram</a></li>
              <li><a href={`mailto:${SITE_CONFIG.socials.email}`} className="text-white/80 hover:text-white transition-colors inline-block">E-mail</a></li>
              <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white transition-colors inline-block">WhatsApp</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Row Divider & Sub-footer */}
        <div data-reveal="up" className="mt-16 pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/75 font-medium">
          {/* Copyright notice */}
          <p>© 2026 {SITE_CONFIG.name}. Organised by Leading University MUN Secretariat.</p>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {/* Social Icons with Thin Grey Border */}
            <div className="flex items-center gap-2.5">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-2xs"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-2xs"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.socials.email}`}
                aria-label="Email"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-200 shadow-2xs"
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

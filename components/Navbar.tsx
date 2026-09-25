"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface NavbarProps {
  onOpenUpcoming: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUpcoming }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-brand-blue-border py-3"
          : "bg-gradient-to-b from-brand-deep/80 via-brand-deep/40 to-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand with strictly preserved aspect ratio */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-brand-blue rounded-lg p-1"
          >
            <div className="relative h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0">
              <Image
                src={SITE_CONFIG.assets.logo}
                alt="LUMUNA 2026 Logo"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 40px, 48px"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-display font-extrabold tracking-wider text-base sm:text-lg transition-colors leading-tight ${
                  isScrolled ? "text-brand-deep" : "text-white"
                }`}
              >
                LUMUNA <span className="text-brand-blue">2026</span>
              </span>
              <span
                className={`text-[10px] sm:text-[11px] font-medium uppercase tracking-widest transition-colors ${
                  isScrolled ? "text-brand-slate" : "text-white/80"
                }`}
              >
                Leading University
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  isScrolled
                    ? "text-brand-slate hover:text-brand-blue hover:bg-brand-blue-light"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Register Button (Triggers Upcoming modal) */}
          <div className="hidden md:flex items-center">
            <button
              onClick={onOpenUpcoming}
              className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-brand-blue px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-blue/25 hover:bg-brand-blue-hover active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2"
            >
              <span>Register Now</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              className={`p-2 rounded-xl transition-colors ${
                isScrolled
                  ? "text-brand-deep hover:bg-brand-blue-light"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-brand-blue" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top duration-300 bg-white border-b border-brand-blue-border shadow-xl px-4 pt-3 pb-6 mt-3">
          <nav className="flex flex-col space-y-2">
            {SITE_CONFIG.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg text-base font-semibold text-brand-deep hover:text-brand-blue hover:bg-brand-blue-light transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-brand-blue-border/40">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenUpcoming();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-brand-blue py-3 px-4 text-center font-bold text-white shadow-md shadow-brand-blue/25 hover:bg-brand-blue-hover active:scale-95 transition-all"
              >
                <span>Register Now</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

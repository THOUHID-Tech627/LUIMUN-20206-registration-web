"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface NavbarProps {
  onOpenUpcoming: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUpcoming }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    label: string,
    href?: string
  ) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    if (href && href.startsWith("#")) {
      e.preventDefault();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector("#opportunities");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-[20px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl xl:max-w-5xl transition-all duration-300"
      aria-label="Main Navigation"
    >
      {/* Floating Pill Glassmorphism Container */}
      <div
        className={`floating-glass-navbar relative flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 border border-neutral-200/90 shadow-[0_14px_38px_rgba(0,0,0,0.16)]"
            : "bg-white/75 border border-white/60 shadow-[0_10px_32px_rgba(0,0,0,0.12)]"
        }`}
      >
        {/* Left: Logo Brand (LUIMUN 2026) */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-full py-1 pr-2"
        >
          <div className="relative h-9 w-9 sm:h-10 sm:w-10 flex-shrink-0 rounded-full overflow-hidden border border-neutral-300/60 shadow-xs bg-black flex items-center justify-center">
            <Image
              src={SITE_CONFIG.assets.logo}
              alt="LUIMUN Logo"
              fill
              priority
              className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 36px, 40px"
            />
          </div>
          <span className="font-display font-extrabold tracking-wider text-sm sm:text-base text-neutral-900 group-hover:text-black transition-colors whitespace-nowrap">
            LUIMUN 2026
          </span>
        </Link>

        {/* Center: Desktop Navigation Links (Home, About Us, Contact Us) */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4">
          {navLinks.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`relative px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-black font-bold"
                    : "text-neutral-700 hover:text-black hover:bg-black/5"
                }`}
              >
                {/* Active Link Indicator (Amber accent bar matching reference) */}
                {isActive && (
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-amber-500 transition-all duration-200" />
                )}
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        {/* Right: Register Now Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#opportunities"
            onClick={handleRegisterClick}
            className="inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <span>Register Now</span>
          </a>
        </div>

        {/* Mobile Hamburger & Register Now Button */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href="#opportunities"
            onClick={handleRegisterClick}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs whitespace-nowrap cursor-pointer"
          >
            Register Now
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-1.5 rounded-full bg-white/60 text-neutral-900 border border-neutral-200 hover:bg-white transition-colors"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="floating-glass-navbar md:hidden mt-2.5 rounded-2xl bg-white/95 border border-white/70 shadow-[0_16px_40px_rgba(0,0,0,0.2)] p-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = activeLink === item.label;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.label, item.href)}
                  className={`px-3 py-2 text-sm font-semibold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-neutral-100 text-black font-bold"
                      : "text-neutral-800 hover:bg-neutral-100/80 hover:text-black"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />}
                </a>
              );
            })}

            <div className="pt-2">
              <a
                href="#opportunities"
                onClick={handleRegisterClick}
                className="block w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold bg-black text-white hover:bg-neutral-800 shadow-xs transition-colors cursor-pointer"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

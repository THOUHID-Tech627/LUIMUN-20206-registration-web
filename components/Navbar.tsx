"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface NavbarProps {
  onOpenUpcoming: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUpcoming }) => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [activeLink, setActiveLink] = useState(isHome ? "Home" : "About Us");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/about-us") {
      setActiveLink("About Us");
    } else if (pathname === "/resources") {
      setActiveLink("Resources");
    } else if (pathname === "/faq") {
      setActiveLink("FAQ");
    } else if (pathname === "/") {
      setActiveLink("Home");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isHome) {
        const commEl = document.querySelector("#committees");
        if (commEl) {
          const rect = commEl.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveLink("Committees");
            return;
          }
        }
        if (window.scrollY < 400) {
          setActiveLink("Home");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    label: string,
    href: string
  ) => {
    setActiveLink(label);
    setMobileMenuOpen(false);

    if (isHome) {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else if (href.startsWith("/#")) {
        e.preventDefault();
        const targetId = href.replace("/", "");
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  const handleRegisterClick = (e: React.MouseEvent) => {
    setMobileMenuOpen(false);
    if (isHome) {
      e.preventDefault();
      const target = document.querySelector("#opportunities");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Committees", href: "/#committees" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
  ];

  const isLightNavbar = isScrolled || !isHome;

  return (
    <nav
      data-reveal="down"
      className="fixed top-[8px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl xl:max-w-6xl transition-all duration-300"
      aria-label="Main Navigation"
    >
      {/* Floating Pill Glassmorphism Container */}
      <div
        className={`floating-glass-navbar ${!isLightNavbar ? "floating-glass-navbar-dark" : ""} relative flex items-center justify-between px-3 sm:px-5 lg:px-6 py-2 rounded-full transition-all duration-300 ${
          isLightNavbar
            ? "bg-white/45 border border-white/55 shadow-[0_16px_42px_rgba(0,0,0,0.18)]"
            : "bg-black/35 border border-white/25 shadow-[0_12px_36px_rgba(0,0,0,0.3)]"
        }`}
      >
        {/* Left: Logo Brand (LUIMUN 2026) */}
        <Link
          href="/"
          className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-neutral-400 rounded-full py-1 pr-1.5"
        >
          <div className="relative h-8 w-8 sm:h-9 sm:w-9 flex-shrink-0 rounded-full overflow-hidden border border-neutral-300/60 shadow-xs bg-black flex items-center justify-center">
            <Image
              src={SITE_CONFIG.assets.logo}
              alt="LUIMUN Logo"
              fill
              priority
              className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 32px, 36px"
            />
          </div>
          <span className={`font-display font-black tracking-wider text-sm sm:text-base lg:text-lg transition-colors whitespace-nowrap ${isLightNavbar ? "text-neutral-900 group-hover:text-black" : "text-white group-hover:text-white/80"}`}>
            LUIMUN 2026
          </span>
        </Link>

        {/* Center: Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1 lg:gap-2.5">
          {navLinks.map((item) => {
            const isActive = activeLink === item.label;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.label, item.href)}
                className={`relative px-2.5 lg:px-3 py-1 text-xs lg:text-sm font-extrabold rounded-full transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? `${isLightNavbar ? "text-black" : "text-white"} font-bold`
                    : isLightNavbar
                      ? "text-neutral-700 hover:text-black hover:bg-black/5"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {/* Active Link Indicator (Monochrome accent bar matching theme) */}
                {isActive && (
                  <span className={`absolute -top-1.5 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full transition-all duration-200 ${isLightNavbar ? "bg-neutral-900" : "bg-white"}`} />
                )}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right: Register Now Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="/#opportunities"
            onClick={handleRegisterClick}
            className={`inline-flex items-center justify-center px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-xs active:scale-95 transition-all duration-200 whitespace-nowrap cursor-pointer ${
              isLightNavbar
                ? "bg-black text-white hover:bg-neutral-800 border border-black"
                : "bg-white text-black hover:bg-neutral-200 border border-white"
            }`}
          >
            <span>Register Now</span>
          </Link>
        </div>

        {/* Mobile Hamburger & Register Now Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/#opportunities"
            onClick={handleRegisterClick}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs whitespace-nowrap cursor-pointer ${
              isLightNavbar
                ? "bg-black text-white hover:bg-neutral-800 border border-black"
                : "bg-white text-black hover:bg-neutral-200 border border-white"
            }`}
          >
            Register Now
          </Link>

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
        <div className="md:hidden mt-2.5 rounded-2xl bg-white/95 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.2)] p-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((item) => {
              const isActive = activeLink === item.label;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.label, item.href)}
                  className={`px-3.5 py-2.5 text-sm font-bold rounded-xl transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-neutral-900 text-white font-bold shadow-xs"
                      : "text-neutral-900 hover:bg-neutral-100/90"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="h-2 w-2 rounded-full bg-white" />}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                href="/#opportunities"
                onClick={handleRegisterClick}
                className="block w-full py-2.5 px-4 rounded-xl text-center text-sm font-bold bg-black text-white hover:bg-neutral-800 shadow-xs transition-colors cursor-pointer"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

"use client";

import React, { useEffect, useRef } from "react";
import { X, Sparkles, Clock, Globe } from "lucide-react";

interface UpcomingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  subtitle?: string;
}

export const UpcomingModal: React.FC<UpcomingModalProps> = ({
  isOpen,
  onClose,
  title = "Upcoming…",
  subtitle = "This feature will be available soon.",
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Handle ESC key press and focus management
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    // Auto focus close button
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Prevent body scroll when modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upcoming-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#06182C]/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Container */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white border border-[#16A6F6]/30 shadow-2xl shadow-[#16A6F6]/20 transition-all duration-300 animate-in zoom-in-95 fade-in z-10"
      >
        {/* Top Decorative Geometric Header Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-[#16A6F6] via-[#61c9ff] to-[#16A6F6]" />

        {/* Ambient Radial Background Glow */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#16A6F6]/10 blur-2xl" />
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-[#16A6F6]/5 blur-2xl" />

        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-2 text-brand-slate hover:text-brand-deep hover:bg-brand-blue-light transition-colors focus:outline-none focus:ring-2 focus:ring-[#16A6F6]"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Content */}
        <div className="p-8 sm:p-10 text-center flex flex-col items-center">
          {/* Circular Badge Icon */}
          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EBF7FE] border-2 border-[#16A6F6]/40 shadow-inner">
            <Clock className="h-8 w-8 text-[#16A6F6]" />
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#16A6F6] text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </div>
          </div>

          {/* Heading */}
          <h3
            id="upcoming-modal-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-[#16A6F6] font-display"
          >
            {title}
          </h3>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base font-medium text-brand-slate max-w-xs leading-relaxed">
            {subtitle}
          </p>

          {/* Diplomatic Note */}
          <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-blue-light/60 px-4 py-1.5 text-xs text-brand-deep font-semibold border border-[#16A6F6]/20">
            <Globe className="h-3.5 w-3.5 text-[#16A6F6]" />
            <span>LUMUNA 2026 Secretariat</span>
          </div>

          {/* Action Button */}
          <div className="mt-8 w-full">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="w-full rounded-xl bg-[#16A6F6] px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-[#16A6F6]/25 hover:bg-[#0e8fd6] active:scale-[0.98] transition-all focus:outline-none focus:ring-2 focus:ring-[#16A6F6] focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

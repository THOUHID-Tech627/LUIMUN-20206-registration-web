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
  title = "Become a Partner",
  subtitle = "Become a partner of a great diplomatic conference.",
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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-200 animate-in fade-in"
      />

      {/* Modal Container with Thin Grey Border */}
      <div
        ref={modalRef}
        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white border border-neutral-200 shadow-2xl transition-all duration-200 animate-in zoom-in-95 fade-in z-10"
      >
        {/* Subtle Silver Gradient Header Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-neutral-300 via-neutral-100 to-neutral-400" />

        {/* Close Button (Top Right) */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 rounded-full p-2 bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-black hover:bg-neutral-200 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Modal Content */}
        <div className="p-8 sm:p-10 text-center flex flex-col items-center">
          {/* Circular Badge Icon */}
          <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100 border border-neutral-300 shadow-inner">
            <Clock className="h-8 w-8 text-neutral-900" />
            <div className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-black text-white border border-neutral-200">
              <Sparkles className="h-3 w-3" />
            </div>
          </div>

          {/* Heading: High Contrast */}
          <h3
            id="upcoming-modal-title"
            className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 font-display"
          >
            {title}
          </h3>

          {/* Subtitle */}
          <p className="mt-3 text-sm sm:text-base font-normal text-neutral-700 max-w-xs leading-relaxed">
            {subtitle}
          </p>

          {/* Diplomatic Note */}
          <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-neutral-100 px-4 py-1.5 text-xs text-neutral-800 font-semibold border border-neutral-200">
            <Globe className="h-3.5 w-3.5 text-neutral-600" />
            <span>LUIMUN 2026</span>
          </div>

          {/* Action Button: Black with white text */}
          <div className="mt-8 w-full">
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="w-full rounded-xl px-6 py-3.5 text-sm font-bold bg-black text-white hover:bg-neutral-800 border border-black shadow-xs transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

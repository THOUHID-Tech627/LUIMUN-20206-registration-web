"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Filter,
  X,
  Maximize2,
  Calendar,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  History,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/constants/siteConfig";
import { CONFERENCE_EDITIONS, EditionMilestone } from "@/constants/conferenceEditions";

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    year: string;
  } | null>(null);
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

  const filteredEditions = CONFERENCE_EDITIONS.filter((edition) => {
    if (selectedYear === "all") return true;
    return edition.year === selectedYear;
  });

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-black selection:text-white">
      <ScrollReveal />

      {/* Navigation */}
      <Navbar onOpenUpcoming={handleOpenUpcoming} />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Bar Pill & Title */}
          <div data-reveal="down" className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 shadow-2xs">
              <History className="h-3.5 w-3.5 text-neutral-600" />
              <span>Decade Archive • 2016–2026</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              A Decade of{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                Diplomacy in Frames.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              From the humble beginnings of the 2016 Intra-MUN to the grand international assembly of LUIMUN 2025,
              explore our complete photographic archive across ten years of youth leadership.
            </p>
          </div>

          {/* Impact Stats */}
          <div data-reveal="up" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">9 Editions</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">2016 to 2025</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">3,500+</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Delegates Trained</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">4 International</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Editions Hosted</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">LUIMUN 2026</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">10th Anniversary</div>
            </div>
          </div>

          {/* Year Filter Pills */}
          <div data-reveal="up" className="mt-12 flex flex-wrap items-center gap-2">
            {["all", "2025", "2024", "2023", "2022", "2020", "2019", "2018", "2017", "2016"].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedYear === y
                    ? "bg-black text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {y === "all" ? "All Editions" : y}
              </button>
            ))}
          </div>

          {/* Chronological Editions Showcase */}
          <div className="mt-12 space-y-16">
            {filteredEditions.map((edition) => (
              <div
                key={edition.year}
                data-reveal="up"
                className="p-6 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-xs"
              >
                {/* Edition Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-200">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-display font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 text-white">
                        {edition.year}
                      </span>
                    </div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-900">
                      {edition.editionName}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1">
                      {edition.tagline}
                    </p>
                  </div>
                </div>

                {/* Historical Narrative */}
                <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal max-w-4xl">
                  {edition.description}
                </p>

                {/* Photo Gallery Grid for this Edition */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {edition.photos.map((photoSrc, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() =>
                        setLightboxImage({
                          src: photoSrc,
                          title: edition.editionName,
                          year: edition.year,
                        })
                      }
                      className="group relative aspect-[4/3] sm:aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <Image
                        src={photoSrc}
                        alt={`${edition.editionName} - Photo ${pIdx + 1}`}
                        fill
                        unoptimized
                        loading={edition.year === "2025" && pIdx < 2 ? "eager" : "lazy"}
                        priority={edition.year === "2025" && pIdx < 2}
                        decoding="async"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />

                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="h-8 w-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-md">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in duration-200"
              onClick={() => setLightboxImage(null)}
            >
              <div
                className="relative max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image Display */}
                <div className="relative w-full h-[60vh] sm:h-[72vh] bg-black flex items-center justify-center">
                  <Image
                    src={lightboxImage.src}
                    alt={lightboxImage.title}
                    fill
                    unoptimized
                    priority
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Metadata Footer */}
                <div className="p-5 sm:p-6 bg-neutral-900 border-t border-neutral-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-neutral-200 border border-white/20 mb-1.5">
                      {lightboxImage.year} Edition
                    </span>
                    <h3 className="font-display font-black text-lg sm:text-2xl text-white">
                      {lightboxImage.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Join The Next Chapter Banner */}
          <div
            data-reveal="up"
            className="mt-20 rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>December 23–26, 2026</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Make History at LUIMUN 2026
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Join 500+ aspiring leaders for our 10th-anniversary celebration at Leading University, Sylhet.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
              >
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE_CONFIG.socials.eventPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                <span>Official Event Page</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </main>

      {/* Institutional Footer */}
      <Footer onOpenUpcoming={handleOpenUpcoming} />

      {/* Upcoming Modal */}
      <UpcomingModal
        isOpen={isUpcomingModalOpen}
        onClose={handleCloseUpcoming}
        title="Upcoming…"
        subtitle="This feature will be available soon."
      />
    </div>
  );
}

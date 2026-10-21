"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  MapPin,
  History,
  Maximize2,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { CONFERENCE_EDITIONS } from "@/constants/conferenceEditions";

export default function AboutUsPage() {
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Bar Pill & Title */}
          <div data-reveal="down" className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 shadow-2xs">
              <Globe2 className="h-3.5 w-3.5 text-neutral-600" />
              <span>About Us • LUMUNA</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              A Decade of Diplomacy.{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                A Legacy of Leadership.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              Diplomacy rarely begins in a conference hall. It begins when someone
              chooses to listen before they speak, understand before they
              disagree, and collaborate beyond their differences.
            </p>
          </div>

          {/* Delegation Showcase Image */}
          <div
            data-reveal="up"
            data-reveal-delay="1"
            className="relative mt-8 sm:mt-10 w-full overflow-hidden rounded-3xl border border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,0.10)] bg-neutral-100"
          >
            <div className="relative aspect-[16/10] sm:aspect-[21/10] w-full">
              <Image
                src="/images/about-us-delegation.jpg"
                alt="Leading University Model United Nations Association (LUMUNA) Delegation"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
            </div>
            {/* Institutional Caption Bar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-6 py-3.5 bg-neutral-950 text-white text-xs sm:text-sm border-t border-neutral-800">
              <div className="flex items-center gap-2 font-semibold text-neutral-200">
                <ShieldCheck className="h-4 w-4 text-neutral-400 shrink-0" />
                <span>Leading University Model United Nations Association (LUMUNA)</span>
              </div>
              <span className="text-neutral-400 mt-1 sm:mt-0 font-medium">
                Kamal Bazar, Sylhet, Bangladesh • Estd. 2016
              </span>
            </div>
          </div>

          {/* Section 1: About LUMUNA */}
          <section data-reveal="up" className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  ESTABLISHED 2016
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  About LUMUNA
                </h2>
                <div className="mt-6 flex flex-col gap-3">
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                    <div className="font-display text-2xl font-black text-neutral-900">10 Years</div>
                    <div className="text-xs font-semibold text-neutral-600 mt-0.5">Empowering Youth Diplomats</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200">
                    <div className="font-display text-2xl font-black text-neutral-900">530+</div>
                    <div className="text-xs font-semibold text-neutral-600 mt-0.5">Delegates Per Recent Edition</div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-8 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                {/* Where It All Began */}
                <div className="space-y-2.5">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    Where It All Began
                  </h3>
                  <p>
                    In 2016, a small group of students at Leading University set out to build something the Northeast had not yet seen: a space where young minds could practice diplomacy, not just study it. That first step, the Leading University Intra Model United Nations Conference 2016, became the seed from which everything LUMUNA stands for today has grown.
                  </p>
                </div>

                {/* A Region Finds Its Voice */}
                <div className="space-y-2.5 pt-6 sm:pt-8 border-t border-neutral-200">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    A Region Finds Its Voice
                  </h3>
                  <p>
                    A year later, in 2017, that seed became a movement. LUMUNA hosted Sylhet’s first-ever national Model United Nations conference, giving the region a seat at a table it had never occupied before. Rooted in the pioneering spirit of the Northeast, LUMUNA has spent the years since turning policy simulation and cross-cultural dialogue into a lasting culture, one built on accountability, practical leadership, and the belief that where you’re from should never limit how far your ideas can travel.
                  </p>
                </div>

                {/* The Values That Carry Us Forward */}
                <div className="space-y-2.5 pt-6 sm:pt-8 border-t border-neutral-200">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    The Values That Carry Us Forward
                  </h3>
                  <p>
                    LUMUNA was never just about conferences. It is about the leaders those conferences quietly shape, students who learn to argue with discipline, listen with intent, and act with accountability. That growth hasn’t stayed within our own walls: LUMUNA members have gone on to bring home awards from conferences across the country, and many now sit as Executive Board members leading committee rooms of their own. From a world in transition to the choices that will shape it, LUMUNA trains its members to meet real challenges with ethical judgment and global awareness, because the skills that matter most in a committee room are the same ones that matter everywhere else.
                  </p>
                </div>

                {/* LUIMUN: Ten Years, Five Editions, Our Biggest Leap Yet */}
                <div className="space-y-2.5 pt-6 sm:pt-8 border-t border-neutral-200">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-950 tracking-tight">
                    LUIMUN: Ten Years, Five Editions, Our Biggest Leap Yet
                  </h3>
                  <p>
                    This December, LUIMUN returns for its 5th international edition, marking ten full years since LUMUNA first opened its doors. For this edition of LUIMUN, the conference will run across four full days, a milestone that lets us go deeper into debate, negotiation, and committee work than ever before. LUIMUN 2026 is shaping up to be one of the most academically rigorous conferences LUMUNA has ever hosted, and every delegate who walks through our doors this year is in for an experience unlike any LUIMUN before it.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: About LUIMUN 2026 */}
          <section data-reveal="up" className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-4 lg:sticky lg:top-28">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                  FLAGSHIP CONFERENCE
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight">
                  About LUIMUN 2026
                </h2>
                <h3 className="mt-3 text-base sm:text-lg font-semibold text-neutral-700">
                  Five International Editions. Ten Years of Legacy.
                </h3>

                <div className="mt-6 flex flex-col gap-2.5 text-xs sm:text-sm font-semibold text-neutral-800">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                    <Calendar className="h-4 w-4 text-neutral-600 shrink-0" />
                    <span>December 23–26, 2026 (4 Days)</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-neutral-100 border border-neutral-200">
                    <MapPin className="h-4 w-4 text-neutral-600 shrink-0" />
                    <span>Leading University, Sylhet</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-6 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                <p>
                  Celebrating ten years of LUMUNA, the{" "}
                  <strong className="font-bold text-neutral-950">
                    Leading University International Model United Nations 2026 (LUIMUN 2026)
                  </strong>{" "}
                  marks our fifth international edition and our most ambitious chapter yet.
                </p>
                <p>
                  Returning to Sylhet from{" "}
                  <strong className="font-bold text-neutral-950">December 23–26, 2026</strong>,
                  LUIMUN will bring together aspiring diplomats, researchers, debaters,
                  and changemakers for four days of dialogue, negotiation, and discovery.
                </p>

                {/* Theme Box */}
                <div className="rounded-2xl border border-neutral-300 bg-neutral-50 p-6 sm:p-7 shadow-xs">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-600">
                    CONFERENCE THEME
                  </span>
                  <h4 className="mt-2 font-display text-lg sm:text-xl font-bold text-neutral-950 leading-snug">
                    “A World in Transition: Reimagining Global Cooperation, Advancing Human Progress, and Shaping Our Shared Future”
                  </h4>
                  <p className="mt-3 text-sm sm:text-base text-neutral-700 leading-relaxed">
                    Delegates will confront pressing global challenges, navigate
                    competing national interests, and explore pathways toward a more
                    inclusive and cooperative international order.
                  </p>
                </div>

                <p>
                  Through dynamic committee sessions, crisis simulations, and
                  meaningful engagement, LUIMUN 2026 aims to challenge assumptions,
                  sharpen diplomatic skills, and transform disagreement into
                  understanding.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Decade Archive / Photographic Journey */}
          <section data-reveal="up" className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
            {/* Header Bar Pill & Title */}
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 shadow-2xs">
                <History className="h-3.5 w-3.5 text-neutral-600" />
                <span>Decade Archive • 2016–2026</span>
              </div>

              <h2 className="mt-5 font-display text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-neutral-900 leading-[1.15]">
                A Decade of{" "}
                <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                  Diplomacy in Frames.
                </span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl font-normal">
                From the humble beginnings of the 2016 Intra-MUN to the grand international assembly of LUIMUN 2025,
                explore our complete photographic archive across ten years of youth leadership and diplomatic tradition.
              </p>
            </div>

            {/* Impact Stats */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">9 Editions</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">2016 to 2025</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">3,500+</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Delegates Trained</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">4 International</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Editions Hosted</div>
              </div>
              <div className="p-4 sm:p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
                <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">LUIMUN 2026</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">10th Anniversary</div>
              </div>
            </div>

            {/* Year Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
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
            <div className="mt-10 space-y-12 sm:space-y-16">
              {filteredEditions.map((edition) => (
                <div
                  key={edition.year}
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
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-neutral-900">
                        {edition.editionName}
                      </h3>
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
          </section>

          {/* Section 4: Our Legacy, Our Future */}
          <section data-reveal="up" className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
            <div className="rounded-3xl bg-neutral-950 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
                  A DECADE OF EXCELLENCE
                </span>
                <h3 className="mt-3 font-display text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                  Our Legacy, Our Future
                </h3>

                <p className="mt-6 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  For the past decade, LUMUNA has brought young minds together through
                  the spirit of diplomacy. With over 530 delegates attending each of
                  our last two editions, LUIMUN continues to expand its reach and
                  strengthen its place in Bangladesh&apos;s Model United Nations circuit.
                </p>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                  As we enter our next decade, our purpose remains unchanged: to create
                  spaces where ideas are challenged, perspectives evolve, and future
                  leaders find their voice.
                </p>

                {/* Legacy Punchline */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <div className="font-display text-lg sm:text-2xl font-black text-white tracking-tight">
                    Ten years of diplomacy. Five international conferences. One Sylhet.
                  </div>
                  <p className="mt-2 text-sm sm:text-base font-semibold text-neutral-300">
                    This December, be part of the next chapter of LUMUNA.
                  </p>
                </div>

                {/* CTAs */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/#opportunities"
                    className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold bg-white text-black hover:bg-neutral-200 border border-white shadow-xs transition-all duration-200"
                  >
                    <span>Register for LUIMUN 2026</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/25 transition-all duration-200"
                  >
                    <span>Return to Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Institutional Footer */}
      <Footer onOpenUpcoming={handleOpenUpcoming} />

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

      {/* Upcoming Modal */}
      <UpcomingModal
        isOpen={isUpcomingModalOpen}
        onClose={handleCloseUpcoming}
        title="Become a Partner"
        subtitle="Become a partner of a great diplomatic conference."
      />
    </div>
  );
}


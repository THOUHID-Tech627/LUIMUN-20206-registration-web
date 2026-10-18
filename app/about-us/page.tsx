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
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";

export default function AboutUsPage() {
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

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
              <div className="lg:col-span-4">
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

              <div className="lg:col-span-8 space-y-5 text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                <p>
                  Founded in 2016, the{" "}
                  <strong className="font-bold text-neutral-950">
                    Leading University Model United Nations Association (LUMUNA)
                  </strong>{" "}
                  has spent a decade fostering youth diplomacy, critical thinking,
                  and leadership in Northeast Bangladesh. Through debate, negotiation,
                  and multilateral engagement, LUMUNA has created a platform where
                  young minds challenge perspectives, develop solutions, and prepare
                  to shape the world around them.
                </p>
                <p>
                  Rooted in Sylhet, our journey has been defined by ideas exchanged,
                  resolutions negotiated, and connections built beyond committee
                  rooms. What began as a vision has grown into a lasting legacy of
                  empowering young leaders.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2: About LUIMUN 2026 */}
          <section data-reveal="up" className="mt-16 sm:mt-24 pt-12 border-t border-neutral-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-4">
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


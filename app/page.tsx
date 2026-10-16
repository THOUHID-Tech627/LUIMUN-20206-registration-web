"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ConferenceInfo } from "@/components/ConferenceInfo";
import { AboutSection } from "@/components/AboutSection";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";

export default function Home() {
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-black selection:text-white">
      {/* 1. Sticky Frosted Navbar */}
      <Navbar onOpenUpcoming={handleOpenUpcoming} />

      <main className="flex-grow">
        {/* 2. Hero Section with Background & Countdown */}
        <Hero onOpenUpcoming={handleOpenUpcoming} />

        {/* 3. Conference Information Bar */}
        <ConferenceInfo />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Participation Opportunities */}
        <OpportunitiesSection onOpenUpcoming={handleOpenUpcoming} />

        {/* 6. Final High-Impact CTA */}
        <CTASection onOpenUpcoming={handleOpenUpcoming} />
      </main>

      {/* 7. Institutional Footer */}
      <Footer onOpenUpcoming={handleOpenUpcoming} />

      {/* Reusable Upcoming Modal for all registration/application CTAs */}
      <UpcomingModal
        isOpen={isUpcomingModalOpen}
        onClose={handleCloseUpcoming}
        title="Upcoming…"
        subtitle="This feature will be available soon."
      />
    </div>
  );
}

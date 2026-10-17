"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { CommitteesSection } from "@/components/CommitteesSection";
import { OpportunitiesSection } from "@/components/OpportunitiesSection";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";

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
      <ScrollReveal />
      {/* 1. Sticky Frosted Navbar */}
      <Navbar onOpenUpcoming={handleOpenUpcoming} />

      <main className="flex-grow">
        {/* 2. Hero Section with Background & Countdown */}
        <Hero onOpenUpcoming={handleOpenUpcoming} />

        {/* About Section */}
        <AboutSection />

        {/* Committees Section */}
        <CommitteesSection onOpenUpcoming={handleOpenUpcoming} />

        {/* Participation Opportunities */}
        <OpportunitiesSection onOpenUpcoming={handleOpenUpcoming} />

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

"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  ArrowRight,
  Mail,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface FAQItem {
  id: string;
  category: "registration" | "academics" | "logistics" | "international";
  categoryLabel: string;
  question: string;
  answer: React.ReactNode;
  searchableAnswer: string;
}

const FAQ_DATA: FAQItem[] = [
  // 1. Registration & Eligibility
  {
    id: "eligibility",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "Who is eligible to participate in LUIMUN 2026?",
    answer:
      "LUIMUN 2026 welcomes eligible students interested in diplomacy, international relations, global affairs, and Model United Nations. Please refer to the official registration guidelines for specific eligibility requirements.",
    searchableAnswer:
      "LUIMUN 2026 welcomes eligible students interested in diplomacy, international relations, global affairs, and Model United Nations. Please refer to the official registration guidelines for specific eligibility requirements.",
  },
  {
    id: "how-to-register",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "How do I register, and what registration tracks are available?",
    answer:
      "Delegates must complete the official registration form available through the LUIMUN 2026 website. Please review the available registration options, provide accurate information, and follow the instructions provided during registration.",
    searchableAnswer:
      "Delegates must complete the official registration form available through the LUIMUN 2026 website. Please review the available registration options, provide accurate information, and follow the instructions provided during registration.",
  },
  {
    id: "independent-delegate",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "Can I participate independently without a delegation or school club?",
    answer:
      "Yes. Delegates may register independently without being affiliated with a school club or institutional delegation, subject to the official registration requirements.",
    searchableAnswer:
      "Yes. Delegates may register independently without being affiliated with a school club or institutional delegation, subject to the official registration requirements.",
  },
  {
    id: "registration-package",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "What does the delegate registration package include?",
    answer:
      "The registration package includes access to all four conference days, a personalized delegate kit featuring an official placard, folder, notepad, pen, lapel pin, and other official conference materials. It also includes access to committee sessions, lunches and high-tea snacks throughout the conference, admission to the Cultural Night, the Gala Dinner, and an official Certificate of Participation.",
    searchableAnswer:
      "The registration package includes access to all four conference days, a personalized delegate kit featuring an official placard, folder, notepad, pen, lapel pin, and other official conference materials. It also includes access to committee sessions, lunches and high-tea snacks throughout the conference, admission to the Cultural Night, the Gala Dinner, and an official Certificate of Participation.",
  },
  {
    id: "allocation-policy",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "How and when are country and committee matrix allocations made?",
    answer:
      "Country and committee allocations are assigned by the Delegate Affairs Team in accordance with the conference's assignment procedures and availability.",
    searchableAnswer:
      "Country and committee allocations are assigned by the Delegate Affairs Team in accordance with the conference's assignment procedures and availability.",
  },

  // 2. Committees & Academics
  {
    id: "study-guides-release",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "When will the substantive Committee Study Guides be available?",
    answer:
      "Comprehensive background study guides for all eight standard committees and two surprise committees will be prepared by the Executive Board and made available for download directly from our Resources page.",
    searchableAnswer:
      "Comprehensive background study guides for all eight standard committees and two surprise committees will be prepared by the Executive Board and made available for download directly from our Resources page.",
  },
  {
    id: "position-papers",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "Are Position Papers mandatory, and how are they submitted?",
    answer:
      "Position Papers are mandatory for delegates seeking consideration for conference awards, subject to the guidelines and requirements established by each committee's Executive Board. Papers must be submitted through the delegate portal within the designated deadline and must not exceed two pages per committee.",
    searchableAnswer:
      "Position Papers are mandatory for delegates seeking consideration for conference awards, subject to the guidelines and requirements established by each committee's Executive Board. Papers must be submitted through the delegate portal within the designated deadline and must not exceed two pages per committee.",
  },
  {
    id: "first-time-delegates",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "Is LUIMUN suitable for first-time or novice delegates?",
    answer:
      "Yes! LUIMUN 2026 welcomes both experienced and first-time delegates. Delegate manuals, Rules of Procedure (RoP) guides, and committee study guides will help participants understand parliamentary procedures, prepare for debates, and engage confidently in committee sessions.",
    searchableAnswer:
      "Yes! LUIMUN 2026 welcomes both experienced and first-time delegates. Delegate manuals, Rules of Procedure (RoP) guides, and committee study guides will help participants understand parliamentary procedures, prepare for debates, and engage confidently in committee sessions.",
  },
  {
    id: "conference-awards",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "What awards and recognitions are presented at LUIMUN 2026?",
    answer: (
      <div className="space-y-3">
        <p>
          LUIMUN 2026 recognizes outstanding diplomatic performance through several awards.
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-neutral-700">
          <li>
            <strong className="font-bold text-neutral-900">Best Delegate:</strong> Crest and certificate.
          </li>
          <li>
            <strong className="font-bold text-neutral-900">Outstanding Delegate:</strong> Crest.
          </li>
          <li>
            <strong className="font-bold text-neutral-900">Special Mention:</strong> Certificate.
          </li>
          <li>
            <strong className="font-bold text-neutral-900">Best Delegation Award:</strong> Recognizes the institution demonstrating the highest overall diplomatic excellence.
          </li>
          <li>
            <strong className="font-bold text-neutral-900">Biggest Delegation Award:</strong> Recognizes the institution participating with the largest number of delegates.
          </li>
        </ul>
        <p className="pt-1">
          The Best Delegation Award recognizes overall delegation performance, while the Biggest Delegation Award recognizes delegation size.
        </p>
      </div>
    ),
    searchableAnswer:
      "LUIMUN 2026 recognizes outstanding diplomatic performance through several awards. Best Delegate: Crest and certificate. Outstanding Delegate: Crest. Special Mention: Certificate. Best Delegation Award: Recognizes the institution demonstrating the highest overall diplomatic excellence. Biggest Delegation Award: Recognizes the institution participating with the largest number of delegates. The Best Delegation Award recognizes overall delegation performance, while the Biggest Delegation Award recognizes delegation size.",
  },
  {
    id: "rop-rules",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "What Rules of Procedure (RoP) does LUMUNA follow?",
    answer:
      "Delegates are expected to follow the Rules of Procedure established for their respective committees. Committee-specific procedural guidelines and instructions will be communicated by the Executive Board.",
    searchableAnswer:
      "Delegates are expected to follow the Rules of Procedure established for their respective committees. Committee-specific procedural guidelines and instructions will be communicated by the Executive Board.",
  },

  // 3. Logistics & Sylhet
  {
    id: "venue-location",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "Where is the conference held, and how do I get to the venue?",
    answer: (
      <div className="space-y-2.5">
        <p>
          LUIMUN 2026 will be hosted at the permanent campus of Leading University, located in Kamal Bazar, Sylhet 3112, Bangladesh.
        </p>
        <p>
          Sylhet is accessible through Osmani International Airport (ZYL), intercity trains, and coach services from major cities. Transportation within Sylhet city will be provided between delegate accommodations and designated conference locations, as arranged by the organizers.
        </p>
      </div>
    ),
    searchableAnswer:
      "LUIMUN 2026 will be hosted at the permanent campus of Leading University, located in Kamal Bazar, Sylhet 3112, Bangladesh. Sylhet is accessible through Osmani International Airport (ZYL), intercity trains, and coach services from major cities. Transportation within Sylhet city will be provided between delegate accommodations and designated conference locations, as arranged by the organizers.",
  },
  {
    id: "dress-code",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "What is the official dress code for the conference?",
    answer: (
      <div className="space-y-2.5">
        <p>
          Delegates are expected to wear Western Business Formal attire, including suits, blazers, formal shirts, and ties, or appropriate formal national diplomatic attire during committee sessions and plenary meetings from Day 1 through Day 4.
        </p>
        <p>
          On Friday, delegates are expected to wear traditional attire. Dress code details for the Cultural Night will be announced separately once its schedule is confirmed.
        </p>
      </div>
    ),
    searchableAnswer:
      "Delegates are expected to wear Western Business Formal attire, including suits, blazers, formal shirts, and ties, or appropriate formal national diplomatic attire during committee sessions and plenary meetings from Day 1 through Day 4. On Friday, delegates are expected to wear traditional attire. Dress code details for the Cultural Night will be announced separately once its schedule is confirmed.",
  },
  {
    id: "accommodation",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "Is accommodation provided for outstation delegates?",
    answer:
      "Accommodation arrangements and relevant information for outstation delegates will be communicated through the official conference channels. Delegates should consult the organizers for confirmed accommodation options, availability, and applicable costs.",
    searchableAnswer:
      "Accommodation arrangements and relevant information for outstation delegates will be communicated through the official conference channels. Delegates should consult the organizers for confirmed accommodation options, availability, and applicable costs.",
  },

  // 4. International Delegates
  {
    id: "visa-support",
    category: "international",
    categoryLabel: "International Delegates",
    question: "Can LUMUNA provide an official Visa Invitation Letter for international travel?",
    answer:
      "Yes. Upon completion of registration and verification of payment, the Organizing Committee will issue an official Visa Support and Invitation Letter to international delegates who require documentation for their visa applications.",
    searchableAnswer:
      "Yes. Upon completion of registration and verification of payment, the Organizing Committee will issue an official Visa Support and Invitation Letter to international delegates who require documentation for their visa applications.",
  },
  {
    id: "international-support",
    category: "international",
    categoryLabel: "International Delegates",
    question: "What dedicated support is available for international delegations?",
    answer:
      "LUMUNA aims to facilitate international delegates' participation through relevant registration guidance and conference-related assistance. International delegations should contact the organizing team for information about visa documentation, travel coordination, accommodation arrangements, and other logistical requirements.",
    searchableAnswer:
      "LUMUNA aims to facilitate international delegates' participation through relevant registration guidance and conference-related assistance. International delegations should contact the organizing team for information about visa documentation, travel coordination, accommodation arrangements, and other logistical requirements.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedId, setExpandedId] = useState<string | null>("eligibility");
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredFAQs = FAQ_DATA.filter((item) => {
    const matchesCategory =
      activeCategory === "all" || item.category === activeCategory;
    const searchTarget =
      `${item.question} ${item.categoryLabel} ${item.searchableAnswer}`.toLowerCase();
    return matchesCategory && searchTarget.includes(searchQuery.toLowerCase());
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
              <HelpCircle className="h-3.5 w-3.5 text-neutral-600" />
              <span>Frequently Asked Questions • LUMUNA 2026</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              Got Questions?{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                We’ve Got Answers.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              Find everything you need to know about delegate registration, conference logistics,
              Rules of Procedure, and accommodations for LUIMUN 2026.
            </p>
          </div>

          {/* Search & Filter Section */}
          <div data-reveal="up" className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: "all", label: "All Questions" },
                { id: "registration", label: "Registration & Eligibility" },
                { id: "academics", label: "Committees & Academics" },
                { id: "logistics", label: "Logistics & Sylhet" },
                { id: "international", label: "International Delegates" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeCategory === tab.id
                      ? "bg-black text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Keyword Search */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search questions or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:bg-white transition-all font-normal"
              />
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div data-reveal="up" className="mt-10 space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-neutral-50 border border-neutral-200">
                <HelpCircle className="h-10 w-10 text-neutral-400 mx-auto mb-3" />
                <h3 className="font-display font-black text-xl text-neutral-800">
                  No matching questions found
                </h3>
                <p className="text-sm text-neutral-600 mt-1 max-w-sm mx-auto">
                  Try searching for another keyword or reach out directly to our organizing team.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 px-4 py-2 rounded-full text-xs font-bold bg-neutral-900 text-white hover:bg-black"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFAQs.map((faq) => {
                const isOpen = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                      isOpen
                        ? "bg-white border-neutral-900 shadow-md ring-1 ring-neutral-900/10"
                        : "bg-neutral-50/70 border-neutral-200 hover:bg-white hover:border-neutral-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    >
                      <div className="space-y-1">
                        <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest text-neutral-500">
                          {faq.categoryLabel}
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-neutral-900">
                          {faq.question}
                        </h3>
                      </div>

                      <div
                        className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center border transition-transform duration-200 ${
                          isOpen
                            ? "bg-neutral-900 text-white border-neutral-900 rotate-180"
                            : "bg-white text-neutral-600 border-neutral-200"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 sm:px-6 pb-6 pt-2 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal border-t border-neutral-100 animate-in fade-in duration-200">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Still Have Questions CTA */}
          <div
            data-reveal="up"
            className="mt-20 rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-300">
                <Mail className="h-3.5 w-3.5" />
                <span>Delegate Help Desk</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Still Have Unanswered Questions?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Our Delegate Affairs Team is ready to assist you with registration,
                institutional quotas, and travel inquiries.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.socials.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
              >
                <span>Email {SITE_CONFIG.socials.email}</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                Delegate Resources
              </Link>
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
        title="Become a Partner"
        subtitle="Become a partner of a great diplomatic conference."
      />
    </div>
  );
}

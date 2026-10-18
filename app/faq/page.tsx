"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Mail,
  ShieldCheck,
  Globe2,
  Calendar,
  MapPin,
  FileText,
  Users,
  Award,
  CheckCircle2,
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
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  // Registration & Eligibility
  {
    id: "eligibility",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "Who is eligible to participate in LUIMUN 2026?",
    answer:
      "LUIMUN 2026 is open to high school, college, and university students (undergraduate and postgraduate) worldwide. We welcome both individual delegates and institutional delegations, as well as delegates from previous MUN circuits and first-time participants.",
  },
  {
    id: "how-to-register",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "How do I register, and what registration tracks are available?",
    answer:
      "Registration is completed online through our official forms. You can register as an Individual Delegate, Head of Delegation (representing an institutional delegation of multiple students), or an International Delegate requiring special visa and accommodation assistance.",
  },
  {
    id: "registration-fee",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "What does the delegate registration package include?",
    answer:
      "The registration fee covers complete access to all 4 conference days, personalized delegate kit (official placard, folder, notepad, pen, lapel pin), committee sessions, lunches and high tea snacks across all conference days, admission to the Cultural Night, the Grand Diplomatic Gala & Concert, and an official Certificate of Participation.",
  },
  {
    id: "allocation-policy",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "How and when are country and committee matrix allocations made?",
    answer:
      "Country and committee allocations are assigned on a rolling basis by the Secretariat upon verification of your registration form and past MUN experience. Early registrants have a higher likelihood of securing their top 3 country preferences.",
  },
  {
    id: "independent-delegate",
    category: "registration",
    categoryLabel: "Registration & Eligibility",
    question: "Can I participate independently without a delegation or school club?",
    answer:
      "Absolutely. A substantial portion of our delegates participate as independent delegates. You do not need an official university club or advisor endorsement to apply and compete for awards.",
  },

  // Academics & Committees
  {
    id: "rop-rules",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "What Rules of Procedure (RoP) does LUMUNA follow?",
    answer:
      "LUIMUN 2026 adheres to the standardized UNA-USA Rules of Procedure, featuring a General Speakers List (GSL), Moderated Caucuses, and Unmoderated Caucuses. The International Court of Justice (ICJ) and International Press (IP) follow specialized procedural charters detailed in the Resources section.",
  },
  {
    id: "study-guides-release",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "When will the substantive Committee Study Guides be available?",
    answer:
      "Comprehensive background study guides authored by the Executive Board for all 8 standard committees and the 2 surprise committees will be published and downloadable directly from our Resources page several weeks prior to the conference.",
  },
  {
    id: "position-papers",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "Are Position Papers mandatory, and how are they submitted?",
    answer:
      "Submission of a formal Position Paper (maximum 2 pages per committee) is mandatory for delegates who wish to be considered for conference awards (Best Delegate, Outstanding Delegate, and Best Position Paper). Position papers must be submitted through the delegate portal before the designated deadline.",
  },
  {
    id: "first-time-delegates",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "Is LUIMUN suitable for first-time or novice delegates?",
    answer:
      "Yes! We take pride in mentoring newcomers. LUMUNA provides delegate preparation toolkits, RoP cheat sheets, and beginner-friendly committee environments. Our Executive Board chairs are dedicated to guiding delegates through parliamentary rules and speechmaking.",
  },
  {
    id: "conference-awards",
    category: "academics",
    categoryLabel: "Committees & Academics",
    question: "What awards and recognitions are presented at LUIMUN 2026?",
    answer:
      "Each simulation committee awards Best Delegate (Gavel & Certificate), Outstanding Delegate, Special Mention, and Best Position Paper. In addition, the Best Delegation Award is conferred during the Closing Gala to the institution demonstrating the highest aggregate diplomatic excellence.",
  },

  // Logistics & Sylhet
  {
    id: "venue-location",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "Where is the conference held, and how do I get to the venue?",
    answer:
      "The primary sessions are hosted at the permanent campus of Leading University located at Kamal Bazar, Sylhet 3112, Bangladesh. Sylhet is easily accessible via direct domestic and international flights to Osmani International Airport (ZYL), as well as intercity trains and luxury coach services from Dhaka and Chittagong.",
  },
  {
    id: "accommodation",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "Is accommodation provided for outstation delegates?",
    answer:
      "LUMUNA partners with vetted hotels and guest houses in Sylhet to offer subsidized group rates for delegates traveling from outside Sylhet. Information regarding partner hotel packages and shuttle transport to the campus will be shared with confirmed delegates.",
  },
  {
    id: "dress-code",
    category: "logistics",
    categoryLabel: "Logistics & Sylhet",
    question: "What is the official dress code for the conference?",
    answer:
      "For Day 1 through Day 4 committee sessions and plenary meetings, the dress code is strictly Western Business Formal (suits, blazers, formal shirts, ties, and modest business attire) or formal national diplomatic attire. For the Cultural Night, delegates are encouraged to wear vibrant traditional and cultural dress representing their heritage.",
  },

  // International Delegates
  {
    id: "visa-support",
    category: "international",
    categoryLabel: "International Delegates",
    question: "Can LUMUNA provide an official Visa Invitation Letter for international travel?",
    answer:
      "Yes. Once an international delegate completes registration and payment verification, our International Relations Directorate issues an official, stamped Visa Support & Invitation Letter and coordinates with diplomatic missions where applicable.",
  },
  {
    id: "international-support",
    category: "international",
    categoryLabel: "International Delegates",
    question: "What dedicated support is available for international delegations?",
    answer:
      "International delegates receive dedicated liaison officers who assist with airport pickup at Osmani International Airport (ZYL), local SIM cards, currency exchange guidance, hotel check-in, and curated heritage tours around the scenic tea gardens and lakes of Sylhet.",
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
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
                { id: "registration", label: "Registration & Fees" },
                { id: "academics", label: "Committees & RoP" },
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
          <div className="mt-10 space-y-4">
            {filteredFAQs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-neutral-50 border border-neutral-200">
                <HelpCircle className="h-10 w-10 text-neutral-400 mx-auto mb-3" />
                <h3 className="font-display font-black text-xl text-neutral-800">
                  No matching questions found
                </h3>
                <p className="text-sm text-neutral-600 mt-1 max-w-sm mx-auto">
                  Try searching for another keyword or reach out directly to our Secretariat.
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
                    data-reveal="up"
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
                <span>Secretariat Help Desk</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Still Have Unanswered Questions?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Our Delegate Affairs and Secretariat Directorate is on standby to assist you with registration,
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
        title="Upcoming…"
        subtitle="This feature will be available soon."
      />
    </div>
  );
}


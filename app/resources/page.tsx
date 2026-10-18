"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Download,
  ArrowRight,
  FileText,
  Mail,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface CommitteeGuide {
  code: string;
  name: string;
  logo: string;
  agenda: string;
  status: string;
  isSurprise?: boolean;
}

const COMMITTEE_STUDY_GUIDES: CommitteeGuide[] = [
  {
    code: "UNSC",
    name: "United Nations Security Council",
    logo: "/images/committees/unsc.svg",
    agenda:
      "Mitigating Sovereignty Violations & Maritime Escalation in Disputed Trade Corridors",
    status: "Study Guide Coming Soon",
  },
  {
    code: "ICJ",
    name: "International Court of Justice",
    logo: "/images/committees/icj.png",
    agenda:
      "Legality of Unilateral Coercive Measures and State Jurisdictional Immunities",
    status: "Study Guide Coming Soon",
  },
  {
    code: "IP",
    name: "International Press",
    logo: "/images/committees/ip.svg",
    agenda:
      "Ethical Journalism, Combating State Disinformation, and Digital Conflict Reporting",
    status: "Study Guide Coming Soon",
  },
  {
    code: "UNHRC",
    name: "United Nations Human Rights Council",
    logo: "/images/committees/unhrc.png",
    agenda:
      "Safeguarding Fundamental Freedoms in the Era of Autonomous Warfare & Digital Surveillance",
    status: "Study Guide Coming Soon",
  },
  {
    code: "ILO",
    name: "International Labour Organization",
    logo: "/images/committees/ilo.svg",
    agenda:
      "Regulating Algorithmic Management & Labor Rights in the Transnational Platform Economy",
    status: "Study Guide Coming Soon",
  },
  {
    code: "AL",
    name: "League of Arab States",
    logo: "/images/committees/al.svg",
    agenda:
      "Regional Frameworks for Cross-Border Aquifer Governance and Arid Zone Food Security",
    status: "Study Guide Coming Soon",
  },
  {
    code: "UNDP",
    name: "United Nations Development Programme",
    logo: "/images/committees/undp.png",
    agenda:
      "Structuring Loss & Damage Climate Financing Mechanisms for Vulnerable Island Nations",
    status: "Study Guide Coming Soon",
  },
  {
    code: "WTO",
    name: "World Trade Organization",
    logo: "/images/committees/wto.png",
    agenda:
      "Restoring the Dispute Settlement Mechanism Amid Strategic Geo-Economic Decoupling",
    status: "Study Guide Coming Soon",
  },
  {
    code: "SURPRISE 01",
    name: "Surprise Committee 01",
    logo: "/images/committees/surprise.svg",
    agenda:
      "Classified Diplomatic Crisis Simulation — Agenda to be revealed at Plenary Session",
    status: "Classified",
    isSurprise: true,
  },
  {
    code: "SURPRISE 02",
    name: "Surprise Committee 02",
    logo: "/images/committees/surprise.svg",
    agenda:
      "Classified Diplomatic Crisis Simulation — Agenda to be revealed at Plenary Session",
    status: "Classified",
    isSurprise: true,
  },
];

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);
  const [downloadModalDoc, setDownloadModalDoc] = useState<string>("");

  const handleOpenUpcoming = (docTitle?: string) => {
    setDownloadModalDoc(docTitle || "");
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
    setDownloadModalDoc("");
  };

  const filteredGuides = COMMITTEE_STUDY_GUIDES.filter((comm) => {
    const q = searchQuery.toLowerCase();
    return (
      comm.code.toLowerCase().includes(q) ||
      comm.name.toLowerCase().includes(q)
    );
  });

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-black selection:text-white">
      <ScrollReveal />

      {/* Navigation */}
      <Navbar onOpenUpcoming={() => handleOpenUpcoming()} />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Bar Pill & Title */}
          <div data-reveal="down" className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 shadow-2xs">
              <BookOpen className="h-3.5 w-3.5 text-neutral-600" />
              <span>Study Guides • LUMUNA 2026</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              Committee{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                Study Guides.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              Official substantive background guides prepared by the Executive Board for all 10 simulation committees.
            </p>
          </div>

          {/* Search Bar */}
          <div data-reveal="up" className="mt-10 max-w-md">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search committee..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:bg-white transition-all font-normal"
              />
            </div>
          </div>

          {/* Committee Study Guides Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredGuides.map((comm) => (
              <div
                key={comm.code}
                data-reveal="up"
                className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  comm.isSurprise
                    ? "border-neutral-300 bg-neutral-50/50"
                    : "border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
                }`}
              >
                <div>
                  {/* Top Bar: Logo & Code */}
                  <div className="flex items-center justify-between gap-4 pb-4 border-b border-neutral-100">
                    <div className="relative h-14 w-14 flex-shrink-0 flex items-center justify-center">
                      <Image
                        src={comm.logo}
                        alt={`${comm.name} Logo`}
                        fill
                        className="object-contain p-1"
                        sizes="56px"
                      />
                    </div>
                    <div className="text-right">
                      <span className="font-display font-black text-lg sm:text-xl text-neutral-900 block leading-tight">
                        {comm.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                        {comm.isSurprise ? "Special Session" : "Official Committee"}
                      </span>
                    </div>
                  </div>

                  {/* Committee Name */}
                  <h3 className="mt-4 font-display font-black text-base sm:text-lg text-neutral-900 leading-snug">
                    {comm.name}
                  </h3>
                </div>

                {/* Bottom Action Bar */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-500">
                    {comm.status}
                  </span>
                  <button
                    onClick={() => handleOpenUpcoming(`${comm.code} Study Guide`)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-neutral-900 text-white hover:bg-black transition-colors cursor-pointer shadow-2xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Inquiry Banner */}
          <div
            data-reveal="up"
            className="mt-16 rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-300">
                <BookOpen className="h-3.5 w-3.5" />
                <span>Academic Board</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Questions Regarding Your Committee Agenda?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Reach out to the LUMUNA Academic Board for substantive clarifications or delegate support.
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
                href="/faq"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Institutional Footer */}
      <Footer onOpenUpcoming={() => handleOpenUpcoming()} />

      {/* Upcoming / Download Modal */}
      <UpcomingModal
        isOpen={isUpcomingModalOpen}
        onClose={handleCloseUpcoming}
        title={downloadModalDoc ? `Download: ${downloadModalDoc}` : "Upcoming…"}
        subtitle="This committee study guide will be officially released for registered delegates soon. Please check back shortly."
      />
    </div>
  );
}

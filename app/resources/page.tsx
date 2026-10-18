"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FileText,
  Download,
  BookOpen,
  Search,
  Scale,
  Award,
  HelpCircle,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface ResourceDoc {
  id: string;
  title: string;
  category: "rop" | "guides" | "templates" | "toolkit";
  categoryLabel: string;
  description: string;
  format: "PDF" | "DOCX" | "HANDBOOK";
  fileSize: string;
  updated: string;
  featured?: boolean;
}

const RESOURCES_DATA: ResourceDoc[] = [
  {
    id: "rop-official",
    title: "Official Rules of Procedure (RoP)",
    category: "rop",
    categoryLabel: "Rules of Procedure",
    description:
      "Comprehensive parliamentary protocol, debate structure, caucus flow, voting mechanics, and committee decorum for LUMUNA 2026.",
    format: "PDF",
    fileSize: "2.4 MB",
    updated: "October 2026",
    featured: true,
  },
  {
    id: "points-motions",
    title: "Points & Motions Diplomatic Quick Reference",
    category: "rop",
    categoryLabel: "Rules of Procedure",
    description:
      "One-page cheat sheet on procedural precedence, voting majorities, interruption rights, and motion phrasing for all delegates.",
    format: "PDF",
    fileSize: "850 KB",
    updated: "October 2026",
    featured: true,
  },
  {
    id: "code-of-conduct",
    title: "Delegate Code of Conduct & Conference Ethics",
    category: "rop",
    categoryLabel: "Rules of Procedure",
    description:
      "Standards of diplomatic integrity, anti-harassment regulations, dress code guidelines, and academic honesty expectations.",
    format: "PDF",
    fileSize: "620 KB",
    updated: "October 2026",
  },
  {
    id: "position-paper-guide",
    title: "Position Paper Writing & Formatting Guide",
    category: "templates",
    categoryLabel: "Paper Templates",
    description:
      "Step-by-step instructions on structuring state policy statements, citing UN resolutions, and meeting evaluation criteria for awards.",
    format: "PDF",
    fileSize: "1.1 MB",
    updated: "October 2026",
    featured: true,
  },
  {
    id: "position-paper-template",
    title: "Official Position Paper Template",
    category: "templates",
    categoryLabel: "Paper Templates",
    description:
      "Ready-to-use standardized template with correct headers, margins, typography, and citation layout in editable Word format.",
    format: "DOCX",
    fileSize: "340 KB",
    updated: "October 2026",
  },
  {
    id: "resolution-template",
    title: "Draft Resolution & Amendment Template",
    category: "templates",
    categoryLabel: "Paper Templates",
    description:
      "Official formatting schema for sponsors, signatories, preambulatory clauses, operative clauses, and formal amendments.",
    format: "DOCX",
    fileSize: "410 KB",
    updated: "October 2026",
    featured: true,
  },
  {
    id: "preambulatory-phrases",
    title: "Preambulatory & Operative Phrases Compendium",
    category: "toolkit",
    categoryLabel: "Delegate Toolkit",
    description:
      "Authoritative catalog of diplomatic phrases recognized by the United Nations for drafting powerful working papers.",
    format: "PDF",
    fileSize: "520 KB",
    updated: "October 2026",
  },
  {
    id: "research-masterclass",
    title: "Country Policy Research & Fact-Finding Toolkit",
    category: "toolkit",
    categoryLabel: "Delegate Toolkit",
    description:
      "Curated repository of primary UN databases, treaties, voting records, and strategic search queries for foreign policy analysis.",
    format: "PDF",
    fileSize: "1.8 MB",
    updated: "October 2026",
  },
  {
    id: "public-speaking",
    title: "Diplomatic Speechmaking & GSL Mastery",
    category: "toolkit",
    categoryLabel: "Delegate Toolkit",
    description:
      "Proven tactics for 90-second General Speakers List speeches, crisis hooks, persuasive rhetoric, and unmoderated caucus diplomacy.",
    format: "PDF",
    fileSize: "980 KB",
    updated: "October 2026",
  },
];

const COMMITTEE_STUDY_GUIDES = [
  {
    code: "UNSC",
    name: "United Nations Security Council",
    agenda: "Mitigating Sovereignty Violations & Maritime Escalation in Disputed Trade Corridors",
    status: "Release in Progress",
  },
  {
    code: "ICJ",
    name: "International Court of Justice",
    agenda: "Legality of Unilateral Coercive Measures and State Jurisdictional Immunities",
    status: "Release in Progress",
  },
  {
    code: "IP",
    name: "International Press",
    agenda: "Ethical Journalism, Combating State Disinformation, and Digital Conflict Reporting",
    status: "Release in Progress",
  },
  {
    code: "UNHRC",
    name: "United Nations Human Rights Council",
    agenda: "Safeguarding Fundamental Freedoms in the Era of Autonomous Warfare & Digital Surveillance",
    status: "Release in Progress",
  },
  {
    code: "ILO",
    name: "International Labour Organization",
    agenda: "Regulating Algorithmic Management & Labor Rights in the Transnational Platform Economy",
    status: "Release in Progress",
  },
  {
    code: "AL",
    name: "League of Arab States",
    agenda: "Regional Frameworks for Cross-Border Aquifer Governance and Arid Zone Food Security",
    status: "Release in Progress",
  },
  {
    code: "UNDP",
    name: "United Nations Development Programme",
    agenda: "Structuring Loss & Damage Climate Financing Mechanisms for Vulnerable Island Nations",
    status: "Release in Progress",
  },
  {
    code: "WTO",
    name: "World Trade Organization",
    agenda: "Restoring the Dispute Settlement Mechanism Amid Strategic Geo-Economic Decoupling",
    status: "Release in Progress",
  },
];

const POINTS_MOTIONS_TABLE = [
  {
    name: "Point of Personal Privilege",
    purpose: "Address physical discomfort or inability to hear/see proceedings.",
    interrupts: "Yes (only for audibility)",
    second: "No",
    vote: "Chair Discretion",
  },
  {
    name: "Point of Order",
    purpose: "Address procedural errors or RoP violations committed by Chair or delegate.",
    interrupts: "No (between speeches)",
    second: "No",
    vote: "Chair Ruling",
  },
  {
    name: "Point of Parliamentary Inquiry",
    purpose: "Ask the Executive Board a question concerning Rules of Procedure.",
    interrupts: "No",
    second: "No",
    vote: "Chair Clarification",
  },
  {
    name: "Motion for Moderated Caucus",
    purpose: "Structured debate on a specific sub-issue with set speaking times.",
    interrupts: "No",
    second: "Yes",
    vote: "Simple Majority (50% + 1)",
  },
  {
    name: "Motion for Unmoderated Caucus",
    purpose: "Informal consultation for coalition building and resolution drafting.",
    interrupts: "No",
    second: "Yes",
    vote: "Simple Majority (50% + 1)",
  },
  {
    name: "Motion to Introduce Working Paper",
    purpose: "Distribute and officially present written documentation to committee.",
    interrupts: "No",
    second: "Yes",
    vote: "Simple Majority",
  },
  {
    name: "Motion to Close Debate",
    purpose: "Conclude discussion on the agenda and immediately move to substantive voting.",
    interrupts: "No",
    second: "Yes (2 pro, 2 con)",
    vote: "Two-Thirds Majority",
  },
];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");
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

  const filteredResources = RESOURCES_DATA.filter((res) => {
    const matchesTab = activeTab === "all" || res.category === activeTab;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
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
              <span>Resources & Documentation • LUMUNA 2026</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              The Delegate{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                Preparation Hub.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              Equip yourself with official Rules of Procedure, standardized position paper templates,
              committee study guides, and masterclass toolkits curated by the LUMUNA Academic Board.
            </p>
          </div>

          {/* Quick Stats Strip */}
          <div data-reveal="up" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">10</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Study Guides</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">UNA-USA</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Parliamentary RoP</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">100%</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Standardized Docs</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">Free</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Delegate Access</div>
            </div>
          </div>

          {/* Search & Filter Bar */}
          <div data-reveal="up" className="mt-12 flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {[
                { id: "all", label: "All Resources" },
                { id: "rop", label: "Rules of Procedure" },
                { id: "templates", label: "Paper Templates" },
                { id: "toolkit", label: "Delegate Toolkit" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-black text-white shadow-xs"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-neutral-50 border border-neutral-200 rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Resources Cards Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <div
                key={res.id}
                data-reveal="up"
                className={`relative flex flex-col justify-between p-6 rounded-2xl bg-white border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  res.featured
                    ? "border-neutral-900 shadow-xs ring-1 ring-neutral-900/10"
                    : "border-neutral-200 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-neutral-100 text-neutral-800 border border-neutral-200">
                      {res.categoryLabel}
                    </span>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">
                      {res.format} • {res.fileSize}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display font-black text-lg sm:text-xl text-neutral-900 leading-snug">
                    {res.title}
                  </h3>

                  <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                    {res.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-neutral-400">
                    Updated {res.updated}
                  </span>
                  <button
                    onClick={() => handleOpenUpcoming(res.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-neutral-900 text-white hover:bg-black transition-colors cursor-pointer shadow-2xs"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Committee Agendas & Study Guides Section */}
          <div data-reveal="up" className="mt-20 pt-16 border-t border-neutral-200">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-800 mb-2">
                  <span>Substantive Agendas</span>
                </div>
                <h2 className="font-display text-2xl sm:text-4xl font-black text-neutral-900">
                  Committee Study Guides
                </h2>
                <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
                  Official substantive background guides prepared by the Executive Board for all simulation committees.
                </p>
              </div>
              <Link
                href="/#committees"
                className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-neutral-600 transition-colors"
              >
                <span>View All 10 Committees</span>
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {COMMITTEE_STUDY_GUIDES.map((comm) => (
                <div
                  key={comm.code}
                  className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200 flex flex-col justify-between hover:bg-neutral-100/70 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-display font-black text-lg text-neutral-900">
                        {comm.code}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-700">
                        Study Guide
                      </span>
                    </div>
                    <div className="text-xs font-semibold text-neutral-500 mb-2">
                      {comm.name}
                    </div>
                    <p className="text-xs font-medium text-neutral-800 line-clamp-3 leading-relaxed">
                      {comm.agenda}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-neutral-200/60 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-neutral-500">
                      {comm.status}
                    </span>
                    <button
                      onClick={() => handleOpenUpcoming(`${comm.code} Study Guide`)}
                      className="text-xs font-bold text-neutral-900 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Access</span>
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Points & Motions Interactive Cheatsheet */}
          <div data-reveal="up" className="mt-20 pt-16 border-t border-neutral-200">
            <div className="text-left mb-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-800 mb-2">
                <Scale className="h-3.5 w-3.5 text-neutral-600" />
                <span>Parliamentary Cheat Sheet</span>
              </div>
              <h2 className="font-display text-2xl sm:text-4xl font-black text-neutral-900">
                Points & Motions Quick Reference
              </h2>
              <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-2xl">
                Standardized procedural actions recognized under UNA-USA Rules of Procedure at LUMUNA 2026.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white shadow-2xs">
              <table className="w-full text-left text-sm">
                <thead className="bg-neutral-900 text-white font-display uppercase tracking-wider text-xs">
                  <tr>
                    <th className="px-5 py-4 font-black">Point / Motion</th>
                    <th className="px-5 py-4 font-black">Purpose & Diplomatic Context</th>
                    <th className="px-4 py-4 font-black text-center">Interrupts?</th>
                    <th className="px-4 py-4 font-black text-center">Second?</th>
                    <th className="px-5 py-4 font-black">Vote Required</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200 font-medium text-neutral-800">
                  {POINTS_MOTIONS_TABLE.map((row, idx) => (
                    <tr
                      key={row.name}
                      className={idx % 2 === 0 ? "bg-white" : "bg-neutral-50/60"}
                    >
                      <td className="px-5 py-3.5 font-bold text-neutral-900 whitespace-nowrap">
                        {row.name}
                      </td>
                      <td className="px-5 py-3.5 text-xs sm:text-sm text-neutral-600">
                        {row.purpose}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-center font-bold">
                        {row.interrupts.startsWith("Yes") ? (
                          <span className="inline-block px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                            {row.interrupts}
                          </span>
                        ) : (
                          <span className="text-neutral-500">No</span>
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-xs text-center font-bold">
                        {row.second === "Yes" ? (
                          <span className="text-emerald-700">Yes</span>
                        ) : (
                          <span className="text-neutral-500">{row.second}</span>
                        )}
                      </td>
                      <td className="px-5 py-3.5 text-xs font-semibold text-neutral-700">
                        {row.vote}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Academic Inquiry Support Banner */}
          <div
            data-reveal="up"
            className="mt-20 rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-300">
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Academic Support</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Need Substantive Guidance on Your Agenda?
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Our Academic Team is available to clarify rules of procedure, country matrix allocations,
                and position paper submissions.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${SITE_CONFIG.socials.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
              >
                <span>Email Academic Board</span>
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                href="/about-us"
                className="inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                Learn About LUMUNA
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
        subtitle="This resource document will be officially released for registered delegates soon. Please check back shortly."
      />
    </div>
  );
}

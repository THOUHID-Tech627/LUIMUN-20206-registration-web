"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Scale,
  Newspaper,
  HeartHandshake,
  Briefcase,
  Compass,
  Sprout,
  TrendingUp,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Users2,
  FileText,
  Layers,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";

interface CommitteeData {
  id: string;
  name: string;
  fullName: string;
  category: string;
  logo: string;
  icon: React.ElementType;
  tagline: string;
  overview: string;
  mandate: string;
  focusAreas: string[];
  delegateProfile: string;
  allotmentType: string;
}

const COMMITTEES: CommitteeData[] = [
  {
    id: "unsc",
    name: "UNSC",
    fullName: "United Nations Security Council",
    category: "Primary Peace & Security Organ",
    logo: "/images/committees/unsc.svg",
    icon: Shield,
    tagline: "The premier forum for crisis diplomacy and global peacekeeping.",
    overview:
      "The United Nations Security Council holds primary responsibility for the maintenance of international peace and security under the UN Charter. Unique among UN organs, its decisions are legally binding upon all member states.",
    mandate:
      "Investigating international disputes, formulating crisis response directives, authorizing peacekeeping missions, applying multilateral sanctions regimes, and coordinating immediate diplomatic mediation to prevent conflict escalation.",
    focusAreas: [
      "Crisis Conflict Management",
      "Peacekeeping Mandates",
      "Multilateral Sanctions",
      "Non-Proliferation & Demilitarization",
      "Territorial Sovereignty",
    ],
    delegateProfile:
      "Demands quick critical thinking, diplomatic composure under crisis directives, strategic bloc maneuvering, and high-pressure negotiation acumen.",
    allotmentType: "Specialized Security Chamber",
  },
  {
    id: "icj",
    name: "ICJ",
    fullName: "International Court of Justice",
    category: "Principal Judicial Organ",
    logo: "/images/committees/icj.svg",
    icon: Scale,
    tagline: "The pinnacle of international jurisprudence and legal arbitration.",
    overview:
      "Situated at the Peace Palace in The Hague, the International Court of Justice is the principal judicial body of the United Nations. It adjudicates legal disputes submitted by sovereign states and renders advisory opinions on pressing legal questions.",
    mandate:
      "Settling legal disputes between states in accordance with international law, interpreting international conventions, customary state practice, general principles of law, and applying judicial precedents.",
    focusAreas: [
      "Inter-State Territorial Claims",
      "Treaty Interpretation",
      "International Humanitarian Law",
      "Maritime Delimitation",
      "State Responsibility & Reparations",
    ],
    delegateProfile:
      "Tailored for articulate litigators, thorough legal researchers, and analytical jurists prepared to draft reasoned judicial dissents, orders, and binding judgments.",
    allotmentType: "Judicial Bench & Legal Advocates",
  },
  {
    id: "ip",
    name: "IP",
    fullName: "International Press",
    category: "Specialized Journalism & Media Corps",
    logo: "/images/committees/ip.svg",
    icon: Newspaper,
    tagline: "The Fourth Estate holding diplomacy to truth, rigor, and public scrutiny.",
    overview:
      "The International Press operates as the watchdog and narrative chronicler of LUIMUN 2026. Transcending committee boundaries, journalists investigate covert negotiations, conduct press briefings, and hold delegate blocs accountable.",
    mandate:
      "Investigating committee developments, publishing real-time editorial analyses, conducting adversarial press conferences, producing video bulletins, and maintaining journalistic integrity in geopolitical storytelling.",
    focusAreas: [
      "Investigative Journalism",
      "Live Press Conferences",
      "Editorial Analysis & Op-Eds",
      "Photojournalism & Media",
      "Fact-Checking & Accountability",
    ],
    delegateProfile:
      "Ideal for inquisitive writers, intrepid reporters, and media enthusiasts who question official statements, cross-examine resolutions, and shape the public narrative.",
    allotmentType: "Journalists, Editors & Photographers",
  },
  {
    id: "unhrc",
    name: "UNHRC",
    fullName: "United Nations Human Rights Council",
    category: "Global Human Rights Organ",
    logo: "/images/committees/unhrc.svg",
    icon: HeartHandshake,
    tagline: "Championing universal dignities and defending civic freedoms worldwide.",
    overview:
      "The United Nations Human Rights Council is the principal inter-governmental body dedicated to promoting and protecting human rights across the globe, investigating human rights emergencies, and formulating remedial international frameworks.",
    mandate:
      "Reviewing human rights records, establishing commissions of inquiry, drafting universal declarations on vulnerable populations, and addressing systematic civil, political, and socio-economic rights infringements.",
    focusAreas: [
      "Protection of Displaced Populations",
      "Civil & Political Freedoms",
      "Rights in Digital & AI Eras",
      "Transitional Justice",
      "Gender Equality & Child Safeguards",
    ],
    delegateProfile:
      "Requires empathetic advocacy, deep familiarity with international human rights treaties, consensus-building skills, and structured resolution drafting.",
    allotmentType: "Single & Double Delegation",
  },
  {
    id: "ilo",
    name: "ILO",
    fullName: "International Labour Organization",
    category: "Specialized Tripartite Agency",
    logo: "/images/committees/ilo.svg",
    icon: Briefcase,
    tagline: "Fostering social justice, fair labor, and dignified work in a changing world.",
    overview:
      "The ILO is the oldest specialized agency in the UN system, founded in 1919 upon the principle that universal and lasting peace can only be established if it is based upon social justice. It brings together governments, employers, and workers in a unique tripartite structure.",
    mandate:
      "Establishing international labour standards, eliminating forced and child labour, safeguarding migrant worker protections, and guiding just economic transitions amidst automation and industrial shifts.",
    focusAreas: [
      "Future of Work & Automation",
      "Migrant Worker Protections",
      "Just Transition in Green Industries",
      "Eradication of Exploitative Labor",
      "Social Security & Wage Standards",
    ],
    delegateProfile:
      "Suited for negotiators who can balance economic development imperatives with worker welfare, negotiating tripartite compromise between state policy and industrial realities.",
    allotmentType: "Government, Employer & Worker Reps",
  },
  {
    id: "al",
    name: "AL",
    fullName: "League of Arab States",
    category: "Regional Multilateral Organization",
    logo: "/images/committees/al.svg",
    icon: Compass,
    tagline: "Unifying regional cooperation, sovereignty, and strategic dialogue.",
    overview:
      "The League of Arab States is a historic regional organization comprising 22 member nations across North Africa and the Middle East. It coordinates collaborative regional policies, defends national sovereignty, and harmonizes joint socio-economic strategies.",
    mandate:
      "Facilitating regional peace agreements, addressing economic integration, coordinating resource security policies, preserving cultural sovereignty, and mitigating geopolitical friction across member states.",
    focusAreas: [
      "Regional Peace Architectures",
      "Water, Food & Energy Security",
      "Post-Conflict Reconstruction",
      "Economic Integration & Trade",
      "Multilateral Diplomatic Mediation",
    ],
    delegateProfile:
      "Demands nuanced appreciation of Middle Eastern and North African history, regional political dynamics, and eloquent bilateral and multilateral diplomacy.",
    allotmentType: "Regional Member States",
  },
  {
    id: "undp",
    name: "UNDP",
    fullName: "United Nations Development Programme",
    category: "Global Sustainability & Development Organ",
    logo: "/images/committees/undp.svg",
    icon: Sprout,
    tagline: "Empowering resilient communities and accelerating sustainable progress.",
    overview:
      "The United Nations Development Programme is the lead UN agency driving the 2030 Agenda for Sustainable Development. Operating in roughly 170 countries, UNDP translates global agreements into grass-roots resilience and equitable prosperity.",
    mandate:
      "Eradicating poverty in all its forms, accelerating structural transformations for sustainable development, building resilience to crises, and fostering equitable green and digital access.",
    focusAreas: [
      "Sustainable Development Goals (SDGs)",
      "Climate Adaptation & Green Finance",
      "Poverty Alleviation Strategies",
      "Debt Sustainability for Global South",
      "Digital Inclusivity & Infrastructure",
    ],
    delegateProfile:
      "Fits innovative problem-solvers, developmental economists, and policy researchers eager to engineer practical, data-driven frameworks for sustainable human progress.",
    allotmentType: "General Assembly Style Chamber",
  },
  {
    id: "wto",
    name: "WTO",
    fullName: "World Trade Organization",
    category: "International Trade & Economic Governance",
    logo: "/images/committees/wto.svg",
    icon: TrendingUp,
    tagline: "Governing multilateral commerce, fair trade rules, and economic dispute settlements.",
    overview:
      "The World Trade Organization is the only global international organization dealing with the rules of trade between nations. At its heart are the WTO agreements, negotiated and signed by the bulk of the world’s trading nations.",
    mandate:
      "Administering WTO trade agreements, providing a forum for trade negotiations, handling international trade disputes, monitoring national trade policies, and building commercial trade capacity for developing economies.",
    focusAreas: [
      "Multilateral Dispute Settlement",
      "Supply Chain Resilience & Tariffs",
      "Digital Commerce Regulations",
      "Subsidies & Fair Competition",
      "Equitable Market Access for LDCs",
    ],
    delegateProfile:
      "Tailored for sharp economic strategists, commercial trade enthusiasts, and negotiators capable of balancing domestic market interests with open global rules.",
    allotmentType: "Member Delegations & Observers",
  },
];

export default function CommitteesPage() {
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

  const scrollToCommittee = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#E5E7EB] text-neutral-900 selection:bg-neutral-900 selection:text-white flex flex-col antialiased">
      <Navbar onOpenUpcoming={handleOpenUpcoming} />

      {/* Main Content Area */}
      <main className="flex-1 pt-24 sm:pt-28 pb-16">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0A0A0A] text-white py-16 sm:py-24 border-b border-white/10">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-600 rounded-full blur-[140px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neutral-700 rounded-full blur-[160px]" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
            {/* Pill Badge */}
            <div data-reveal="down" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-200 shadow-2xs backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-neutral-300" />
              <span>Official Committees • LUIMUN 2026</span>
            </div>

            {/* Headline */}
            <h1 data-reveal="up" className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]">
              Eight Chambers of Dialogue.{" "}
              <span className="block sm:inline text-neutral-400">
                One Shared Future.
              </span>
            </h1>

            {/* Description */}
            <p data-reveal="up" data-reveal-delay="1" className="mt-5 text-base sm:text-xl text-neutral-300 leading-relaxed max-w-3xl font-normal">
              Under the conference theme{" "}
              <strong className="text-white font-semibold">
                “A World in Transition: Reimagining Global Cooperation, Advancing Human Progress, and Shaping Our Shared Future,”
              </strong>{" "}
              LUIMUN 2026 convenes eight official committees and simulation bodies. Discover the mandates, strategic agendas, and delegate experiences that await you in Sylhet this December.
            </p>

            {/* Quick Stats Grid */}
            <div data-reveal="up" data-reveal-delay="2" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl pt-6 border-t border-white/15">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">8</span>
                <span className="text-xs sm:text-sm text-neutral-400 font-medium">Distinct Councils</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">4</span>
                <span className="text-xs sm:text-sm text-neutral-400 font-medium">Days of Negotiation</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">500+</span>
                <span className="text-xs sm:text-sm text-neutral-400 font-medium">Expected Delegates</span>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <span className="block text-2xl sm:text-3xl font-black font-display text-white">Dec 23-26</span>
                <span className="text-xs sm:text-sm text-neutral-400 font-medium">Leading University</span>
              </div>
            </div>
          </div>
        </section>

        {/* Committee Jump Navigation Bar */}
        <section className="sticky top-[68px] sm:top-[74px] z-30 bg-[#E5E7EB]/90 backdrop-blur-md border-b border-neutral-300 py-3 transition-all">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-0.5 scrollbar-none no-scrollbar">
              <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-neutral-500 whitespace-nowrap mr-2">
                Quick Jump:
              </span>
              {COMMITTEES.map((comm) => (
                <button
                  key={comm.id}
                  onClick={() => scrollToCommittee(comm.id)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white text-neutral-800 hover:bg-black hover:text-white border border-neutral-300 shadow-2xs transition-all whitespace-nowrap active:scale-95 cursor-pointer"
                >
                  {comm.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Committees Detailed Grid Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
            
            {COMMITTEES.map((committee, index) => {
              const IconComponent = committee.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={committee.id}
                  id={committee.id}
                  data-reveal={isEven ? "left" : "right"}
                  className="scroll-mt-36 rounded-3xl bg-white border border-white/80 shadow-[0_12px_32px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 transition-all hover:shadow-[0_20px_48px_rgba(0,0,0,0.1)] relative overflow-hidden group"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-100 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-neutral-200/60 transition-colors" />

                  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Official Emblem & High-Level Metadata */}
                    <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 shadow-2xs">
                      {/* Emblem Display */}
                      <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-3 bg-white rounded-2xl border border-neutral-200 shadow-xs flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105">
                        <Image
                          src={committee.logo}
                          alt={`${committee.fullName} Official Emblem`}
                          fill
                          className="object-contain p-2.5"
                          sizes="(max-width: 640px) 144px, 176px"
                        />
                      </div>

                      {/* Acronym Badge */}
                      <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-black tracking-widest uppercase">
                        <span>{committee.name}</span>
                      </div>

                      {/* Category Label */}
                      <span className="mt-2 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        {committee.category}
                      </span>

                      {/* Allotment Style Pill */}
                      <div className="mt-4 w-full pt-4 border-t border-neutral-200/70 flex items-center justify-center gap-1.5 text-xs text-neutral-600 font-medium">
                        <Users2 className="h-3.5 w-3.5 text-neutral-400 flex-shrink-0" />
                        <span>{committee.allotmentType}</span>
                      </div>

                      {/* Register Button */}
                      <button
                        onClick={handleOpenUpcoming}
                        className="mt-5 w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-black text-white hover:bg-neutral-800 transition-all shadow-xs active:scale-95 cursor-pointer"
                      >
                        <span>Apply For {committee.name}</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </button>
                    </div>

                    {/* Right Column: Full Details, Mandate & Agenda Scope */}
                    <div className="lg:col-span-8 space-y-6">
                      
                      {/* Header & Tagline */}
                      <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1">
                          <IconComponent className="h-4 w-4 text-neutral-800" />
                          <span>Committee Specification</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-black font-display tracking-tight text-neutral-900">
                          {committee.fullName}
                        </h2>
                        <p className="mt-1 text-sm sm:text-base font-semibold text-neutral-600 italic">
                          "{committee.tagline}"
                        </p>
                      </div>

                      {/* Committee Overview */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                          Overview & Institutional Role
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-800 leading-relaxed font-normal">
                          {committee.overview}
                        </p>
                      </div>

                      {/* Official Mandate */}
                      <div className="space-y-2">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                          Diplomatic Mandate
                        </h3>
                        <p className="text-sm sm:text-base text-neutral-700 leading-relaxed font-normal bg-neutral-50 p-4 rounded-xl border border-neutral-200/70">
                          {committee.mandate}
                        </p>
                      </div>

                      {/* Key Agendas / Focus Areas */}
                      <div className="space-y-2.5">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-neutral-400">
                          Strategic Areas of Deliberation
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {committee.focusAreas.map((area, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-neutral-100 text-neutral-800 border border-neutral-200"
                            >
                              {area}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Delegate Profile & Expectations */}
                      <div className="pt-2 border-t border-neutral-100 flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-neutral-100 text-neutral-700 flex-shrink-0 mt-0.5">
                          <FileText className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">
                            Delegate Profile & Preparedness
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed mt-0.5">
                            {committee.delegateProfile}
                          </p>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })}

          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-reveal="up"
            className="rounded-3xl bg-[#0A0A0A] text-white p-8 sm:p-12 border border-white/15 text-center relative overflow-hidden shadow-xl"
          >
            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-neutral-300 text-xs font-bold uppercase tracking-widest border border-white/15">
                Join The Delegation
              </span>
              <h2 className="text-2xl sm:text-4xl font-black font-display tracking-tight text-white">
                Ready to Take Your Seat at the Dais?
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Committee preferences will be open during the official delegate registration cycle. Prepare your country preferences, research your committee mandates, and get ready for four days of impactful diplomacy.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleOpenUpcoming}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm sm:text-base font-bold bg-white text-black hover:bg-neutral-200 transition-all shadow-xs cursor-pointer"
                >
                  <span>Register Now</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <Link
                  href="/about-us"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm sm:text-base font-semibold bg-white/5 border border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  About LUMUNA & Legacy
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer onOpenUpcoming={handleOpenUpcoming} />
      <UpcomingModal
        isOpen={isUpcomingModalOpen}
        onClose={handleCloseUpcoming}
      />
      <ScrollReveal />
    </div>
  );
}


export interface NavItem {
  label: string;
  href: string;
  isUpcoming?: boolean;
}

export interface PrincipleItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: "Scale" | "Award" | "Globe2";
}

export interface OpportunityItem {
  id: string;
  role: string;
  badge: string;
  description: string;
  buttonText: string;
  features: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: "Flame" | "Users" | "Handshake" | "Share2" | "Sparkles" | "Trophy";
  highlight?: boolean;
}

export interface ThematicPillar {
  title: string;
  code: string;
  description: string;
  focus: string;
}

export const SITE_CONFIG = {
  name: "LUMUNA 2026",
  fullName: "Leading University International Model United Nation 2026",
  tagline: "Where Diplomacy Meets Youth",
  subTagline:
    "Empowering young leaders through diplomacy, dialogue, policy, and global engagement.",
  label: "MODEL UNITED NATIONS",
  themeLabel: "2026 CONFERENCE THEME",
  themeTitle: "Upcoming Conference Theme",
  themeSubtitle:
    "Fostering multilateral diplomacy and sustainable policy dialogues across evolving global challenges.",
  
  // Key Dates & Logistics (Bangladesh Time GMT+6)
  conferenceDateIso: "2026-12-23T09:00:00+06:00",
  dateDisplay: "23–26 December 2026",
  venue: "Leading University",
  location: "Kamal Bazar, Sylhet",
  format: "In-Person Conference",
  organizationName: "Leading University Model United Nations Association",
  
  // Asset Paths (Centralized for instant updates)
  assets: {
    logo: "/images/logo.png",
    heroBg: "/images/hero-lumuna-new.png",
  },

  // Navigation Links
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Conference", href: "#conference-info" },
    { label: "Opportunities", href: "#opportunities" },
    { label: "Contact", href: "#contact" },
  ] as NavItem[],

  // Social & Official Links
  socials: {
    facebook: "https://www.facebook.com/LUMUNA.SYLHET",
    eventPage: "https://www.facebook.com/share/1D8R5dnosW/",
    email: "lumuna@lus.ac.bd",
    registration: {
      delegate: "https://luimun2026.fillout.com/t/qrbfBNdKwUus",
      headOfDelegation: "https://luimun2026.fillout.com/t/5jDj79vVzbus",
      internationalDelegate: "https://luimun2026.fillout.com/t/3qjU3Fhfrhus",
    },
  },

  // Core Principles
  principles: [
    {
      id: "diplomacy",
      number: "01",
      title: "Practice Diplomacy",
      description:
        "Engage in consensus-building, parliamentary procedure, and high-stakes multilateral negotiations simulating real-world UN assemblies.",
      iconName: "Scale",
    },
    {
      id: "leadership",
      number: "02",
      title: "Build Leadership",
      description:
        "Hone persuasive public speaking, critical crisis resolution, analytical thinking, and resolution drafting skills among future changemakers.",
      iconName: "Award",
    },
    {
      id: "connection",
      number: "03",
      title: "Connect Globally",
      description:
        "Unite with passionate student delegates, distinguished diplomats, scholars, and youth advocates from across regional and international borders.",
      iconName: "Globe2",
    },
  ] as PrincipleItem[],

  // 5 Theme Pillars
  pillars: [
    {
      title: "Education",
      code: "ED-01",
      description:
        "Universal access to quality education, equitable digital literacy, and modern pedagogical reforms.",
      focus: "Sustainable Development Goal 4",
    },
    {
      title: "Healthcare",
      code: "HC-02",
      description:
        "Strengthening global health resilience, pandemic preparedness, and equitable medical distribution.",
      focus: "Sustainable Development Goal 3",
    },
    {
      title: "Culture",
      code: "CL-03",
      description:
        "Preserving cultural heritage, encouraging intercultural empathy, and celebrating pluralistic identities.",
      focus: "Cross-Cultural Cohesion",
    },
    {
      title: "Innovation",
      code: "IN-04",
      description:
        "Ethical artificial intelligence governance, green technologies, and digital public infrastructure.",
      focus: "Technology & Policy",
    },
    {
      title: "Sustainability",
      code: "ST-05",
      description:
        "Climate action strategies, sustainable urbanization, renewable transitions, and ecosystem conservation.",
      focus: "Sustainable Development Goal 13",
    },
  ] as ThematicPillar[],

  // Participation Opportunities
  opportunities: [
    {
      id: "delegate",
      role: "Delegate",
      badge: "Flagship Track",
      description:
        "Represent a sovereign nation or portfolio, debate international crises, negotiate consensus resolutions, and experience high-stakes diplomacy.",
      buttonText: "Apply as Delegate",
      features: [
        "Simulate UN General Assembly & Security Council",
        "Draft working papers & comprehensive resolutions",
        "Compete for Best Delegate & Outstanding Diplomacy awards",
        "Official LUMUNA Certificate of Participation",
      ],
    },
    {
      id: "ambassador",
      role: "Campus Ambassador",
      badge: "Leadership Track",
      description:
        "Represent LUMUNA at your academic institution, lead your delegation, and foster a thriving youth diplomacy community.",
      buttonText: "Apply as Campus Ambassador",
      features: [
        "Institutional representation & networking",
        "Exclusive delegation discounts & incentives",
        "Leadership recognition certificate & honors",
        "Direct collaboration with LUMUNA",
      ],
    },
    {
      id: "executive-board",
      role: "Executive Board",
      badge: "Academic Track",
      description:
        "Preside over committee sessions, steer substantive debate, evaluate delegate performance, and shape the conference's academic rigor.",
      buttonText: "Apply for Executive Board",
      features: [
        "Chair & Co-Chair specialized committee sessions",
        "Formulate Background Guides & Rules of Procedure",
        "Honorarium & Executive Board certification",
        "Exclusive LUMUNA Gala & networking reception",
      ],
    },
  ] as OpportunityItem[],

  // Conference Experience (Editorial 6-block showcase)
  experiences: [
    {
      id: "opening",
      title: "Opening Ceremony",
      category: "Plenary Protocol",
      description:
        "Inauguration featuring distinguished keynote diplomats, honorary dignitaries, and the official gavel handover by the Secretary-General.",
      iconName: "Flame",
      highlight: true,
    },
    {
      id: "committees",
      title: "Committee Sessions",
      category: "Deliberation & Policy",
      description:
        "Rigorous debates navigating complex geopolitical agendas under standardized UN parliamentary procedures.",
      iconName: "Users",
    },
    {
      id: "negotiations",
      title: "Diplomatic Negotiations",
      category: "Unmoderated Caucusing",
      description:
        "Coalition-building, backchannel consultations, and strategic resolution drafting in intense unmoderated caucuses.",
      iconName: "Handshake",
    },
    {
      id: "networking",
      title: "Diplomatic Networking",
      category: "Community & Ties",
      description:
        "Curated sessions connecting aspiring student delegates with seasoned policy analysts, alumni, and civil society leaders.",
      iconName: "Share2",
    },
    {
      id: "cultural",
      title: "Cultural Exchange",
      category: "Global Unity",
      description:
        "A vibrant evening celebrating diversity, music, national traditions, and cross-cultural camaraderie.",
      iconName: "Sparkles",
    },
    {
      id: "awards",
      title: "Awards & Closing Gala",
      category: "Accreditation",
      description:
        "Formal recognition of exemplary diplomacy, best position papers, distinguished delegates, and closing LUMUNA addresses.",
      iconName: "Trophy",
      highlight: true,
    },
  ] as ExperienceItem[],
};

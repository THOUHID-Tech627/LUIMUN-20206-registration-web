import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | LUIMUN 2026 Registration & Info",
  description:
    "Get answers to frequently asked questions about LUIMUN 2026 registration tracks, matrix allocations, Position Papers, awards, venue in Sylhet, and accommodation.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions — LUIMUN 2026",
    description:
      "All your questions answered: registration eligibility, delegate kits, awards, committee study guides, venue logistics, and outstation accommodation.",
    url: "https://lumuna.org/faq",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is eligible to participate in LUIMUN 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUIMUN 2026 welcomes eligible students interested in diplomacy, international relations, global affairs, and Model United Nations. Please refer to the official registration guidelines for specific eligibility requirements."
      }
    },
    {
      "@type": "Question",
      "name": "How do I register, and what registration tracks are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Delegates must complete the official registration form available through the LUIMUN 2026 website. Registration is available for individual delegates, institutional delegations (Head of Delegation), and international participants."
      }
    },
    {
      "@type": "Question",
      "name": "Can I participate independently without a delegation or school club?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Delegates may register independently without being affiliated with a school club or institutional delegation, subject to official registration requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What does the delegate registration package include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The registration package includes access to all four conference days, a personalized delegate kit featuring an official placard, folder, notepad, pen, lapel pin, committee sessions, lunches and high-tea snacks, admission to the Cultural Night and Gala Dinner, and an official Certificate of Participation."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the conference held, and how do I get to the venue?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUIMUN 2026 will be hosted at the permanent campus of Leading University, located in Kamal Bazar, Sylhet 3112, Bangladesh. Accessible via Osmani International Airport (ZYL), intercity trains, and coach services."
      }
    },
    {
      "@type": "Question",
      "name": "What awards and recognitions are presented at LUIMUN 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "LUIMUN 2026 recognizes outstanding diplomatic performance through Best Delegate (Crest & Certificate), Outstanding Delegate (Crest), Special Mention (Certificate), Best Delegation Award, and Biggest Delegation Award."
      }
    }
  ]
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}


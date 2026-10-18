"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Camera,
  Filter,
  X,
  Maximize2,
  Calendar,
  MapPin,
  Users,
  Award,
  Sparkles,
  ArrowRight,
  ChevronRight,
  ExternalLink,
  History,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { UpcomingModal } from "@/components/UpcomingModal";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_CONFIG } from "@/constants/siteConfig";

interface EditionMilestone {
  year: string;
  editionName: string;
  tagline: string;
  location: string;
  description: string;
  photos: {
    src: string;
    caption: string;
  }[];
}

const CONFERENCE_EDITIONS: EditionMilestone[] = [
  {
    year: "2025",
    editionName: "LUIMUN 2025 (4th International MUN)",
    tagline: "532 Delegates • Bay of Bengal Concert • Kushiara Convention Hall",
    location: "Leading University & Kushiara Convention Hall, Sylhet",
    description:
      "A landmark international edition welcoming 532 delegates and 50 Executive Board members. Began with an Opening Plenary hosted at the residence of Dr. Syed Ragib Ali featuring a concert by 'Bay of Bengal', rigorous committee negotiations on campus, and an illustrious Gala & Award Giving ceremony at Kushiara Convention Hall.",
    photos: [
      {
        src: "/images/gallery/2025-2.jpg",
        caption: "Opening Plenary and committee debate sessions at Leading University campus.",
      },
      {
        src: "/images/gallery/2025-1.jpg",
        caption: "Grand Gala Award Giving and Closing Plenary at Kushiara International Convention Hall.",
      },
    ],
  },
  {
    year: "2024",
    editionName: "LUIMUN 2024 (3rd International MUN)",
    tagline: "Engaging the Global Diplomatic Community",
    location: "Leading University Campus, Sylhet",
    description:
      "Recognised as one of the hallmark Model UN conferences in Bangladesh, engaging international delegates, policy analysts, and youth changemakers in high-stakes negotiations and multilateral compromise.",
    photos: [
      {
        src: "/images/gallery/2024-2.jpg",
        caption: "General Speakers List and committee deliberations in plenary session.",
      },
      {
        src: "/images/gallery/2024-1.jpg",
        caption: "Executive Board and delegation leaders during resolution voting.",
      },
    ],
  },
  {
    year: "2023",
    editionName: "LUIMUN 2023 (2nd International MUN)",
    tagline: "Where Diplomacy Meets Ambition (Sept 7–9, 2023)",
    location: "Leading University Campus, Sylhet",
    description:
      "A premier international gathering held from September 7 to 9, 2023, establishing LUMUNA as the cornerstone of youth diplomacy in the Sylhet region and nationwide.",
    photos: [
      {
        src: "/images/gallery/2023-2.jpg",
        caption: "Committee caucus and cross-regional bloc consultations.",
      },
      {
        src: "/images/gallery/2023-1.jpg",
        caption: "Delegation awards, plenary addresses, and closing protocol.",
      },
    ],
  },
  {
    year: "2022",
    editionName: "LUIMUN 2022 (1st International MUN)",
    tagline: "The International Frontier",
    location: "Leading University Campus, Sylhet",
    description:
      "LUMUNA successfully transitioned from national summits to the international arena with its first-ever international conference, fostering cross-cultural understanding and global leadership.",
    photos: [
      {
        src: "/images/gallery/2022-2.jpg",
        caption: "Inaugural international delegate registration and assembly.",
      },
      {
        src: "/images/gallery/2022-1.jpg",
        caption: "Cross-cultural plenary diplomacy and multilateral engagement.",
      },
    ],
  },
  {
    year: "2020",
    editionName: "LUMUN 2020",
    tagline: "Flagship National Assembly (Feb 6–8, 2020)",
    location: "Leading University Campus, Sylhet",
    description:
      "A landmark event in Bangladesh's extracurricular landscape conducted over three dynamic days, facilitating collaborative problem-solving and diplomatic excellence before the pandemic.",
    photos: [
      {
        src: "/images/gallery/2020-2.jpg",
        caption: "Opening plenary proceedings and parliamentary protocol.",
      },
      {
        src: "/images/gallery/2020-1.jpg",
        caption: "Intense unmoderated caucus and working paper drafting sessions.",
      },
    ],
  },
  {
    year: "2019",
    editionName: "LUMUN 2019",
    tagline: "3rd National MUN Conference in Sylhet",
    location: "Leading University Campus, Sylhet",
    description:
      "Successfully arranged as the largest Model UN summit in the northeastern region, solidifying LUMUNA's academic reputation for debate rigor.",
    photos: [
      {
        src: "/images/gallery/2019-2.jpg",
        caption: "Committee sessions and delegate debates in progress.",
      },
      {
        src: "/images/gallery/2019-1.jpg",
        caption: "Delegation leaders and Executive Board members during awards ceremony.",
      },
    ],
  },
  {
    year: "2018",
    editionName: "LUMUN 2018",
    tagline: "2nd National Conference (Feb 8–11, 2018)",
    location: "Leading University Campus, Sylhet",
    description:
      "Following the success of the inaugural national edition, LUMUN 2018 expanded into a 4-day convention, setting the regional record for delegate participation.",
    photos: [
      {
        src: "/images/gallery/2018-2.jpg",
        caption: "Plenary assembly and diplomatic address to delegates.",
      },
      {
        src: "/images/gallery/2018-1.jpg",
        caption: "Committee floor proceedings and resolution presentations.",
      },
    ],
  },
  {
    year: "2017",
    editionName: "LUMUN 2017",
    tagline: "Inaugural National Conference at Permanent Campus",
    location: "Ragib Nagar, Kamal Bazar, Sylhet",
    description:
      "LUMUNA's first-ever national Model UN conference held in its permanent campus at Ragib Nagar, marking a new era of diplomatic tradition.",
    photos: [
      {
        src: "/images/gallery/2017-2.jpg",
        caption: "Inauguration at the permanent campus in Ragib Nagar, Kamal Bazar.",
      },
      {
        src: "/images/gallery/2017-1.jpg",
        caption: "Historic delegate assembly and first national committee gavels.",
      },
    ],
  },
  {
    year: "2016",
    editionName: "Intra-MUN 2016",
    tagline: "The Genesis: LUMUNA's First MUN",
    location: "Leading University, Sylhet",
    description:
      "LUMUNA organized its first Intra-MUN in 2016. This founding event marked the official beginning of structured debate, parliamentary procedure, and diplomacy initiatives within Leading University.",
    photos: [
      {
        src: "/images/gallery/2016-2.jpg",
        caption: "The inaugural Intra-MUN delegation and founding organizers in 2016.",
      },
      {
        src: "/images/gallery/2016-1.jpg",
        caption: "The first committee gavel and parliamentary debate session at Leading University.",
      },
    ],
  },
];

export default function GalleryPage() {
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<{
    src: string;
    title: string;
    caption: string;
    year: string;
  } | null>(null);
  const [isUpcomingModalOpen, setIsUpcomingModalOpen] = useState(false);

  const handleOpenUpcoming = () => {
    setIsUpcomingModalOpen(true);
  };

  const handleCloseUpcoming = () => {
    setIsUpcomingModalOpen(false);
  };

  const filteredEditions = CONFERENCE_EDITIONS.filter((edition) => {
    if (selectedYear === "all") return true;
    return edition.year === selectedYear;
  });

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 flex flex-col selection:bg-black selection:text-white">
      <ScrollReveal />

      {/* Navigation */}
      <Navbar onOpenUpcoming={handleOpenUpcoming} />

      <main className="flex-grow pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Bar Pill & Title */}
          <div data-reveal="down" className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-100/90 px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 shadow-2xs">
              <History className="h-3.5 w-3.5 text-neutral-600" />
              <span>Decade Archive • 2016–2026</span>
            </div>

            <h1 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 leading-[1.12]">
              A Decade of{" "}
              <span className="inline-block bg-black px-2.5 py-0.5 text-white">
                Diplomacy in Frames.
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-xl text-neutral-700 leading-relaxed max-w-3xl font-normal">
              From the humble beginnings of the 2016 Intra-MUN to the grand international assembly of LUIMUN 2025,
              explore our complete photographic archive across ten years of youth leadership.
            </p>
          </div>

          {/* Impact Stats */}
          <div data-reveal="up" className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">9 Editions</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">2016 to 2025</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">3,500+</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Delegates Trained</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">4 International</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">Editions Hosted</div>
            </div>
            <div className="p-5 rounded-2xl bg-neutral-50 border border-neutral-200">
              <div className="text-2xl sm:text-3xl font-display font-black text-neutral-900">LUIMUN 2026</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-600 uppercase tracking-wider mt-1">10th Anniversary</div>
            </div>
          </div>

          {/* Year Filter Pills */}
          <div data-reveal="up" className="mt-12 flex flex-wrap items-center gap-2">
            {["all", "2025", "2024", "2023", "2022", "2020", "2019", "2018", "2017", "2016"].map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedYear === y
                    ? "bg-black text-white shadow-xs"
                    : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200"
                }`}
              >
                {y === "all" ? "All Editions" : y}
              </button>
            ))}
          </div>

          {/* Chronological Editions Showcase */}
          <div className="mt-12 space-y-16">
            {filteredEditions.map((edition) => (
              <div
                key={edition.year}
                data-reveal="up"
                className="p-6 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200 shadow-xs"
              >
                {/* Edition Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-neutral-200">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-display font-black text-xs uppercase tracking-widest px-3 py-1 rounded-full bg-neutral-900 text-white">
                        {edition.year}
                      </span>
                      <span className="text-xs font-semibold text-neutral-500 flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {edition.location}
                      </span>
                    </div>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-neutral-900">
                      {edition.editionName}
                    </h2>
                    <p className="text-xs sm:text-sm font-bold text-neutral-700 mt-1">
                      {edition.tagline}
                    </p>
                  </div>
                </div>

                {/* Historical Narrative */}
                <p className="mt-5 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal max-w-4xl">
                  {edition.description}
                </p>

                {/* Photo Gallery Grid for this Edition */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {edition.photos.map((photo, pIdx) => (
                    <div
                      key={pIdx}
                      onClick={() =>
                        setLightboxImage({
                          src: photo.src,
                          title: edition.editionName,
                          caption: photo.caption,
                          year: edition.year,
                        })
                      }
                      className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-72 sm:h-80 flex flex-col justify-end"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-8 w-8 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                          <Maximize2 className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="relative z-10 p-5 text-white">
                        <p className="text-xs sm:text-sm text-neutral-200 font-medium line-clamp-2 leading-relaxed">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox Modal */}
          {lightboxImage && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200"
              onClick={() => setLightboxImage(null)}
            >
              <div
                className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl text-white"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Image Display */}
                <div className="relative w-full h-[55vh] sm:h-[65vh] bg-black">
                  <Image
                    src={lightboxImage.src}
                    alt={lightboxImage.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                  />
                </div>

                {/* Metadata Footer */}
                <div className="p-6 bg-neutral-900 border-t border-neutral-800">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 text-neutral-200 border border-white/20">
                      {lightboxImage.year} Edition
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl sm:text-2xl text-white">
                    {lightboxImage.title}
                  </h3>

                  <p className="mt-2 text-sm text-neutral-300 leading-relaxed font-normal">
                    {lightboxImage.caption}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Join The Next Chapter Banner */}
          <div
            data-reveal="up"
            className="mt-20 rounded-3xl bg-neutral-900 text-white p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-neutral-300">
                <Sparkles className="h-3.5 w-3.5" />
                <span>December 23–26, 2026</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-black">
                Make History at LUIMUN 2026
              </h3>
              <p className="text-neutral-400 text-sm sm:text-base max-w-xl font-normal">
                Join 500+ aspiring leaders for our 10th-anniversary celebration at Leading University, Sylhet.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#opportunities"
                className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold bg-white text-black hover:bg-neutral-200 transition-colors cursor-pointer shadow-xs"
              >
                <span>Register Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={SITE_CONFIG.socials.eventPage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-bold bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-colors"
              >
                <span>Official Event Page</span>
                <ExternalLink className="h-4 w-4" />
              </a>
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

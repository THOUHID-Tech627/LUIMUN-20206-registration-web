import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LUIMUN 2026 - Leading University International Model United Nation",
    short_name: "LUIMUN 2026",
    description:
      "Official website for Leading University International Model United Nation 2026 (LUIMUN). Where Diplomacy Meets Youth.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A0A0A",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/images/logo-nobg.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo-nobg.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

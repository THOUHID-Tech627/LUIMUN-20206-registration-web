import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          dark: "#111827",
          deep: "#0B0C10",
          charcoal: "#1F2937",
          slate: "#374151",
          muted: "#6B7280",
          silver: "#9CA3AF",
          border: "#E5E7EB",
          surface: "#F9FAFB",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "mono-xs": "0 1px 2px rgba(0, 0, 0, 0.05)",
        "mono-sm": "0 2px 4px rgba(0, 0, 0, 0.06)",
        "mono-md": "0 4px 12px rgba(0, 0, 0, 0.08)",
        "mono-card": "0 1px 3px rgba(0, 0, 0, 0.04), 0 6px 16px rgba(0, 0, 0, 0.04)",
      },
      backgroundImage: {
        "silver-gradient": "linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 50%, #D1D5DB 100%)",
        "silver-subtle": "linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(243, 244, 246, 0.7) 100%)",
        "silver-metallic": "linear-gradient(135deg, #E5E7EB 0%, #FFFFFF 50%, #D1D5DB 100%)",
      },
    },
  },
  plugins: [],
};
export default config;

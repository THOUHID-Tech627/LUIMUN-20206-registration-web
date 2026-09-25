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
          blue: "#16A6F6",
          "blue-hover": "#0e8fd6",
          "blue-light": "#EBF7FE",
          "blue-soft": "#F4FAFF",
          "blue-border": "rgba(22, 166, 246, 0.25)",
          deep: "#06182C",
          navy: "#0B2238",
          slate: "#3E5369",
          muted: "#667D94",
          surface: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "brand-sm": "0 2px 8px rgba(22, 166, 246, 0.08)",
        "brand-md": "0 8px 24px rgba(22, 166, 246, 0.12)",
        "brand-lg": "0 16px 40px rgba(6, 24, 44, 0.08), 0 4px 16px rgba(22, 166, 246, 0.08)",
        "card-hover": "0 20px 40px rgba(22, 166, 246, 0.15), 0 1px 3px rgba(0,0,0,0.05)",
      },
      backgroundImage: {
        "radial-diplomatic": "radial-gradient(circle at 50% 50%, rgba(22, 166, 246, 0.08) 0%, rgba(255, 255, 255, 0) 70%)",
        "radial-hero": "radial-gradient(circle at top right, rgba(22, 166, 246, 0.15), transparent 50%), radial-gradient(circle at bottom left, rgba(6, 24, 44, 0.8), transparent 70%)",
      },
    },
  },
  plugins: [],
};
export default config;

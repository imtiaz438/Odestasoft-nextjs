import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        body: "#475569",
        muted: "#94A3B8",
        line: "#E2E8F0",
        bgsoft: "#F8FAFC",
        bgsoft2: "#F1F5F9",
        brand: {
          DEFAULT: "#10B981",
          light: "#34D399",
          softbg: "#D1FAE5",
          dark: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      borderRadius: {
        card: "16px",
        cardlg: "24px",
      },
      maxWidth: {
        wrap: "1240px",
      },
    },
  },
  plugins: [],
};

export default config;

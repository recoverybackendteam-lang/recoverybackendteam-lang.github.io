import type { Config } from "tailwindcss";

// ============================================================
// BRAND TOKENS — centralized here so real brand hex values can
// be dropped in without touching any component code.
// Placeholder palette (premium navy / electric blue / gold):
// swap these 6 values for your exact brand hex codes.
// ============================================================
const brand = {
  bg: "#060B16",        // page background (near-black navy)
  surface: "#0E1930",   // panel / card background
  surface2: "#142240",  // elevated / glass panel
  primary: "#2F6FED",   // electric blue — trust, tech, action
  primaryLight: "#5B93FF",
  accent: "#F5B023",    // gold — premium, finance, CTA highlight
  text: "#EAF0FF",
  textMuted: "#93A2C2",
  line: "rgba(234,240,255,0.08)"
};

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        surface2: "rgb(var(--surface2) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          light: "rgb(var(--primary-light) / <alpha-value>)",
        },
        accent: "rgb(var(--accent) / <alpha-value>)",
        ink: "rgb(var(--text) / <alpha-value>)",
        muted: "rgb(var(--text-muted) / <alpha-value>)",
        line: "var(--line)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade": "linear-gradient(to bottom, transparent, rgb(var(--bg)))",
        "route-dash": "repeating-linear-gradient(90deg, rgb(var(--primary)) 0 10px, transparent 10px 20px)",
      },
      boxShadow: {
        glow: "0 0 60px -15px rgb(var(--primary) / 0.5)",
        goldGlow: "0 0 40px -10px rgb(var(--accent) / 0.45)",
        card: "0 1px 0 0 var(--line), 0 20px 40px -20px rgb(0 0 0 / 0.5)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        dash: "dash 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        dash: {
          to: { strokeDashoffset: "-40" },
        },
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;

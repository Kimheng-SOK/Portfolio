import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FF9900",
          dim: "#cc7a00",
          light: "#FFB84D",
        },
        teal: {
          DEFAULT: "#00d4d4",
          dim: "#009999",
        },
        dark: {
          bg: "#080c10",
          surface: "#0d1117",
          card: "#111820",
          border: "#1e2d3d",
          muted: "#6b7f8f",
          dim: "#3a4e5e",
        },
        light: {
          bg: "#f8fafc",
          surface: "#ffffff",
          card: "#f1f5f9",
          border: "#e2e8f0",
          muted: "#64748b",
          dim: "#94a3b8",
        },
      },
      fontFamily: {
        syne: ["var(--font-syne)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-syne)", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        "slide-x": "slideX 2s 2s infinite",
        "fade-up": "fadeUp 0.8s forwards",
      },
      keyframes: {
        pulseDot: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
        slideX: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(28px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "grid-dark": `
          linear-gradient(rgba(30,45,61,0.3) 1px, transparent 1px),
          linear-gradient(90deg, rgba(30,45,61,0.3) 1px, transparent 1px)
        `,
        "grid-light": `
          linear-gradient(rgba(226,232,240,0.6) 1px, transparent 1px),
          linear-gradient(90deg, rgba(226,232,240,0.6) 1px, transparent 1px)
        `,
      },
      backgroundSize: {
        grid: "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;

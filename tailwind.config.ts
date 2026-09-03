import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,mdx}",
    "./src/components/**/*.{ts,tsx,mdx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1320px",
      },
    },
    extend: {
      colors: {
        // Near-black brand ground (from the wordmark lockup)
        ink: {
          DEFAULT: "#05070E",
          soft: "#0A0D18",
          raised: "#10152A",
        },
        // Electric blue — the ring in the logo
        brand: {
          50: "#eef1ff",
          100: "#dfe4ff",
          200: "#c4ccff",
          300: "#9facff",
          400: "#7b86ff",
          500: "#4f5bff",
          600: "#2e3df0",
          700: "#1f2bc9",
          800: "#1b26a1",
          900: "#1b277f",
          950: "#111551",
        },
        // Orange — the play triangle accent
        accent: {
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc8a8",
          300: "#ffa270",
          400: "#ff7a3d",
          500: "#ff6a1a",
          600: "#f04e06",
          700: "#c73a07",
          800: "#9e300e",
          900: "#7f2a0f",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        // Fluid, mobile-first type scale (clamped between the given widths)
        "display-1": ["clamp(2rem, 1.35rem + 3.2vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-2": ["clamp(1.75rem, 1.3rem + 2.2vw, 3.25rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "heading-1": ["clamp(1.6rem, 1.25rem + 1.6vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "heading-2": ["clamp(1.35rem, 1.15rem + 1vw, 1.9rem)", { lineHeight: "1.2" }],
        "heading-3": ["clamp(1.15rem, 1.05rem + 0.5vw, 1.4rem)", { lineHeight: "1.3" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.7" }],
      },
      screens: {
        xs: "400px",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(79,91,255,0.25), 0 30px 80px -20px rgba(79,91,255,0.45)",
        "glow-accent": "0 0 0 1px rgba(255,106,26,0.3), 0 24px 60px -20px rgba(255,106,26,0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -24px rgba(5,7,14,0.9)",
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "brand-radial":
          "radial-gradient(60% 60% at 50% 0%, rgba(79,91,255,0.35) 0%, rgba(5,7,14,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.9)", opacity: "0.7" },
          "70%": { transform: "scale(1.6)", opacity: "0" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
        marquee: "marquee 32s linear infinite",
        "spin-slow": "spin-slow 26s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

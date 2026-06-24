import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#FF5722",
          50: "#FFF3EE",
          100: "#FFE4D9",
          400: "#FF7043",
          500: "#FF5722",
          600: "#E64A19",
          700: "#D84315",
        },
        brand: {
          400: "#FF7043",
          500: "#FF5722",
          600: "#E64A19",
        },
        surface: {
          50: "#1a1a1a",
          100: "#141414",
          200: "#0f0f0f",
          800: "#111111",
          900: "#0a0a0a",
          950: "#000000",
        },
        rock: {
          light: "#9e9e9e",
          DEFAULT: "#6b6b6b",
          dark: "#3d3d3d",
        },
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 60px rgba(255, 87, 34, 0.35)",
        "glow-sm": "0 0 30px rgba(255, 87, 34, 0.2)",
        card: "0 8px 32px rgba(0, 0, 0, 0.5)",
        phone: "0 25px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 87, 34, 0.15)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

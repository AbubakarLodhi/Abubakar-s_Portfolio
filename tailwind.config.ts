import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a0a0a",
          soft: "#101010",
          card: "#141414",
          line: "#232323",
          muted: "#8a8a8a",
          faint: "#5c5c5c",
        },
        cream: {
          DEFAULT: "#f1eae0",
          soft: "#e7ded1",
          dim: "#cfc6b8",
        },
        gold: {
          DEFAULT: "#c6b281",
          light: "#ddd0aa",
          deep: "#a59060",
        },
      },
      fontFamily: {
        display: ["var(--font-anton)", "sans-serif"],
        heavy: ["var(--font-archivo-black)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
      },
      letterSpacing: {
        wider2: "0.18em",
        wider3: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#090b0e",
        panel: "#101318",
        line: "#252a31",
        ink: "#f5f7fa",
        muted: "#929aa5",
        signal: "#4dffc3",
        darksignal: "#00613F",
        cyan: "#52d9ff",
        red: "#FF351F",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        signal: "0 0 32px rgba(77, 255, 195, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Ledger register — fixed in both themes.
        desk: "#15181A",
        paper: "#F3F0E6",
        ink: "#20241F",
        stamp: {
          green: "#2F6B4F",
          "green-bg": "#E1EAE2",
          amber: "#9C6A1F",
          "amber-bg": "#F1E4C9",
          slate: "#4A5560",
          "slate-bg": "#DFE3E2",
        },
        // Plain register — theme-aware, driven by CSS variables.
        surface: "rgb(var(--surface) / <alpha-value>)",
        "surface-alt": "rgb(var(--surface-alt) / <alpha-value>)",
        content: "rgb(var(--content) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        hairline: "rgb(var(--hairline) / <alpha-value>)",
        chip: "rgb(var(--chip) / <alpha-value>)",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "ui-monospace", "monospace"],
        sans: ["var(--font-plex-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "2px",
        sm: "2px",
        md: "3px",
        lg: "3px",
      },
      maxWidth: {
        shell: "68rem",
        prose: "44rem",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg0: "rgb(var(--bg0) / <alpha-value>)",
        bg1: "rgb(var(--bg1) / <alpha-value>)",
        fg: "rgb(var(--fg) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        a: "rgb(var(--a) / <alpha-value>)",
        b: "rgb(var(--b) / <alpha-value>)",
        c: "rgb(var(--c) / <alpha-value>)",
      },
    },
  },
  plugins: [],
} satisfies Config;

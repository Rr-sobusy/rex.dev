import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background-hsl))",
        foreground: "hsl(var(--foreground-hsl))",
        backgroundAccent: "hsl(var(--accent-hsl))",
        primary: "hsl(var(--primary))",
        primaryAccent: "hsl(var(--primary-accent))",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        marquee: "marquee var(--duration) linear infinite",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        "logo-carousel": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - 2rem))" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

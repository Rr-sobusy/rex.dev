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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        boxesBackground: `linear-gradient(45deg, transparent 24%, #ECECEC 25%, #ECECEC 26%, transparent 27%),
                          linear-gradient(315deg, transparent 24%, #ECECEC 25%, #ECECEC 26%, transparent 27%),
                          linear-gradient(225deg, transparent 24%, #ECECEC 25%, #ECECEC 26%, transparent 27%),
                          linear-gradient(135deg, transparent 24%, #ECECEC 25%, #ECECEC 26%, transparent 27%)`,
      },
      backgroundSize: {
        boxesSize: "55px 55px",
      },
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
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

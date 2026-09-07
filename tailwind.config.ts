import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0C2A47",
          deep: "#081A2D",
          soft: "#12385E",
        },
        brand: {
          DEFAULT: "#2166B1",
          light: "#4A87C9",
          dark: "#184C86",
        },
        reef: {
          DEFAULT: "#1FAE94",
          light: "#4FC7B0",
        },
        sand: {
          DEFAULT: "#F1EADC",
          light: "#F8F4EC",
          deep: "#E4D8BF",
        },
        paper: "#FBFAF7",
        ink: "#141B24",
        graphite: "#4A5361",
        mist: "#8C97A6",
        line: "#E1DCD0",
      },
      fontFamily: {
        display: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        tightest2: "-0.045em",
      },
      backgroundImage: {
        "route-fade":
          "linear-gradient(90deg, rgba(33,102,177,0) 0%, rgba(33,102,177,0.55) 50%, rgba(33,102,177,0) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ukrainian flag blue overrides Tailwind's default blue
        blue: {
          50:  "#e6eef8",
          100: "#c0d5ee",
          200: "#99bce4",
          300: "#73a3da",
          400: "#4d8ad0",
          500: "#2671c6",
          600: "#005BBB", // Ukrainian blue
          700: "#004fa3",
          800: "#00438b",
          900: "#003773",
        },
        // Ukrainian flag yellow overrides Tailwind's default yellow
        yellow: {
          50:  "#fffde6",
          100: "#fff8c0",
          200: "#fff299",
          300: "#ffed73",
          400: "#FFD700", // Ukrainian yellow
          500: "#f5c400",
          600: "#cca300",
          700: "#a38200",
          800: "#7a6200",
          900: "#524100",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

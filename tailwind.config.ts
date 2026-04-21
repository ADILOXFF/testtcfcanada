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
        primary: {
          DEFAULT: "#0066cc",
          dark: "#004d99",
          light: "#3399ff",
        },
        secondary: {
          DEFAULT: "#f9fbff",
          accent: "#ffd700",
        },
      },
      backgroundImage: {
        "gradient-blue": "linear-gradient(to right, #004d99, #0066cc, #3399ff)",
      },
    },
  },
  plugins: [],
};

export default config;

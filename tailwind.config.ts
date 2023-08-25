import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        deepBackWhite: "#F2F6F7",
        lightBackWhite: "#FFFFFF",
        pointBackWhite: "#E3F3FA",
        deepTextGray: "#777777",
        lightTextGray: "#AAAAAA",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;

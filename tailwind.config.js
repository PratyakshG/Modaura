/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        redHatDisplay: ["var(--font-red-hat-display)"],
        limelight: ["var(--font-limelight)"],
        outfit: ["var(--font-outfit)"],
      },
      colors: {
        ivory: "#F8F7F4",
        deepTeal: "#016D77",
        roseGold: "#B76E79",
        beige: "#D9C6A5",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};

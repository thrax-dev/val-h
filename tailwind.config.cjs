/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22C55E",
        secondary: "#F97316",
        pf: "#001B2E",
        soft: "#FFF7F8",
        grayish: "#6B7D7D",
      },
    },
  },
  plugins: [],
};

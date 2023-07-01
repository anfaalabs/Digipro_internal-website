/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{ts,tsx,html,css}"],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#C3F0FC",
          300: "#86E1F9",
          400: "#4AD2F6",
          DEFAULT: "#0dc3f2",
          600: "#0DBAE7",
          700: "#0CB1DC",
          800: "#0BA1C8",
        },
      },
      screens: {
        "3xl": "1420px",
      },
      fontFamily: {
        sans: ["Inter"],
        poppins: ['"Poppins"', '"Inter"'],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      main: ["Amiko", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#00dbef",
        primaryHover: "#2bb3bf",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        customPink: "#b1034f",
        lightPink: "#efcddc",
        lightGrey: "#E8E8E8",
      },
    },
  },
  plugins: [],
};

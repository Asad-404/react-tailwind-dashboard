/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1B262C",
        dark_light: "#0F4C75",
        primary: "#3282B8",
        bright: "#BBE1FA",
      },
    },
  },
  plugins: [],
};

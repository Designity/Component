/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        margin: "0",
        screens: {
          // md: "1280px",
          xl: "1680px",
        },
      },
      colors: {
        white: "#fff",
        primary_white: "#FAFAFA",
        primary_white_text: "#666",
        primary_dark: "#0e0e0e",
        primary_border: "#a6a6a6",
      },
    },
  },
  plugins: [],
};

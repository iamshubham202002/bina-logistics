/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fb8a47",
        secondry: "#ffa448",
        dark: "#1e1e1e",  // Added missing '#' for the dark color
        light: "#f5f5f5",
      },
      fontFamily: {  // Corrected colon and braces
        sans: ["Poppins", "sans-serif"],
      },
      container: {  // Corrected colon and braces
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};

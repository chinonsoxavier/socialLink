/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],

  theme: {
    extend: {
      colors: {
        lightText: "#555",
        primaryTheme: "#145044",
        primaryThemeLight: "#e8fbd5",
      },
    },
  },
  plugins: [],
};

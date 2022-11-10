/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      '2xl': "1536px",
      '3xl': "2200px",
    },

    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

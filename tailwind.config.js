/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xlg': '1140px',
      },
      boxShadow:{
        '3xl': '0 2px 37px 0 rgba(0,0,0,.1)'
      }
    },
    colors: {
      'main': "#3EB7BB",
      'main-tint': "#66c9cc",
      'main-shade': "#1E9799",
      'main-mint': "#f0f9fa",
      'main-dark': "#125F60",
      'secondary': "#FAFAFA",
      'tertiary': "#ED8B00",
      
      'heading': '#222222',
      'sub-heading': "#333333",
      'para': "#3B3C3D",
      'sub-para': "#616161",
      'sub': "#B1B6B9",
      'white': "#FFFFFF",
      'black': "#000000",

      'light': "#FAFAFA"
    },
    fontFamily: {
      sumana: ['"Sumana"', 'serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
  },
  plugins: [],
}
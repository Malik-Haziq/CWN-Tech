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
        'xm': '490px'
      },
      boxShadow:{
        '3xl': '0 2px 37px 0 rgba(0,0,0,.1)',
        'card': '0px 4px 60px 0px rgba(213, 213, 213, 0.40);'
      }
    },
    colors: {
      'main': "#3EB7BB",
      'main-tint': "#66c9cc",
      'main-tint-1': "#94D9DB",
      'main-shade': "#1E9799",
      'main-mint': "#f0f9fa",
      'main-dark': "#125F60",
      'secondary': "#FAFAFA",
      'tertiary': "#ED8B00",
      'tertiary-shade': "#d17a01",
      
      'heading': '#242323',
      'sub-heading': "#333333",
      'para': "#3B3C3D",
      'sub-para': "#616161",
      'sub': "#B1B6B9",
      'white': "#FFFFFF",
      'black': "#000000",
      
      'light-gray': "#F6F7F8",
      'light': "#FAFAFA"
    },
    fontFamily: {
      sumana: ['"Sumana"', 'serif'],
      poppins: ['"Poppins"', 'sans-serif'],
    },
  },
  plugins: [],
}
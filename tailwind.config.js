/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ar-one': ['"AR One Sans"', 'sans-serif'],
        'afacad': ['"Afacad Flux"', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'dm-sans' : ["DM Sans",'sans-serif'],
        "poppins" : ["Poppins",'sans-serif']
      },
      colors:{
        green:{
          600 : "#1E2524"
        }
      },
    }
  },
  plugins: [],
}


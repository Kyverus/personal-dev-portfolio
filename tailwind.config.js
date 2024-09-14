/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes:{
        updown: { 
          '0%, 100%': {transform: 'translateY(-10px)'},
          '50%': {transform: 'translateY(10px)'}
        }
      },
      animation: {
        updown: 'updown 3s linear infinite',
      },
      colors: {
        light: {
          primary: '#F5F5F5',
          secondary: '#D4D4D4',
          tertiary: '#B3B3B3'
        },
        dark: {
          primary: '#080808',
          secondary: '#171717',
          tertiary: '#3B3B3B'
        }
      }
    },
  },
  plugins: [],
}
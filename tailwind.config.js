/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xs: "576px",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
        updown: "updown 3s linear infinite",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
      colors: {
        base: {
          cyan: "#06b6d4",
          green: "#3F8F6E",
        },
        light: {
          primary: "#F5F5F5",
          secondary: "#D4D4D4",
          tertiary: "#B3B3B3",
          green: "#B8E0D0",
        },
        dark: {
          primary: "#080808",
          secondary: "#171717",
          tertiary: "#3B3B3B",
          green: "#1f4737",
        },
      },
    },
  },
  plugins: [],
};

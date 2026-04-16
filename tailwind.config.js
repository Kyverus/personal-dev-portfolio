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
          "0%, 100%": { transform: "translateY(-20px)" },
          "50%": { transform: "translateY(5px)" },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        glowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(255,255,255,0.2)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(255,255,255,0.4)",
          },
        },
        shadowPulse: {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(31, 71, 55,0.2)",
          },
          "50%": {
            boxShadow: "0 0 20px rgba(31, 71, 55,0.4)",
          },
        },
      },
      animation: {
        appear: "appear 0.5s ease-in-out",
        updown: "updown 5s linear infinite",
        glowPulse: "glowPulse 2s ease-in-out infinite",
        shadowPulse: "shadowPulse 2s ease-in-out infinite",
      },
      transitionProperty: {
        width: "width",
        height: "height",
      },
      boxShadow: {
        'black-shade': '0 2px 10px 1px rgba(0, 0, 0, 0.25)',
        'green-shade': '0 2px 10px 2px rgba(31, 71, 55, 0.5)',
        'green-glow': '0 2px 10px 2px rgba(63, 143, 110, 0.5)',
      },
      colors: {
        base: { 
          cyan: "#06b6d4",
          green: "#3F8F6E",
        },
        light: {
          primary: "#F4F6F4",
          secondary: "#D4D6D4",
          tertiary: "#B3B5B3",
          green: "#B8E0D0",
        },
        dark: {
          primary: "#080A08",
          secondary: "#171917",
          tertiary: "#3B3D3B",
          green: "#1f4737", //#06201C
        },
      },
    },
  },
  plugins: [],
};

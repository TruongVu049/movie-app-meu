/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#ff0000", // Thêm màu custom
      },
      keyframes: {
        fadeDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-96px)",
            visibility: "hidden",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            visibility: "visible",
          },
        },
        scaleUp: {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
      },
      animation: {
        fadeDown: "fadeDown 0.7s ease-in-out forwards .2s",
        fadeDownDelay1: "fadeDown 0.7s ease-in-out forwards .4s",
        fadeDownDelay2: "fadeDown 0.5s ease-in-out forwards .6s",
        scaleUp: "scaleUp 0.8s ease-in-out ",
        scaleUp_md: "scaleUp 0.2s ease-in-out ",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"], // Thêm font vào đây
      },
    },
  },
  plugins: [],
};

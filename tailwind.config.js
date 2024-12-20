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
          // "0%": {
          //   opacity: "0",
          //   transform: "translateY(-96px)",
          //   visibility: "hidden",
          // },
          // "100%": {
          //   opacity: "1",
          //   transform: "translateY(0)",
          //   visibility: "visible",
          // },
          from: {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
            visibility: "hidden",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
            visibility: "visible",
          },
        },
        scaleUp: {
          // "0%": {
          //   transform: "scale(0)",
          //   opacity: 0,
          // },
          // "100%": {
          //   transform: "scale(1)",
          //   opacity: 1,
          // },
          from: {
            opacity: 0,
            transform: "scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)",
            animationTimingFunction: "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
          },
          "60%": {
            opacity: 1,
            transform: "scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)",
            animationTimingFunction: "cubic-bezier(0.175, 0.885, 0.32, 1)",
          },
        },
        slideRight: {
          "0%": {
            width: 0,
          },
          "50%": {
            width: "100%",
          },
          "100%": {
            width: 0,
          },
        },
      },
      animation: {
        fadeDown: "fadeDown 0.7s ease-in-out forwards .2s",
        fadeDownDelay1: "fadeDown 0.7s ease-in-out forwards .4s",
        fadeDownDelay2: "fadeDown 0.5s ease-in-out forwards .6s",
        scaleUp: "scaleUp 0.8s ease-in-out ",
        scaleUp_md: "scaleUp 0.2s ease-in-out ",
        slideRight: "slideRight 2s infinite",
      },
      fontFamily: {
        sans: ["'Space Grotesk'", "sans-serif"], // Thêm font vào đây
      },
    },
  },
  plugins: [],
};

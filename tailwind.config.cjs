/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "black",
        secondary: "#25b8ef",
      },
      keyframes: {
        slideinleft: {
          from: { tranform: "translateX(100%)" },
          to: { tranform: "translateX(0)" },
        },
        slidedown: {
          from: { tranform: "translateY(100%)" },
          to: { tranform: "translateX(0)" },
        },
      },
      animation: {
        slideinleft: "slideinleft 0.6s infinite",
        slidedown: "slidedown 1s infinite",
      },
    },
  },
  plugins: [],
};

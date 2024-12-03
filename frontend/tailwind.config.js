/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Beige: "#dcdac4",
        GreenDark: "#637d6e",
        GreenLight: "#b2bf9f",
        Olive: "#9ba860",
      },
      backgroundImage: {
        gradation: "linear-gradient(to bottom, rgba(220, 218, 196, 0) 0%, #dcdac4 100%)",
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out both",
        "fade-in-fwd": "fade-in-fwd 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "tracking-in-expand": "tracking-in-expand 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "tracking-in-expand": {
          "0%": {
            letterSpacing: "-0.5em",
            opacity: "0",
          },
          "40%": {
            opacity: "0.6",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
        klee: ['"Klee One"', "cursive"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // 常に light テーマを使用
  },
};

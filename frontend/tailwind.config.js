/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBeige: "#dcdac4",
        customGreenDark: "#637d6e",
        customGreenLight: "#b2bf9f",
        customOlive: "#9ba860",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        bounce: "bounce 3s infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // 常にlightテーマを使用
  },
};

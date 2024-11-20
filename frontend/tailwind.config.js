/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // すべてのJS、JSX、TS、TSXファイルをスキャン
  ],
  future: {
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        default: "white" // デフォルトの背景色を白に変更
      }
    }
  },
  variants: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};

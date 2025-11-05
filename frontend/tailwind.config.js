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
        // 追加のカラーパレット
        sage: {
          50: "#f6f7f4",
          100: "#e9ebe4",
          200: "#d4d8ca",
          300: "#b2bf9f",
          400: "#9ba860",
          500: "#637d6e",
          600: "#4a5d52",
          700: "#3d4d42",
          800: "#323f36",
          900: "#2a342e",
        },
        cream: {
          50: "#fefefe",
          100: "#fdfdfc",
          200: "#f9f8f4",
          300: "#f4f2eb",
          400: "#ede9dd",
          500: "#dcdac4",
          600: "#c4c2a8",
          700: "#a8a68e",
          800: "#8d8b75",
          900: "#75735f",
        },
      },
      backgroundImage: {
        gradation: "linear-gradient(to bottom, rgba(220, 218, 196, 0) 0%, #dcdac4 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "linear-gradient(135deg, rgba(220, 218, 196, 0.1) 0%, rgba(99, 125, 110, 0.1) 100%)",
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 0.6s ease-out both",
        "fade-in-fwd": "fade-in-fwd 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both",
        "tracking-in-expand": "tracking-in-expand 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) both",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.6s ease-out",
        "slide-in-left": "slide-in-left 0.6s ease-out",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "shimmer": "shimmer 2s linear infinite",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        "bounce-gentle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "shimmer": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      fontFamily: {
        sans: ["Inter", "Graphik", "sans-serif"],
        klee: ['"Klee One"', "cursive"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 15px -3px rgba(0, 0, 0, 0.05)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(155, 168, 96, 0.3)',
        'glow-lg': '0 0 30px rgba(155, 168, 96, 0.4)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // 常に light テーマを使用
  },
};

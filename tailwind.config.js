/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#080B14",
          900: "#0E1424",
          800: "#151D33",
          700: "#1D2740",
        },
        ivory: {
          50: "#FDFCF9",
          100: "#FAF7F0",
          200: "#F2ECDD",
        },
        brass: {
          300: "#E3C57A",
          400: "#D2AC55",
          500: "#B8902E",
          600: "#9A7523",
        },
        pine: {
          500: "#0E6B5C",
          600: "#0A5346",
        },
        ink: {
          900: "#151821",
          700: "#3A3F4D",
          500: "#6B7180",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(216,182,92,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(216,182,92,0.08) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      boxShadow: {
        premium: "0 20px 60px -20px rgba(8,11,20,0.45)",
        glow: "0 0 40px rgba(216,182,92,0.25)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

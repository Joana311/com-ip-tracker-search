/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/pattern-bg-desktop.png')",
      },
      screens: {
        sm: "540px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",
      },
      fontFamily: {
        rubik: ["Rubik", "ui-sans-serif", "system-ui"],
      },
    },
    plugins: [],
  },
};

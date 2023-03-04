/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,tsx,jsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#1C212D",
        "dark-cta": "#2F374C",
        primary: "#ffc300",
        "primary-cta": "#ffd60a",
        secondary: "#206f68",
        "secondary-cta": "#49c496",
      },
    },
  },
  plugins: [],
};

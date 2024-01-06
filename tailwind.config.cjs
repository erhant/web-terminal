const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const defaults = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // see https://scottspence.com/posts/customising-fonts-in-tailwind-css-and-daisyui
      fontFamily: {
        sans: ["Fira Code", ...defaults.fontFamily.sans],
        mono: ["Fira Code", ...defaults.fontFamily.mono],
      },
    },
  },
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "black",
      "luxury",
      "dracula",
      "autumn",
      "business",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
  plugins: [typography, daisyui],
};

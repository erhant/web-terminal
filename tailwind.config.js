const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");
const defaults = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
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
    themes: ["dark", "forest", "wireframe", "sunset"],
  },
  plugins: [typography, daisyui],
};

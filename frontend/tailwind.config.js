/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        /* Texte */
        "blue": "rgb(26, 54, 162)",
        "grayLight": "rgb(148, 148, 149)",
        "greenPantone": "#b5dba9",

        /* Technologies */
        "bootstrap": "rgb(86, 61, 124)",
        "css": "rgb(38, 77, 228)",
        "express": "rgb(255, 255, 255)",
        "figma": "rgb(85, 45, 130)",
        "firebase": "rgb(255, 153, 51)",
        "html": "rgb(227, 76, 38)",
        "illustrator": "rgb(232, 82, 133)",
        "indesign": "rgb(232, 82, 133)",
        "javascript": "rgb(240, 219, 79)",
        "markdown": "rgb(255, 255, 255)",
        "mysql": "rgb(0, 84, 164)",
        "node": "rgb(174, 20, 11)",
        "nosql": "rgb(174, 20, 11)",
        "photoshop": "rgb(61, 87, 152)",
        "tailwind": "rgb(6, 182, 212)",
        "vue": "rgb(65, 184, 131)",
        "wordpress": "rgb(33, 117, 155)",

        /* Backgrounds */
        "article": "rgb(27, 27, 29)",
        "main": "#0E0F13FF",
        "gray": "rgba(32, 32, 34, 0.9)"
      },
      fontFamily: {
        josefinSans: ['Josefin Sans', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}
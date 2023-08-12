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
        /* Technologies */
        "bootstrap": "#563D7CFF",
        "css": "#264DE4FF",
        "express": "#FFFFFFFF",
        "figma": "#552D82FF",
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
        "article": "#1B1B1D",
      }
    },
  },
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}
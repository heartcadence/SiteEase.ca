
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./*.tsx",
    "./components/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Calibri', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          '"Segoe UI"', 
          'Roboto', 
          'sans-serif'
        ],
      },
    },
  },
  plugins: [],
}

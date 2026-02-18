/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'sans-serif',
        ],
      },
      lineHeight: {
        'hero': '1.05',
      },
      letterSpacing: {
        'hero': '-0.025em',
      }
    },
  },
  plugins: [],
}
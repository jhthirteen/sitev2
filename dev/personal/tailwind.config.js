/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans Variable"', 'sans-serif']
      },
      gridTemplateColumns: {
        '70/30' : '70% 30%',
      },
    },
  },
  plugins: [],
}

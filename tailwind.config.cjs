/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow-amber':'#f9f4ea'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
],
}

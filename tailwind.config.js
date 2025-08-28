
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: { emerald: '#059669', sky: '#0284c7', amber: '#d97706' }
      }
    },
  },
  plugins: [],
}

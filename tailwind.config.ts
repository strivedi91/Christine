import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          emerald: '#059669',
          sky: '#0284c7',
          amber: '#d97706',
        }
      }
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  // Preflight is off so the portfolio keeps the exact base styles of the original design.
  corePlugins: { preflight: false },
  theme: {
    extend: {
      colors: {
        lavender: '#E9E7FF',
        mist: '#F8F7FF',
        ink: '#171717',
        blush: '#F6C6D8',
        butter: '#FFF0A8',
        line: '#1A1A1A',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

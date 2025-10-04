/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canaess: {
          100: '#0d607c',
          200: '#1a647d',
          300: '#225d70',
          400: '#467787',
          500: '#fff200',
          600: '#fffc4a',
          700: '#fffd6e',
          800: '#fffd8f',
          900: '#fffebd',
        }
      }
    },
  },
  plugins: [],
};

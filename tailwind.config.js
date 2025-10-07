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
          500: '#ffb200',
          600: '#ffbc4a',
          700: '#ffbd6e',
          800: '#ffbd8f',
          900: '#ffbebd',
          1000: '#fe9900',
        }
      }
    },
  },
  plugins: [],
};

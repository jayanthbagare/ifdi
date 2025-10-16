/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1e3932',
        'brand-beige': '#f9f6f1',
      },
      fontFamily: {
        'serif': ['Calistoga', 'serif'],
        'sans': ['Inria Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

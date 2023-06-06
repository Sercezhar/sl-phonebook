/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
      },
      backgroundImage: {
        hero: "url('/illustrations/connection.svg')",
        'error-404': "url('/illustrations/website-down.svg')",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#4A0E0E', // Deep Maroon
          burgundy: '#800020',
          saffron: '#F4C430',
          gold: '#D4AF37',
        },
        secondary: {
          cream: '#FFFDD0',
          beige: '#F5F5DC',
          offwhite: '#FAF9F6',
          brown: '#5C4033',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'indian-pattern': "url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')",
      }
    },
  },
  plugins: [],
}

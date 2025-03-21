/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#567EBB',
        secondary: '#9C9497',
        'fill-button-unselected': '#FEFEFE',
        'search-bar': '#F5F5F5',
      },
    },
  },
  plugins: [],
};

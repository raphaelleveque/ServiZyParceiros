/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        syne: 'Syne',
        urbanist: 'Urbanist',
      },
      colors: {
        // Cor principal
        primary: '#567ebb',

        // Cores de texto
        heading: '#212121',
        body: '#424242',
        secondary: '#697586',
        tertiary: '#9C9497',

        // Backgrounds
        white: '#FFFFFF',
        input: '#F5F5F5',
        subtle: '#9C94971A',

        // Paleta completa
        dark: '#1f1f20',
        highlight: '#2b4c7e',
        light: '#606d80',
        contrast: '#dce0e6',
      },
    },
  },
  plugins: [],
};

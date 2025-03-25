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
        // Cor principal usada para botões e elementos de destaque
        primary: '#567ebb', // Azul médio

        // Cores de texto
        heading: '#212121', // Cinza muito escuro, quase preto
        body: '#424242', // Cinza escuro neutro
        secondary: '#697586', // Cinza azulado médio
        tertiary: '#9C9497', // Cinza claro amarronzado

        // Backgrounds
        white: '#FFFFFF', // Branco puro
        input: '#F5F5F5', // Cinza muito claro
        subtle: '#9C94971A', // Cinza claro translúcido
        'subtle-border': '#E5E7EB', // Cinza bem claro com leve tom azulado

        // Paleta completa
        dark: '#1f1f20', // Preto com tom levemente azulado
        highlight: '#2b4c7e', // Azul escuro intenso
        light: '#606d80', // Cinza azulado médio-escuro
        contrast: '#dce0e6', // Cinza bem claro, quase branco
      },
    },
  },
  plugins: [],
};

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        main: ['Quicksand', ...defaultTheme.fontFamily.sans],
        secondary: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#00B6FE',
        primaryHover: '#008efe',
        primaryDark: '#1f2323',
        primaryLight: '#B2E9FF',
        yellowBeta: '#fed900',
        purpleBeta: '#e000ec',
        greenBeta: '#6ebb31',
      },
    },
  },
  variants: {
    extend: {
      shadow: ['hover', 'focus'],
    },
  },
  plugins: [],
};

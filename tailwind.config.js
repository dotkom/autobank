const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: `media`,
  theme: {
    screens: {
      '2xs': '390px',
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        lato: ['Lato'],
        garamond: ['Garamond'],
      },
      colors: {
        online: {
          blue: {
            50: '#e7eef1',
            100: '#cedde3',
            200: '#9dbac7',
            300: '#6d98ac',
            400: '#3c7590',
            500: '#0b5374',
            600: '#09425d',
            700: '#073246',
            800: '#04212e',
            900: '#021117',
          },
          orange: {
            50: '#fff8ee',
            100: '#fef1de',
            200: '#fde2bd',
            300: '#fcd49b',
            400: '#fbc57a',
            500: '#fab759',
            600: '#c89247',
            700: '#966e35',
            800: '#644924',
            900: '#322512',
          },
        },
      },
    },
    theme: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
        },
      },
      extend: {
        height: {
          128: '32rem',
        },
        spacing: {
          128: '32rem',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
}

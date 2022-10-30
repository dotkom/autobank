import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  body: {
    margin: 0,
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
  },
  '*': {
    fontFamily: 'Montserrat',
    theme: {
      colors: {
        blue50: '#e7eef1',
        blue100: '#cedde3',
        blue200: '#9dbac7',
        blue300: '#6d98ac',
        blue400: '#3c7590',
        blue500: '#0b5374',
        blue600: '#09425d',
        blue700: '#073246',
        blue800: '#04212e',
        blue900: '#021117',
      },
    },
    fonts: {},
  },
})

import { styled } from '@stitches/react'

const StitchesButton = styled('button', {
  width: '80px',
  height: '36px',
  margin: 'auto',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  textAlign: 'center',
  backgroundColor: '#153E75',
  borderRadius: '4px',
  padding: '2px 4x',
  marginTop: '6px',

  '&:hover': {
    filter: 'brightness(80%)',
    backdropFilter: 'brightness(50%)',
  },

  variants: {
    color: {
      blue: {
        background: '#153E75',
      },
      yellow: {
        background: '#FFC300',
      },
      green: {
        background: '#36B37E',
      },
      red: {
        background: '#F43145',
      },
      lightblue: {
        background: '#3A86FF',
      },
      gray: {
        background: '#4C566A',
      },
    },
    size: {
      small: {
        width: '80px',
        height: '36px',
      },
      medium: {
        width: '120px',
        height: '50px',
      },
      big: {
        width: '200px',
        height: '40px',
      },
    },
  },
  defaultVariants: {
    color: 'blue',
    size: 'small',
  },
})

export default StitchesButton

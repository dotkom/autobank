import { styled } from '@stitches/react'

const StitchesButton = styled('button', {
  width: '80px',
  height: '36px',
  margin: 'auto',
  color: 'white',
  textAlign: 'center',
  backgroundColor: '#153E75',
  borderRadius: '4px',
  fontSize: '13px',

  variants: {
    color: {
      blue: {
        color: '#153E75',
      },
      yellow: {
        color: '#FFC300',
      },
      green: {
        color: '#36B37E',
      },
      red: {
        color: '#F43145',
      },
      lightblue: {
        color: '#3A86FF',
      },
      gray: {
        color: '#4C566A',
      },
    },
  },
})

export default StitchesButton

import { createStitches } from '@stitches/react';
import { Birthstone, Libre_Baskerville } from 'next/font/google';

const birthstoneFont = Birthstone({ subsets: ['latin'], weight: '400' })
const baskervilleFont = Libre_Baskerville({ subsets: ['latin'], weight: '400' })

export const { styled, globalCss, theme } = createStitches({
  theme: {
    colors: {
      primary: '#F4A6A6',
      secondary: '#FADADD',
      background: '#FFFFF0',
      backgroundLighter : '#FDFDFD',
      footer: '#D7CCC8',
      textColor: '#000000'
    },
    fonts: {
        body: `${baskervilleFont.style.fontFamily}, sans-serif`,
        title: `${birthstoneFont.style.fontFamily}, sans-serif`
    },
    fontSizes: {
      s: '2vh',
      m: '3vh',
      l: '5vh',
      xl: '7vh',
      xxl: '9vh'
    },
  },
});


export const globalStyles = globalCss({
    '*': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    body: {
      fontFamily: '$body',
      backgroundColor: '$background',
      color: '$secondary',
    },
    principal: {
      fontFamily: '$title',
      color: '$FDFDFD',
    },
    h1: {
      fontFamily: '$title',
      color: '$backgroundLighter',
    },
    p: {
      fontFamily: '$body',
      color: '$textColor',
    },
  });
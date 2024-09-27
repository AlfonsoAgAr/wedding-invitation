import { createStitches } from '@stitches/react';
import { Pacifico } from 'next/font/google';

const pacificoFont = Pacifico({ subsets: ['latin'], weight: '400' })

export const { styled, globalCss, theme } = createStitches({
  theme: {
    colors: {
      primary: '#F4A6A6',
      secondary: '#FADADD',
      background: '#FFFFF0',
      backgroundLighter : '#FDFDFD',
      footerBg: '#D7CCC8',
      textColor: '#000000'
    },
    fonts: {
        body: `${pacificoFont.style.fontFamily}, sans-serif`  // Fuente principal
    },
    fontSizes: {
      sm: '12px',
      md: '16px',
      lg: '20px',
      xl: '24px',
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
    h1: {
      fontFamily: '$heading',
      color: '$primary',
    },
    p: {
      fontFamily: '$body',
      color: '$textColor',
    },
  });
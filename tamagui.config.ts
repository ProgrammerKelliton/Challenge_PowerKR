// Styles
import { createFont, createTamagui, createTokens } from '@tamagui/core';
import { createMedia } from 'tamagui';

const interFont = createFont({
  family: 'Inter',
  size: {
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    30: 30,
  },
  lineHeight: {
    1: 18,
    2: 20,
    3: 21,
    4: 24,
    5: 30,
    6: 37.5,
  },
  weight: {
    1: '400',
    2: '500',
    3: '600',
    4: '700',
  },
  letterSpacing: {
    1: 0,
    2: -1,
  },
  face: {
    600: { normal: 'InterBold' },
  },
});

export const tokens = createTokens({
  size: {
    small: 64,
    true: 30,
    large: 160,
    64: 64,
  },
  space: {
    4: 4,
    9: 9,
    12: 12,
    15: 15,
    24: 24,
    32: 32,
    48: 48,
    72: 72,
  },
  radius: { 12: 12, 24: 24 },
  zIndex: { 0: 0, 1: 100, 2: 200 },
  color: {
    white: '#fff',
    black: '#182E43',
    slate: '#CDD5DF',
    'gray-900': '#364152',
    'gray-200': '#9AA4B2',
    'gray-400': '#4B5565',
    brand: '#F7B519',
    'black-2': '#121926',
  },
});

export const config = createTamagui({
  fonts: {
    heading: interFont,
    body: interFont,
  },
  tokens,

  themes: {
    light: {
      bg: '#f2f2f2',
      color: tokens.color.black,
    },
    dark: {
      bg: '#111',
      color: tokens.color.white,
    },
  },
  media: createMedia({
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    short: { maxHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  }),
  shorthands: {
    px: 'paddingHorizontal',
    f: 'flex',
    m: 'margin',
    w: 'width',
    bg: 'backgroundColor',
  } as const,
});

type AppConfig = typeof config;

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}

  interface TypeOverride {
    groupNames(): 'a' | 'b' | 'c';
  }
}

export default config;

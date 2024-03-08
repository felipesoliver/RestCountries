const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx,css}',
    './src/pages/**/*.{js,jsx,ts,tsx,css}',
    './src/layouts/**/*.{js,jsx,ts,tsx,css}',
    './src/components/**/*.{js,jsx,ts,tsx,css}',
    './src/helpers/**/*.{js,jsx,ts,tsx,css}',
    './src/contexts/**/*.{js,jsx,ts,tsx,css}',
    './src/styles/**/*.css',
  ],
  theme: {
    colors: {
      current: {
        DEFAULT: 'currentColor',
      },
      transparent: 'transparent',
      black: '#000000',
      beige: {
        DEFAULT: '#D8CFC1',
        light: '#E7DDCC',
      },
      blue: {
        DEFAULT: '#77C3EC',
        light: '#B8E2F2',
        lightness: '#EEFAFF'
      },
      neutral: {
        DEFAULT: '#FFFFFF',
        light: '#1C1C1C'
      },
      danger: '#FFD600',
      error: '#E90016',
      success: '#00AB27',
      gray: {
        DEFAULT: '#1C1C1C',
        light: '#797979',
      },
    },
    screens: {
      sm: '440px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '1.5xl': '1440px',
      '2xl': '1536px',
      '3xl': '1920px',
    },
    extend: {
      keyframes: {
        fadein: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
      },
      animation: {
        fadein: 'fadein .3s cubic-bezier(0.455, 0.03, 0.515, 0.955) forwards',
      },
      fontFamily: {
        outfit: ['var(--font-outfit)', ...fontFamily.sans],
        roboto: ['var(--font-roboto)', ...fontFamily.sans],
      },
      fontSize: {
        0: '0px',
      },
      transitionDelay: {
        400: '400ms',
        600: '600ms',
        800: '800ms',
        1200: '1200ms',
        1400: '1400ms',
        1600: '1600ms',
        1800: '1800ms',
        2000: '2000ms',
      },
      backgroundImage: {
        select: "url('/images/arrow-down.svg')",
      },
    },
  },
  safelist: [
    'font-outfit',
    'font-roboto',
    {
      pattern: /delay-/,
      variants: ['md'],
    },
    {
      pattern:
        /(border|text|bg)-(transparent|beige-light|blue|blue-light|beige|beige-light|neutral|neutral-light|black)$/,
    },
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

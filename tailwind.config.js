/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        chartreuse: '#D6E041',
        primaryGreen: '#406646',
        darkGreen: '#183620',
        darkEmerald: '#082630',
        orangeRed: '#CB3032',
        redBrown: '#9B4819',
        yellowParchment: '#FBFAF0',
        orangeParchment: '#F4F1E8',
        magentaPink: '#861D5B',
      },
      boxShadow: {
        vignette: '0 0 200px white inset',
      },
      transitionDuration: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
    },
    fontFamily: {
      display: ['the-seasons', 'sans-serif'],
      body: ['IBM Plex Mono'],
    },
  },
  variants: {
    extend: {},
    display: ['responsive', 'group-hover', 'group-focus'],
  },
  plugins: [],
};

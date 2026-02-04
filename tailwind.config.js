/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
        manrope: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#99EA48',
          dark: '#77B248',
          light: '#BAE289',
        },
        dark: {
          DEFAULT: '#010205',
          900: '#020609',
          800: '#191F33',
        },
        gray: {
          DEFAULT: '#878C91',
          light: '#9B9B9C',
          lighter: '#F0F0F0',
        },
        blue: {
          accent: '#45A7DE',
        },
        orange: {
          accent: '#EA5F38',
        },
        purple: {
          accent: '#6A26F1',
        },
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}

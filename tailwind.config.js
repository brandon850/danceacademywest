/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2bf2f4',
          light: '#7ff8f9',
          dark: '#00c8ca',
        },
        aurora: {
          purple: '#a78bfa',
          cyan:   '#67e8f9',
          pink:   '#f0abfc',
          rose:   '#fda4af',
        },
      },
      fontFamily: {
        sans:    ['Nunito', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float':    'float 6s ease-in-out infinite',
        'fade-up':  'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-14px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

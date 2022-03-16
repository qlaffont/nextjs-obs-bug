// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  safelist: ['text-info', 'text-error', 'text-success', 'bg-info', 'bg-error', 'bg-success', 'space-y-3'],
  theme: {
    fontFamily: {
      sans: ['"Kanit"', '"Helvetica"', '"Arial"', 'sans-serif'],
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        error: '#e55039',
        info: '#4a69bd',
        success: '#78e08f',
        warning: '#f6b93b',
        transparent: 'transparent',
        discord: '#7289DA',
        dark: {
          100: '#0D0C22',
          80: '#3D3D4E',
          60: '#6E6D7A',
          40: '#9E9EA7',
          20: '#CFCED3',
          10: '#E7E7E9',
          5: '#F3F3F4',
        },
      },
      animation: { animatebg: 'animatebg 20s ease infinite' },
      keyframes: {
        animatebg: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
      },
      backgroundSize: { '400%': '400%' },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('tailwind-animatecss'),
    plugin(function ({ addComponents, theme }) {
      const components = {
        '.title': {
          fontSize: '2rem',
          fontWeight: '800',
          fontFamily: theme('fontFamily.anton'),
          textTransform: 'uppercase',
          color: theme('colors.white'),
        },
        '.subtitle': {
          fontSize: '1.5rem',
          fontWeight: '500',
          fontFamily: theme('fontFamily.anton'),
          textTransform: 'uppercase',
          color: theme('colors.white'),
        },
        '.small': {
          fontSize: '0.85rem',
        },
      };

      addComponents(components);
    }),
  ],
};

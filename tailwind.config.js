module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    transitionTimingFunction: {
      'menu-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};

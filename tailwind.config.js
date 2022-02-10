module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    transitionTimingFunction: {
      'menu-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    extend: {},
  },
  plugins: [],
};

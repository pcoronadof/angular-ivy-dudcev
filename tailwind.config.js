module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  purge: {
    enabled: true,
    content: ['./src/**/*.html', './src/**/*.scss'],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};

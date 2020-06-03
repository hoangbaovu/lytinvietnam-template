module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-preset-env': {
      browsers: ['last 2 versions', '> 1%', 'IE 10'],
    },
    'cssnano': {},
  },
};

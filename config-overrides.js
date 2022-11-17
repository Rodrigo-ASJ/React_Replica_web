const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@assets': 'src/assets',
    '@pages': 'src/pages',
    '@shared': 'src/shared'
  })(config);

  return config;
};
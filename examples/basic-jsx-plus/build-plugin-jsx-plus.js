const jsxPlus = require('build-plugin-jsx-plus');

module.exports = ({ onGetWebpackConfig }) => {
  onGetWebpackConfig(config => {
    config
      .plugin('jsxPlus')
        .use(jsxPlus);
  });
};

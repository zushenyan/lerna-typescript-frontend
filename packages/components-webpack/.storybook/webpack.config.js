const buildConfig = require('../webpack.config');
const rules = require('../webpack.rules');

module.exports = ({ config }) => {
  config.module.rules = [
    rules.ts,
    rules.sourceMap,
    rules.rawImageTypes,
    rules.svg,
    {
      test: /\.stories\.tsx?$/,
      loader: '@storybook/addon-storysource/loader',
      options: { parser: 'typescript' },
      enforce: 'pre',
    },
  ];
  config.devtool = buildConfig.devtool;
  config.resolve.extensions = buildConfig.resolve.extensions;
  config.resolve.alias = buildConfig.resolve.alias;
  return config;
};

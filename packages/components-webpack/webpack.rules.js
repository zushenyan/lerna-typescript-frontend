const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports.eslint = {
  test: /\.tsx?$/,
  loader: 'eslint-loader',
  enforce: 'pre',
  exclude: /node_modules/,
};

module.exports.ts = {
  test: /\.tsx?$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/,
  options: {
    getCustomTransformers: () => ({ before: [styledComponentsTransformer] }),
  },
};

module.exports.lintStyledComponents = {
  test: /\.tsx?$/,
  loader: 'stylelint-custom-processor-loader',
  exclude: /node_modules/,
  // enforce: 'pre',
};

module.exports.sourceMap = {
  test: /\.js$/,
  loader: 'source-map-loader',
  enforce: 'pre',
};

module.exports.rawImageTypes = {
  test: /\.(png|jpg|jpeg|gif)$/,
  loader: 'url-loader',
  options: {
    limit: 1,
  },
};

module.exports.svg = {
  test: /\.svg$/,
  loader: '@svgr/webpack',
};

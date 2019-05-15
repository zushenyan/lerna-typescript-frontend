module.exports.ts = {
  test: /\.tsx?$/,
  use: ['awesome-typescript-loader', 'eslint-loader'],
};

module.exports.sourceMap = {
  test: /\.js$/,
  enforce: 'pre',
  loader: 'source-map-loader',
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

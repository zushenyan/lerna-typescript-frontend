const rules = require('./webpack.rules');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  module: {
    rules: [rules.ts, rules.sourceMap, rules.rawImageTypes, rules.svg],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};

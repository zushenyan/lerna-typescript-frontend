const rules = require('./webpack.rules');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    path: `${__dirname}/dist`,
    library: 'components',
    libraryTarget: 'umd',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': `${__dirname}/src`,
    },
  },
  module: {
    rules: [
      rules.eslint,
      rules.lintStyledComponents,
      rules.ts,
      rules.sourceMap,
      rules.rawImageTypes,
      rules.svg,
    ],
  },
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      amd: 'react',
      umd: 'react',
      commonjs: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
      commonjs: 'react-dom',
    },
  },
};

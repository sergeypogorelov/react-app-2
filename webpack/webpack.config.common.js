const path = require('path');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(
  {},
  {
    entry: {
      main: path.resolve(__dirname, '../src/client/index.tsx'),
    },
    devServer: {
      contentBase: path.resolve(__dirname, '../dist'),
      port: 4200,
    },
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          use: ['ts-loader'],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
    },
  }
);

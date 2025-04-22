const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: {
  //   index: './src/index.js',
  //   another: './src/another-module.js',
  // },
  entry: {
    index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  mode: 'development',
  devtool: 'inline-source-map',
}
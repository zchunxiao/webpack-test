const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    library: "webpackNumbers"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new BundleAnalyzerPlugin()
  ],
  externals: {
    lodash: 'lodash', // 将 lodash 视为外部依赖
  },
}
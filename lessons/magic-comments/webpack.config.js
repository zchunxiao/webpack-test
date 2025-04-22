const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { optimization } = require('../split-demo/webpack.config')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),

    clean: true
  },
  mode: 'production',
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      hash: true,
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1, // 共享的模块至少被引用一次
    },
  }

}
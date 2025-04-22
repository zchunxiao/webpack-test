const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

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
  ]
}
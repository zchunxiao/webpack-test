const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // entry: {
  //   main: './src/index.js',
  //   moduleA: './src/moduleA.js',
  //   moduleB: './src/moduleB.js',
  // },
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 对所有类型的 chunk 进行拆分
      minSize: 20000, // 最小文件大小
      maxSize: 0, // 不限制最大文件大小
      minChunks: 1, // 被引用的最小次数
      maxAsyncRequests: 30, // 最大异步请求数
      maxInitialRequests: 30, // 最大初始请求数
      automaticNameDelimiter: '~', // 自动命名的分隔符
    },
  },
  mode: 'production', // 设置为生产模式
  plugins: [
    //new BundleAnalyzerPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
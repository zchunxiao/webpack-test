const path = require('path');

module.exports = {
  entry: './math.js', // 确保路径正确
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出路径
    libraryTarget: 'commonjs2'
  },
  mode: 'development', // 或 'production'
  module: {
    rules: [
      {
        test: /\.m?js$/, // 匹配 JavaScript 文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 使用 Babel 转换 ES6+
          options: {
            presets: ['@babel/preset-env'], // 适配最新 JavaScript 语法
          },
        },
      },
    ],
  },
};
import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配所有 .ts 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: 'ts-loader', // 使用  ts Loader
      },
      {
        test: /\.js$/, // 匹配所有 .js 文件
        exclude: /node_modules/, // 排除 node_modules 目录
        use: {
          loader: 'babel-loader', // 使用 Babel Loader
        },
      },
      {
        test: /\.css$/, // 匹配所有 .css 文件
        use: [
          //'style-loader', // 将 CSS 插入到 DOM 中
          MiniCssExtractPlugin.loader, // 提取 CSS 为独立文件
          'css-loader', // 解析 CSS 文件
        ],// loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)。
      },
      {
        test: /\.(png|jpg|gif|svg)$/, // 匹配图像文件
        use: {
          loader: 'file-loader', // 使用 File Loader
          options: {
            // name: '[path][name].[ext]', // 保留原始文件名和扩展名
            name: '[name]-[hash].[ext]', // 只保留文件名和扩展名
            outputPath: 'asserts/', // 输出到 images 目录,相对于output的path,此处是dist
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'asserts/styles.css', // 输出的 CSS 文件名,相对于output的path,此处是dist
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    hot: true,
  }
};
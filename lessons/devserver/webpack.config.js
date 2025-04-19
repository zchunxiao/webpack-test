import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: {
    about: './src/about.js',
    index: './src/index.js',
    new: './src/new.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // 每次构建前清理输出目录
    library: {
      type: 'module', // 设置为 ESM
    },
  },
  experiments: {
    outputModule: true, // 启用 ESM 输出
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, 'dist'), // 提供静态文件的目录
    compress: true, // 启用 gzip 压缩
    port: 9000, // 服务器端口
    open: true, // 自动打开浏览器
    hot: true, // 启用热模块替换
    historyApiFallback: true, // 支持 HTML5 History API
  },
  plugins: [
    //这里会自动注入js文件，不需要手动引入
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/about.html',
      filename: 'about.html',
      chunks: ['about'],
    }),
    new HtmlWebpackPlugin({
      template: './src/new.html',
      filename: 'new.html',
      chunks: ['new'],
    }),
  ],
};
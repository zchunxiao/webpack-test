import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export default {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    clean: true,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Custom template",
      template: './index.html', // 指定模板文件
      filename: 'index.html',    // 生成的 HTML 文件名
      hash: true, // 在文件名后添加 hash 值
    })
  ]
}
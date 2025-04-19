// const path = require('path');

// module.exports = {
//   entry: './src/index.js', // 入口文件
//   output: {
//     filename: 'bundle.js', // 输出文件名
//     path: path.resolve(__dirname, 'dist'), // 输出目录
//     library: {
//       type: 'module', // 设置输出为 ESM
//     },
//     clean: true, // 清除上一次构建的输出
//   },
//   experiments: {
//     outputModule: true, // 启用模块输出
//   },
//   externals: {
//     jquery: 'jQuery', // 将 jQuery 视为外部依赖
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader', // 使用 Babel 转译
//         },
//       },
//     ],
//   },
// };



import path from "path"
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    library: {
      type: "module"
    }
  },
  externals: {
    jquery: 'jquery', // 将 jQuery 视为外部依赖 不需要npm install
  },
  experiments: {
    outputModule: true, // 允许输出 ESM 格式的模块
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // 使用 Babel 转译
        },
      },
    ],
  },
};
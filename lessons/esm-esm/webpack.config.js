// const path = require('path');

// module.exports = {
//   entry: './math.js', // 入口文件
//   output: {
//     filename: 'bundle.js', // 输出文件名
//     path: path.resolve(__dirname, 'dist'), // 输出路径
//     library: {
//       type: 'module', // 设置为 ESM
//     },
//   },
//   experiments: {
//     outputModule: true, // 启用模块输出
//   },
//   mode: 'development', // 开发模式
// };

import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './math.js', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出路径
    library: {
      type: 'module', // 设置为 ESM
    },
  },
  experiments: {
    outputModule: true, // 启用模块输出
  },
  mode: 'development', // 开发模式


}

/**
 * library.type: 'module'，将打包结果设置为 ESM 模块
 * 在 Webpack 5 中，使用 library.type 来指定输出库的类型，而不再使用 libraryTarget。
 * 所以，如果你设置了 library.type: 'module'，就不需要再设置 libraryTarget。
 * 
 *
 * webpack5，使用 experiments.outputModule: true，启用模块输出
 * library.type: 'module'必须设置 experiments.outputModule: true，否则打包结果会报错
 */
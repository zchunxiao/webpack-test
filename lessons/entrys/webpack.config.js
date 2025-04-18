import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  entry: {
    "about": "./src/about.js",
    "home": "./src/home.js",
    "new": "./src/new.js"
  },
  output: {
    filename: "[name].bundle.js",
    path: __dirname + "/dist",
    clean: true, // 每次构建前清理输出目录
    library: {
      type: 'module', // 设置为 ESM
      // name: "[name]" //使用入口名称作为库名称,这里不需要使用，对于使用ES Module的输出，通常不需要为每个入口指定库名称
      //对于使用模块化输出的库，不需要为每个入口指定名称。
    }
  },
  experiments: {
    outputModule: true// 启用 ESM 输出
  },
  mode: 'development'
}
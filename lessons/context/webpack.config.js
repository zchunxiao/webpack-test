import path from 'path';
import { fileURLToPath } from 'url';

// 获取当前文件的目录名
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    library: {
      type: "module",
      // export: "default",
    },
  },
  experiments: {
    outputModule: true,// 启用 ESM 输出
  },
  mode: "production",
  context: __dirname + "/src" // 绝对路径地址,设置上下文  如果这一行不写的话，entry的需要改成"./src/index.js
}

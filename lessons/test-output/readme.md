# html-wenpack-plugin

1. 在执行构建前，虽然在 dist 文件夹已经存在了自定义的 index.html 文件,但是 HtmlWebpackPlugin 会根据配置自动生成一个 index.html 文件，并自动引入打包后的 js 文件，所以不需要手动引入打包后的 js 文件。
2. 创建了一个全新的文件，而所有的 bundle 都已自动添加到其中。

```js
// webpack.config.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

# 常用的代码分离方法有三种：

- 入口起点：使用 entry 配置手动地分离代码。
- 防止重复：使用 入口依赖 或者 SplitChunksPlugin 去重和分离 chunk。
- 动态导入：通过模块的内联函数调用分离代码。

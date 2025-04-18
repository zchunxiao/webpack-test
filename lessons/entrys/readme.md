# 多入口打包 ESM

多入口打包，就是打包多个入口文件，每个入口文件对应一个输出文件。

## 多入口打包配置

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/other.html",
      filename: "other.html",
      chunks: ["other"],
    }),
  ],
};
```

# devServer 配置

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/other.html",
      filename: "other.html",
      chunks: ["other"],
    }),
  ],
};
```

# ESM 模块化

ESM 模块化是 ES6 提供的一种模块化方案，它允许我们在 JavaScript 中使用 `import` 和 `export` 关键字来导入和导出模块。

## ESM 模块化特点

1. ESM 模块化是静态的，即在编译时就已经确定了模块的依赖关系，而 CommonJS 模块化是动态的，即在运行时才确定模块的依赖关系。因此，ESM 模块化可以更好地进行静态分析，从而提高代码的执行效率。
2. ESM 模块化支持异步加载，可以在需要时才加载模块，从而提高代码的加载速度。
3. ESM 模块化支持循环依赖，而 CommonJS 模块化不支持循环依赖。
4. ESM 模块化支持动态导入，可以在运行时动态导入模块，而 CommonJS 模块化不支持动态导入。

## ESM 模块化使用

```js
// 导出模块
export const foo = "foo";
export const bar = "bar";

// 导入模块
import { foo, bar } from "./module.js";
console.log(foo, bar);
```

## ESM 模块化打包

使用 webpack 打包 ESM 模块化代码时，需要配置 webpack.config.js 文件，指定入口文件和输出文件。

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
};
```

## ESM 模块化打包注意事项

1. ESM 模块化打包时，需要使用 `babel-loader` 来将 ES6 代码转换为 ES5 代码，以便在浏览器中运行。
2. ESM 模块化打包时，需要使用 `babel-preset-env` 来指定需要转换的 ES6 特性，以便在浏览器中运行。
3. ESM 模块化打包时，需要使用 `babel-plugin-transform-runtime` 来解决 ESM 模块化打包时的循环依赖问题。
4. ESM 模块化打包时，需要使用 `babel-plugin-syntax-dynamic-import` 来支持动态导入。
5. ESM 模块化打包时，需要使用 `babel-plugin-transform-es2015-modules-commonjs` 来将 ESM 模块化代码转换为 CommonJS 模块化代码，以便在浏览器中运行。
6. ESM 模块化打包时，需要使用 `babel-plugin-transform-es2015-modules-umd` 来将 ESM 模块化代码转换为 UMD 模块化代码，以便在浏览器中运行。
7. ESM 模块化打包时，需要使用 `babel-plugin-transform-es2015-modules-amd` 来将 ESM 模块化代码转换为 AMD 模块化代码，以便在浏览器中运行。
8. ESM 模块化打包时，需要使用 `babel-plugin-transform-es2015-modules-systemjs` 来将 ESM 模块化代码转换为 SystemJS 模块化代码，以便在浏览器中运行。

# ESM 模块化打包示例

```js
// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: [
              "@babel/plugin-transform-runtime", // 解决循环依赖问题
              "@babel/plugin-syntax-dynamic-import", // 支持动态导入
              "@babel/plugin-transform-es2015-modules-commonjs", // 将 ESM 模块化代码转换为 CommonJS 模块化代码
              "@babel/plugin-transform-es2015-modules-umd", // 将 ESM 模块化代码转换为 UMD 模块化代码
              "@babel/plugin-transform-es2015-modules-amd", // 将 ESM 模块化代码转换为 AMD 模块化代码
              "@babel/plugin-transform-es2015-modules-systemjs", // 将 ESM 模块化代码转换为 SystemJS 模块化代码
            ],
          },
        },
      },
    ],
  },
};
```

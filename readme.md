# webpack

这里只安装 webpack,不安装 webpack-cli。不安装 webpack-cli 是因为 webpack-cli 是 webpack 的命令行工具，而 webpack 本身是一个模块打包工具，它本身并不提供命令行工具。因此，如果你只是想使用 webpack 进行模块打包，那么只需要安装 webpack 即可。

# 安装

`npm install webpack`
如果不安装 webpack-cli，你仍然可以通过 JavaScript API 来使用 Webpack，这通常适用于自定义构建脚本。

## 注意

- 一般是建议同时使用 webpack-cli 和 webpack 的，因为 webpack-cli 提供了命令行工具，可以方便地使用 webpack 进行打包、构建等操作。
- 如果不使用 webpack-cli，那么需要使用 webpack 提供的 JavaScript API 来手动调用 webpack 进行打包。
- 如果不使用 webpack-cli，那么需要手动配置 webpack 的配置文件，例如 webpack.config.js。
- 如果不使用 webpack-cli，那么需要手动调用 webpack 进行打包，例如`webpack({ entry: './src/index.js', output: { filename: 'bundle.js', path: __dirname + '/dist' } })`。

# webpack libraryTarget

webpack 的 libraryTarget 选项用于指定输出库的格式，它有以下几个选项：

- var：默认值，将库暴露为一个变量，可以在全局访问。
- commonjs：将库暴露为一个 CommonJS 模块，可以在 Node.js 环境中访问。
- commonjs2：将库暴露为一个 CommonJS2 模块，可以在 Node.js 环境中访问。
- amd：将库暴露为一个 AMD 模块，可以在 RequireJS 环境中访问。
- umd：将库暴露为一个 UMD 模块，可以在浏览器和 Node.js 环境中访问。
- this：将库暴露为一个属性，可以在当前作用域中访问。
- window：将库暴露为一个全局变量，可以在浏览器环境中访问。
- global：将库暴露为一个全局变量，可以在 Node.js 环境中访问。
- jsonp：将库暴露为一个 JSONP 模块，可以在浏览器环境中访问。
  ![alt text](image.png)

## commonjs2 和 commonjs 的区别

commonjs2 和 commonjs 都是 CommonJS 模块规范，它们的主要区别在于模块的导出方式。

- commonjs：使用 `module.exports` 导出模块，例如：

```javascript
module.exports = {
  foo: "bar",
};
```

- commonjs2：使用 `module.exports` 导出模块，但会自动将模块包装在一个函数中，例如：

```javascript
module.exports = function () {
  return {
    foo: "bar",
  };
};
```

commonjs2 的这种导出方式可以避免一些问题，例如循环依赖和命名冲突。因此，在大多数情况下，建议使用 commonjs2。

# webpack mode

webpack 的 mode 选项用于指定构建模式，它有以下几个选项：

- development：开发模式，默认值。会启用一些优化选项，例如代码分割和模块热替换。
- production：生产模式。会启用一些优化选项，例如代码压缩和 Tree Shaking。
- none：不启用任何优化选项。

# webpack entry

webpack 的 entry 选项用于指定入口文件，它有以下几个选项：

- string：指定一个入口文件，例如 './src/index.js'。webpack 会从这个文件开始构建依赖图。

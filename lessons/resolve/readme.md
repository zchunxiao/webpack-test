# 解析(Resolve)

设置模块如何被解析。
这些解析选项会影响 `import` 或 `require` 语句。

## `resolve.alias`

类型: `object`

创建 import 或 require 的别名，来确保模块导入变得更简单。

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    alias: {
      Utilities: path.resolve(__dirname, "src/utilities/"),
      Templates: path.resolve(__dirname, "src/templates/"),
      Components: path.resolve(__dirname, "src/components/"),
    },
  },
};
```

现在，`import Utility from './utilities/utility';` 可以写成 `import Utility from 'Utilities/utility';`。

### `resolve.aliasFields`

类型: `string[]`

指定解析包中字段时的别名。

默认值: `['browser', 'module', 'main']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    aliasFields: ["browser"],
  },
};
```

### `resolve.cache`

类型: `boolean | object`

启用/禁用或配置模块文件系统缓存。

默认值: `true`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    cache: {
      //...
    },
  },
};
```

### `resolve.cachePredicate`

类型: `function(modulePath, options) => boolean`

控制缓存哪些模块。

默认值: `(modulePath, options) => true`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    cachePredicate: (modulePath, options) => {
      //...
    },
  },
};
```

### `resolve.descriptionFiles`

类型: `string[]`

解析描述文件。

默认值: `['package.json']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    descriptionFiles: ["package.json"],
  },
};
```

### `resolve.enforceExtension`

类型: `boolean | string`

如果为 `true`，将不允许不带扩展名的解析。

默认值: `false`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    enforceExtension: true,
  },
};
```

### `resolve.enforceModuleExtension`

类型: `boolean | string`

如果为 `true`，将不允许不带 `.js` 扩展名的模块解析。

默认值: `false`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    enforceModuleExtension: true,
  },
};
```

### `resolve.extensions`

类型: `string[]`

自动解析确定的扩展。能够使用 `*` 通配符。

默认值: `['.wasm', '.mjs', '.js', '.json', '.jsx']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
};
```

### `resolve.mainFiles`

类型: `string[]`

解析目录时要使用的文件名。能够使用 `*` 通配符。

默认值: `['index']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    mainFiles: ["main", "index"],
  },
};
```

### `resolve.mainFields`

类型: `string[]`

解析包时选择 `package.json` 中的字段。
当从 `node_modules` 文件夹中解析模块时，会根据 `resolve.mainFields` 中指定的字段，从上到下搜索，直到找到为止。

默认值: `['browser', 'module', 'main']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    mainFields: ["browser", "module", "main"],
  },
};
```

### `resolve.modules`

类型: `string[]`

指定解析模块时应该搜索的目录。

绝对路径和相对路径都可以。

默认值: `['node_modules']`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    modules: ["node_modules", path.resolve(__dirname, "src")],
  },
};
```

### `resolve.plugins`

类型: `function`

允许解析插件。

默认值: `[]`

```js
// webpack.config.js
module.exports = {
  //...
  resolve: {
    plugins: [new MyPlugin()],
  },
};
```

# HMR 目前对 outputModule 的支持有限，因此需要关闭 outputModule

开启会导致热更新失败

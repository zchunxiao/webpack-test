# contexr

基础目录，绝对路径，用于从配置中解析入口点
默认使用 Node.js 进程的当前工作目录，但是推荐在配置中传入一个值。这使得你的配置独立于 CWD(current working directory, 当前工作目录)。

## 目录结构

```
├── context
│   ├── base
│   │   ├── index.js
│   │   └── readme.md
│   ├── index.js
│   └── readme.md
```

## base

基础目录，绝对路径，用于从配置中解析入口点

### index.js

```js
const path = require("path");

/**
 * @param {string} dir
 * @param {string} entry
 * @returns {string}
 */
function resolve(dir, entry) {
  return path.resolve(dir, entry);
}

module.exports = {
  resolve,
};
```

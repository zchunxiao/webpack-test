# 去掉 main.js

去掉 package.json 中的 main 字段,防止意外发布。

# "private": true,

确保安装包是私有的

# csv-loader xml-loader

现在可以导入这四种类型的数据（JSON, CSV, TSV, XML）中的任何一种了，所导入的 Data 变量，将包含可直接使用的已解析的 JSON：

- 只有在使用 JSON 模块默认导出时会没有警告。

```
// 没有警告
import data from './data.json';

// 显示警告，规范不允许这样做。
import { foo } from './data.json';
```

# 自定义 JSON 模块解析器

通过使用 自定义解析器 替代特定的 webpack loader，可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入。

```
npm install toml yamljs json5 --save-dev
```

# import()

动态加载

# html-webpack-pluin 参数

- template
  模板 HTML 文件，可以是绝对路径或者相对路径
- filename
  输出 HTML 文件名，默认为 index.html
- inject
  是否将打包生成的 js 文件注入到 HTML 文件中，默认为 true
- title
  HTML 文件的标题，默认为空，需要使用<%= htmlWebpackPlugin.options.title =>
- favicon
  指定 HTML 文件的 favicon 图标，默认为空

# script defer

defer 属性表示延迟执行引入的 JavaScript，即等到整个页面都解析完毕后再执行。defer 属性可以用于引入外部 JavaScript 文件，也可以用于在 HTML 文件中嵌入 JavaScript 代码。

当使用 defer 属性引入外部 JavaScript 文件时，浏览器会异步加载该文件，但不会阻塞 HTML 文件的解析。当 HTML 文件解析完毕后，浏览器会按照引入顺序执行这些 JavaScript 文件。这意味着，即使 JavaScript 文件很大，也不会影响 HTML 文件的解析速度。

## 作用

1. 延迟执行：defer 属性可以延迟执行引入的 JavaScript，直到整个页面都解析完毕后再执行。这样可以避免阻塞页面的渲染，提高页面加载速度。
2. 按顺序执行：defer 属性可以确保引入的 JavaScript 文件按照引入顺序执行，避免因执行顺序导致的错误。
3. 异步加载：defer 属性可以异步加载引入的 JavaScript 文件，不会阻塞 HTML 文件的解析。这意味着，即使 JavaScript 文件很大，也不会影响 HTML 文件的加载速度。

# script async

async 属性表示异步执行引入的 JavaScript，即不阻塞 HTML 文件的解析，并在下载完成后立即执行。async 属性可以用于引入外部 JavaScript 文件，也可以用于在 HTML 文件中嵌入 JavaScript 代码。

## 作用

1. 异步执行：async 属性可以异步执行引入的 JavaScript，不会阻塞 HTML 文件的解析。这意味着，即使 JavaScript 文件很大，也不会影响 HTML 文件的加载速度。
2. 立即执行：async 属性可以立即执行引入的 JavaScript，即在下载完成后立即执行。这意味着，即使 JavaScript 文件很大，也不会影响 HTML 文件的解析速度。
3. 按顺序执行：async 属性可以确保引入的 JavaScript 文件按照引入顺序执行，避免因执行顺序导致的错误。

# script type="module"

type="module" 属性表示引入的 JavaScript 文件是一个 ES6 模块，可以使用 ES6 的模块语法。使用 type="module" 属性引入的 JavaScript 文件不会阻塞 HTML 文件的解析，可以在 HTML 文件中直接使用 import 和 export 语法。

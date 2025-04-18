module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    libraryTarget: "umd",
    library: "MyLibrary",
    globalObject: 'this',// 确保在 Node.js 和浏览器中都能正确访问,// 确保在不同环境中的兼容性
  },

  // devServer: {
  //   contentBase: "./dist"
  // }
}
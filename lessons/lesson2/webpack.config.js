module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
    library: "MyLibrary", // 全局变量名
    libraryTarget: 'var' // 将库暴露为一个变量
  }
}
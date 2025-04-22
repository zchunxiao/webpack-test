const path = require("path")


module.exports = {
  entry: {
    index: {
      import: "./src/index.js",
      dependOn: "shared" // 共享模块
    },
    another: {
      import: "./src/another-module.js",
      dependOn: "shared" // 共享模块
    },
    shared: "lodash"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-bundle.js',
    clean: true
  },
  // optimization: {
  //   //runtimeChunk: 'single',
  //   splitChunks: {
  //     chunks: 'all',
  //   }
  // },
}
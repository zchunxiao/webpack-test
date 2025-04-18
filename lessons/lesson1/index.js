// module.exports = {
//   demo: function (context) {

//     console.log("hello world:", JSON.stringify(context))

//   }
// }

module.exports = {
  demo: function (context) {
    console.log("hello world:", JSON.stringify(context))

  }
}

/**
 * module.exports是nodejs模块的写法，不能在游览器环境中使用
 * 因此在webpack打包的时候需要设置libraryTarget: "commonjs2"
 * 这样打包后的文件才能被require引入
 * 
 * 默认的libraryTarget是var,同时还需要设置libirary,这是定义全局变量名
 */


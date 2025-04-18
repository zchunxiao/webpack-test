// 定义 greet 函数
function greet(name) {
  console.log(`Hello, ${name}!`);
}

// 定义 farewell 函数
function farewell(name) {
  console.log(`Goodbye, ${name}!`);
}

// 创建 MyLibrary 对象
var MyLibrary = {
  greet,
  farewell,
};

// 检测环境并暴露 MyLibrary
if (typeof define === 'function' && define.amd) {
  // AMD
  define([], function () {
    return MyLibrary;
  });
} else if (typeof exports === 'object') {
  // Node.js
  module.exports = MyLibrary;
} else {
  // 浏览器环境
  window.MyLibrary = MyLibrary;
}
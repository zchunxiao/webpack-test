function greet(name) {
  console.log(`Hello, ${name}!`);
}

function farewell(name) {
  console.log(`Goodbye, ${name}!`);
}

// 创建 MyLibrary 对象
var MyLibrary = {
  greet,
  farewell,
};

// // 暴露到全局对象
// window.MyLibrary = MyLibrary; // 确保在浏览器中可用

// Export as library
module.exports = {
  greet,
  farewell
};

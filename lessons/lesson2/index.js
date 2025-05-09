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

// 暴露到全局对象
window.MyLibrary = MyLibrary; // 确保在浏览器中可用

// Export as library
module.exports = {
  greet,
  farewell
};
/**
 * 特别注意这里的module.exports必须加，否则MyLibrary对象是个空对象
 */

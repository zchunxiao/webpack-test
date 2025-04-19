// import $ from 'jquery';
/**
 * 没有npm install ,作为外部依赖
 * 我们使用的时候，如何判断是ESM还是CommonJS
 * 
 * 在处理外部依赖时，判断是使用 ES Module（ESM）还是 CommonJS 主要取决于你如何引入和使用这些模块。
 */


$(document).ready(function () {
  $('#app').html('<h1>Hello, jQuery!</h1>');
});
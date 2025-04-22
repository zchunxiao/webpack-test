"use strict";
(self["webpackChunktest_output"] = self["webpackChunktest_output"] || []).push([["index"], {

/***/ "./src/another-module.js":
/*!*******************************!*\
  !*** ./src/another-module.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ print)
        /* harmony export */
});
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


      function print() {
        console.log('I get called from print.js!');
      }
      console.log(lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Another', 'module', 'loaded!'], ' '));

      /***/
}),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

      __webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _another_module_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./another-module.js */ "./src/another-module.js");



      function component() {
        const element = document.createElement('div');
        const btn = document.createElement('button');

        element.innerHTML = lodash__WEBPACK_IMPORTED_MODULE_0___default().join(['Hello', 'webpack'], ' ');

        btn.innerHTML = 'Click me and check the console!';
        btn.onclick = _another_module_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        element.appendChild(btn);

        return element;
      }

      document.body.appendChild(component());

      /***/
})

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
  /******/
}
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgtYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF1Qjs7QUFFUjtBQUNmO0FBQ0E7QUFDQSxZQUFZLGtEQUFNOzs7Ozs7Ozs7Ozs7OztBQ0xLO0FBQ21COztBQUUxQztBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGtEQUFNOztBQUU1QjtBQUNBLGdCQUFnQiwwREFBTzs7QUFFdkI7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3Qtb3V0cHV0Ly4vc3JjL2Fub3RoZXItbW9kdWxlLmpzIiwid2VicGFjazovL3Rlc3Qtb3V0cHV0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50KCkge1xuICBjb25zb2xlLmxvZygnSSBnZXQgY2FsbGVkIGZyb20gcHJpbnQuanMhJyk7XG59XG5jb25zb2xlLmxvZyhfLmpvaW4oWydBbm90aGVyJywgJ21vZHVsZScsICdsb2FkZWQhJ10sICcgJykpOyIsImltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL2Fub3RoZXItbW9kdWxlLmpzJztcblxuZnVuY3Rpb24gY29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGVsZW1lbnQuaW5uZXJIVE1MID0gXy5qb2luKFsnSGVsbG8nLCAnd2VicGFjayddLCAnICcpO1xuXG4gIGJ0bi5pbm5lckhUTUwgPSAnQ2xpY2sgbWUgYW5kIGNoZWNrIHRoZSBjb25zb2xlISc7XG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcblxuICBlbGVtZW50LmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
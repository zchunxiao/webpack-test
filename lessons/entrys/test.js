import { add, subtract, multiply, divide } from './dist/about.bundle.js';
import Home from "./dist/home.bundle.js"
import getNew from "./dist/new.bundle.js"

console.log(add(1, 2));
console.log(add(4, 2));
console.log(multiply(4, 2));
console.log(divide(4, 2));

Home();

console.log(getNew("John"))
getNew("John").then(res => {
  console.log(res)
})

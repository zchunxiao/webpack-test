import MyComponent from '@components/MyComponents';
import { someHelper } from '@utils/helper';
const app = document.getElementById('app');
app.innerHTML = `<h1>${MyComponent()}</h1>`;
const helperText = someHelper();
console.log(helperText + "1234");
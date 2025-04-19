//通过 import 语句引入 CSS 文件，使其成为一个模块。
import './styles.css'; // 导入 CSS 文件
import myImage from './images/example.png'; // 导入图像

const img = document.createElement('img');
img.src = myImage;

document.body.appendChild(img);
console.log('Webpack with loaders is working!');
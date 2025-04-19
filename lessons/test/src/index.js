import _ from 'lodash';
import './style.css'
import MyImage from './my-image.png';
import Data from './data.xml';
import Notes from './data.csv';

import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title); // 输出 `TOML Example`
console.log(toml.owner.name); // 输出 `Tom Preston-Werner`

console.log(yaml.title); // 输出 `YAML Example`
console.log(yaml.owner.name); // 输出 `Tom Preston-Werner`

console.log(json.title); // 输出 `JSON5 Example`
console.log(json.owner.name); // 输出 `Tom Preston-Werner`

function component() {
  const element = document.createElement('div');
  element.className = 'hello';

  // lodash 现在使用 import 引入。
  element.innerHTML = _.join(['阿里妈妈刀隶体 ', 'webpack'], ' ');

  // 将图像添加到已经存在的 div 中。
  const myIcon = new Image();
  myIcon.src = MyImage;

  element.appendChild(myIcon);


  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
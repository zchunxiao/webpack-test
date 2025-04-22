import _ from 'lodash';

export default function print() {
  console.log('I get called from print.js!');
}
console.log(_.join(['Another', 'module', 'loaded!'], ' '));
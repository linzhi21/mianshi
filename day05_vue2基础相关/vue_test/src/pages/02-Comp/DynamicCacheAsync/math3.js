export function sum (x, y) {
  return x + y
}

export default function sum2 (x, y) {
  return x + y + 1
}


/* 
整个模块是一个对象
{
  sum: function () {},
  default: function () {}
}
import {sum} from './math'
import xxx from './math'  // 简写
import {default as xxx} from './math'
*/


// 1.导入的{}中定义变量
import {flag, sum} from "./info1.js";

// 条件判断
if(flag){
  console.log('kobe是mvp');
  console.log(sum(20, 30));
}

// 2.直接导入export定义的变量
import {num1, height} from "./info1.js";

// 3.导入函数和类对象
import {mul, Person} from "./info1.js";
console.log(mul(30,50));

const p = new Person();
p.run();

// 4.导入export default中的内容
import address from "./info1.js";
console.log(address);

// 5.统一全部导入
import * as A from './info1.js'
// 打印结果
console.log(A.flag);
console.log(A.height);
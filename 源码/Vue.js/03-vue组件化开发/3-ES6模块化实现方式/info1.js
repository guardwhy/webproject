// 定义变量
let name = 'kobe';
let age = 18;
let flag = true;

// 定义函数
function sum(num1, num2) {
  return num1 + num2
}

// 条件判断
if (flag){
  console.log(sum(20, 30));
}

// 1.导出模块方式
export {
  flag, sum,
}

// 2.导出方式2
export let num1 = 100;
export let height = 1.71

// 3.导出函数/类
export function mul(num1, num2) {
  return num1 * num2
}

export class Person {
  run(){
    console.log('python是最优雅的语言!!!');
  }
}

// 5.export default
const address = '广东省广州市'
export default address
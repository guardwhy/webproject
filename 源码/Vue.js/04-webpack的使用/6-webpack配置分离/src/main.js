// 1. 使用commonjs的模块化导入
const {add, mul} = require('./js/mathUtils')

// 输出结果
console.log(add(20, 30));
console.log(mul(20, 30));

// 2.使用es6的模块化规范
import {name, age, height} from "./js/info";

console.log(name);
console.log(age);
console.log(height);

// 依赖css文件
require('./css/normal.css')

// 依赖less文件
require('./css/special.less')
document.write('<h3>kobe是mvp!!!</h3>')

// 使用vue开发
import Vue from 'vue'
// import App from './vue/app'
import App from "./vue/App.vue"

new Vue({
  el: '#app',
  template:'<App/>',
  components:{
    App
  }
})

document.writeln('<span>哈哈哈</span>')

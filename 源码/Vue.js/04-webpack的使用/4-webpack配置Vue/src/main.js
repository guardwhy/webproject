// 依赖less文件
require('./css/special.less')

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
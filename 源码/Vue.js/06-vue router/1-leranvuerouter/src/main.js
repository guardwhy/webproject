import Vue from 'vue'
import App from './App'
// 导入router
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// 打印router
// console.log(router);

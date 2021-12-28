import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // components: { App },
  // template: '<App/>'

  render: function (createElement) {
    // createElement:('标签'，{标签的属性}, [''])
    //

    // 2.传入组件对象
    return createElement(App)
  }
})

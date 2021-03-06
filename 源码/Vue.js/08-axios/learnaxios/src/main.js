import Vue from 'vue'
import App from './App'
// 导入axios
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.基本使用
/*axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}).then(res => {
  console.log(res)
})

axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门用来对get请求参数的拼接
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => {
  console.log(res);
})*/

// 2.axios发送并发请求
/*axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(results => {
  console.log(results);
})*/

// 3.使用全局的axios和对应的配置进行网络请求
/*axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios.all([axios({
  url: '/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'sell',
    page: 5
  }
})]).then(axios.spread((res1, res2) => {
  console.log(res1);
  console.log(res2);
}))*/

// 4.创建对应的axios实例
/*
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  instance1({
    url: '/home/multidata'
  }).then(res => {
    console.log(res);
  })
  instance1({
    url: '/home/data',
    params:{
      type: 'pop',
      page: 1
    }
  }).then(res => {
    console.log(res);
  })

  const instance2 = axios.create({
    baseURL: 'http://222.111.33.33:8000',
    timeout: 10000,
    headers: {}
  })
*/

// 5. request模块
import {request} from "./network/request";

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
})

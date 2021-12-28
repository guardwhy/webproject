// 导入vue
import Vue from 'vue'
import Vuex from 'vuex'

// 2.安装插件
Vue.use(Vuex)

// 创建module对象
const moduleA = {
  state: {
    name: 'James'
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  getters: {
    fullname(state) {
      return state.name + '牛逼'
    },
    fullname2(state, getters) {
      return getters.fullname + '好人卡'
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter
    }
  },
  actions: {
    aUpdateName(context){
      // 打印上下文
      console.log(context);
      setTimeout(() => {
        context.commit('updateName', 'Curry')
      }, 1000)
    }
  }
}

// 3.创建store对象
const store = new Vuex.Store({
  // 放置状态相关的信息
  state: {
    counter:1000,
    students: [
      {id: 110, name: 'why', age: 18},
      {id: 111, name: 'kobe', age: 24},
      {id: 112, name: 'james', age: 30},
      {id: 113, name: 'curry', age: 10}
    ],
    info: {
      name: 'kobe',
      age: 40,
      height: 1.98
    }
  },
  // 方法
  mutations: {
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    // 普通提交方式
    /*incrementCount(state, count){
     state.counter += count
    },*/
    // payload提交方式
    incrementCount(state, payload){
      state.counter += payload.count
    },
    addStudent(state, stu){
      state.students.push(stu)
    },
    updateInfo(state){
      // 这样修改无法做到响应式
      state.info.name = 'guardwhy'
      //Vue.set(state.info, 'address', '北京')
      // 删除age
      //Vue.delete(state  .info, 'age')
    }
  },
  actions: {
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject) =>{
        setTimeout(() =>{
          context.commit('updateInfo');
          // 打印结果
          console.log(payload);

          resolve('guardwhy')
        }, 1000)
      })
    }

  },
  getters: {
    powerCounter(state){
      // 返回结果
      return state.counter * state.counter
    },
    more20stu(state){
      // 返回结果
      return state.students.filter(s => s.age > 20)
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }

  },
  modules: {
    a: moduleA
  }
})

// 4.导出store
export default store

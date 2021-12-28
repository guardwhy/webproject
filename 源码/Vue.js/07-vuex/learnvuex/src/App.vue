<template>
  <div id="app">
   <h3>----------App内容-------</h3>
    <h3>{{$store.state.counter}}</h3>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>

    <h3>------App内容:Info对象是否是响应式----</h3>
    <h3>{{$store.state.info}}</h3>
    <button @click="updateInfo">修改信息</button>

    <h3>-----App内容:getters相关信息----</h3>
    <h3>{{$store.getters.powerCounter}}</h3>
    <h3>{{$store.getters.more20stu}}</h3>
    <h3>{{$store.getters.more20stuLength}}</h3>
    <h3>{{$store.getters.moreAgeStu(12)}}</h3>

    <h2>----------App内容: modules中的内容----------</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>


    <h2>-------hello Vue内容------</h2>
    <hello-vuex/>
  </div>
</template>

<script>
  // 导入组件
import HelloVuex from "./components/HelloVuex";
export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data(){
    return{
      message: '我是APP组件',
      counter: 0
    }
  },
  methods: {
    addition(){
      this.$store.commit('increment')
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      // 1.普通的提交封装
      // this.$store.commit('incrementCount', count)

      // 2.特殊的提交封装
      this.$store.commit({
        type: 'incrementCount',
        count
      })
    },
    addStudent(){
      // 创建学生对象
      const stu = {id: 114, name: 'alan', age:35}
      this.$store.commit('addStudent', stu)
    },
    updateInfo(){
      // this.$store.commit('updateInfo')
      // 异步 操作
      this.$store
        .dispatch('aUpdateInfo', '携带的信息')
        .then(res => {
          console.log('里面完成了提交')
          console.log(res)
        })
    },
    updateName(){
      this.$store.commit('updateName', 'Rando')
    },
    asyncUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>

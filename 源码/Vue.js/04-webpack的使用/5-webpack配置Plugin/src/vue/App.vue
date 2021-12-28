<template>
  <div>
    <h3 class="title">{{message}}</h3>
    <button @click="btnClick">按钮</button>
    <h3>{{name}}</h3>
  </div>
</template>

<script>
  // 引入组件
  import Cpn from './Cpn'
  export default {
    name: "App",
    comments:{
      Cpn
    },
    data(){
      return {
        message: 'hello webpack',
        name: 'GuardWhy'
      }
    },
    methods: {
      btnClick(){

      }
    }
  }
</script>

<style scoped>
  .title {
    color: green;
  }
</style>
<template>
  <div>
    <h5 class="title">{{message}}</h5>
    <button @click="btnClick">按钮</button>
    <h5>{{name}}</h5>
    <Cpn></Cpn>
  </div>
</template>

<script>
  // 引入组件
  import Cpn from './Cpn'
  export default {
    name: "App",
    components: {Cpn},
    comments:{
      Cpn
    },
    data(){
      return {
        message: 'hello webpack!!!!',
        name: 'guardwhy'
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
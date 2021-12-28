<template>
  <div>
    <h3>我是用户界面</h3>
    <p>我是NBA老板库班</p>
    <h3>{{userId}}</h3>
    <!--直接拿-->
    <h3>{{$route.params.userId}}</h3>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed: {
      userId(){
        // 拿到的是哪个路由处于活跃状态，就是拿到哪个路由！！
        return this.$route.params.userId
      }
    },
    methods: {
      btnClick(){
        console.log(this.$router)
        console.log(this.$route)
      }
    }
  }
</script>

<style scoped>

</style>

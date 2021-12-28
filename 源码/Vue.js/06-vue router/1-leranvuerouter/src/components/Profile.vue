<template>
  <div>
    <h3>我是NBA球星档案组件</h3>
    <h3>{{$route.query.name}}</h3>
    <h3>{{$route.query.age}}</h3>
    <h3>{{$route.query.height}}</h3>
  </div>
</template>

<script>
  export default {
    name: "Profile",
    mounted() {
      console.log(this.$router)
      console.log(this.$route)
    }
  }
</script>

<style scoped>

</style>

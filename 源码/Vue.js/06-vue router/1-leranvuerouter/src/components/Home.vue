<template>
  <div>
    <h3>首页内容 </h3>
    <p>Vue.js python javaScript </p>
    <h3>{{message}}</h3>
    <!--添加router-link-->
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
  export default {
    name: "Home",
    data(){
      return {
        message: '你好',
        path: '/home/news'
      }
    },
    // 生成
    created() {
      console.log('home created');
    },
    // 销毁
    destroyed() {
      console.log('home destroyed')
    },
    activated() {
      this.$router.push(this.path);
      console.log('activated');
    },
    /*deactivated() {
      console.log('deactivated');
    },*/
    beforeRouteLeave (to, from, next) {
      // console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>

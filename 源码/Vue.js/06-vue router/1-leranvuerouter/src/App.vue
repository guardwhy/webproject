<template>
  <div id="app">
      <!--
      <button @click="homeClick">首页</button>
      <button @click="aboutClick">关于</button>
      -->

      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
      <router-link :to="'/user/'+userId">用户</router-link>
      <router-link :to="{path: '/profile', query: {name: 'GuardWhy', age: 18, height: 1.71}}">
        档案
      </router-link>

      <!--js代码类型-->
      <!--<button @click="profileClick">档案</button>-->
    <keep-alive>
        <router-view/>
    </keep-alive>

  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      userId: 'zhangsan'
    }
  },
  methods: {
    homeClick(){
      this.$router.replace('/home')
      console.log('homeClick');
    },
    aboutClick(){
      // 该$router是const router = new VueRouter的这个对象
      this.$router.rep lace('/about')
      console.log('aboutClick')
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query: {
          name: 'kobe',
          age: 19,
          height: 1.71
        }
      })
    }
  }
}
</script>

<style>
  .active {
    color: red;
  }
</style>

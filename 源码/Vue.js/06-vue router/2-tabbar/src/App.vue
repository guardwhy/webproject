<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  // 导入主键
  import MainTabBar from "./components/mainTabbar/MainTabBar";

export default {
  name: 'App',
  components : {
    // 注册组件
    MainTabBar
  }
}
</script>

<style>
  /*引入css文件*/
  @import "./assets/css/base.css";
</style>

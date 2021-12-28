<template>
  <tab-bar>
    <tab-bar-item path="/home" active-color="pink">
      <img slot="item-icon" src="../../assets/img/tabbr/home.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbr/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" active-color="pink">
      <img slot="item-icon" src="../../assets/img/tabbr/category.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbr/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" active-color="pink">
      <img slot="item-icon" src="../../assets/img/tabbr/shopcart.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbr/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" active-color="deepPink">
      <img slot="item-icon" src="../../assets/img/tabbr/profile.svg" alt="">
      <img slot="item-icon-active" src="../../assets/img/tabbr/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBarItem from "../tabbr/TabBarItem";
  import TabBar from "../tabbr/TabBar";

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>

</style>

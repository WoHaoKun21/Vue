<template>
  <!-- <Home /> 默认加载Home组件，用来代替Home组件；exclude加上组件名字——这个组件不会被缓存 -->
  <keep-alive exclude="DetaiL">
    <router-view />
  </keep-alive>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="css" >
.border-bottom {
  border-bottom: 0.01rem solid #eee;
}
</style>
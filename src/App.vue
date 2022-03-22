<template>
  <!-- <Home /> 默认加载Home组件，用来代替Home组件 -->
  <keep-alive>
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
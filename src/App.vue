<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from "./components/home/Home.vue";
export default {
  components: { Home },
  name: "App",
};
</script>

<style lang="stylus">
.border-bottom{
  border-bottom:.01rem solid #eee;
}
</style>
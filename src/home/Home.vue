<template>
  <div>
    <home-header />
    <home-swiper />
  </div>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import HomeSwiper from "../components/Swiper.vue";
export default {
  components: { HomeHeader, HomeSwiper },
  name: "HomE",
};
</script>

<style lang="scss" scoped>
</style>
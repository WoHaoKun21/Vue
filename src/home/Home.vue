<template>
  <div>
    <home-header />
    <home-swiper />
    <icon-s></icon-s>
  </div>
</template>

<script>
import HomeHeader from "../components/Header.vue";
import HomeSwiper from "../components/Swiper.vue";
import IconS from "@/components/Icons";
export default {
  components: {IconS, HomeHeader, HomeSwiper },
  name: "HomE",
};
</script>

<style lang="scss" scoped>
</style>
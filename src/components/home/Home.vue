<template>
  <div>
    <home-header/>
    <home-swiper/>
    <home-icons/>
    <home-recommend/>
    <home-weekend/>
  </div>
</template>

<script>
import HomeHeader from "./component/Header.vue";
import HomeSwiper from "./component/Swiper.vue";
import HomeIcons from "./component/Icons.vue";
import HomeRecommend from "./component/Recommend.vue"
import HomeWeekend from "./component/Weekend.vue";

export default {
  components: {HomeWeekend, HomeIcons, HomeHeader, HomeSwiper, HomeRecommend},
  name: "HomE",
};
</script>

<style lang="scss" scoped>
</style>
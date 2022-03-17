<template>
  <div>
    <home-header :city="city" />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import HomeHeader from "./component/Header.vue";
import HomeSwiper from "./component/Swiper.vue";
import HomeIcons from "./component/Icons.vue";
import HomeRecommend from "./component/Recommend.vue";
import HomeWeekend from "./component/Weekend.vue";
import axios from "axios";
export default {
  components: { HomeWeekend, HomeIcons, HomeHeader, HomeSwiper, HomeRecommend },
  name: "HomE",
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json").then((res) => {
        this.getHomeInfoSucc(res.data.data);
      });
    },
    getHomeInfoSucc(res) {
      console.log("得到的数据：", res);
      this.city = res.city;
      this.swiperList = res.swiperList;
      this.iconList = res.iconList;
      this.recommendList = res.recommendList;
      this.weekendList=res.weekendList;
    },
  },
  mounted() {
    this.getHomeInfo();
  },
};
</script>

<style lang="scss" scoped>
</style>
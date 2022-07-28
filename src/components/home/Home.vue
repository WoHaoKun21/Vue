<template>
  <div>
    <home-header />
    <home-swiper :list="swiperList" />
    <home-icons :list="iconList" />
    <home-recommend :list="recommendList" />
    <home-weekend :list="weekendList" />
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import HomeHeader from "./component/Header.vue";
import HomeSwiper from "./component/Swiper.vue";
import HomeIcons from "./component/Icons.vue";
import HomeRecommend from "./component/Recommend.vue";
import HomeWeekend from "./component/Weekend.vue";
export default {
  components: { HomeWeekend, HomeIcons, HomeHeader, HomeSwiper, HomeRecommend },
  name: "HomE",
  data() {
    return {
      lastCIty: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then((res) => {
        this.getHomeInfoSucc(res.data.data);
      });
    },
    getHomeInfoSucc(res) {
      this.swiperList = res.swiperList;
      this.iconList = res.iconList;
      this.recommendList = res.recommendList;
      this.weekendList = res.weekendList;
    },
  },
  mounted() {
    this.lastCIty = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCIty !== this.city) {
      this.lastCIty = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style lang="scss" scoped>
</style>
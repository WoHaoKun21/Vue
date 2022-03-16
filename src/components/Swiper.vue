<template>
  <div class="wrapper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" alt=""/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {id: "0001", imgUrl: "https://imgs.qunarzz.com/sight/source/1812/b4/e9d7f043c4fadf.jpg_r_640x214_713df0cf.jpg"},
        {id: "0002", imgUrl: "https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg"},
        {id: "0003", imgUrl: "https://imgs.qunarzz.com/sight/source/1507/6b/70d17d828d87e1.jpg_r_640x214_6a995270.jpg"}
      ]
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false);
  },
};
</script>

<style lang="stylus" scoped>

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.5%;

  .swiper-img {
    width: 100%;
  }

  .swiper-pagination {
    color: #f00;
  }
}
</style>
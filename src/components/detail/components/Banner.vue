<template>
  <div class="banner" @click="handleBannerClick">
    <img class="banner-img" :src="bannerImg" alt="" />
    <div class="banner-info">
      <div class="banner-title">{{ sightName }}</div>
      <div class="banner-number">
        <span class="iconfont">&#xec7f;</span>
        39
      </div>
    </div>
    <common-gallary
      :imgs="gallaryImgs"
      @close="handleGallaryClose"
      v-show="showGallary"
    />
  </div>
</template>

<script>
import CommonGallary from "common/gallary/Gallary.vue";
export default {
  name: "DetailBanner",
  components: { CommonGallary },
  props: { bannerImg: String, sightName: String, gallaryImgs: Array },
  data() {
    return {
      showGallary: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showGallary = true;
    },
    handleGallaryClose() {
      this.showGallary = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    // 实现渐变效果
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      height: 0.32rem;
      margin-top: 0.14rem;
      padding: 0 0.4rem;
      line-height: 0.32rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.5);
      font-size: 0.24rem;

      span {
        font-size: 0.24rem;
      }
    }
  }
}
</style>
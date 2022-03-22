<template>
  <div>
    <router-link to="/" tag="div" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe7eb;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      <router-link to="/" tag="div" class="header-fixed-back">
        <div class="iconfont header-abs-back">&#xe7eb;</div>
      </router-link>
      景点详情
    </div>
    <div class="conten"></div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: { opacity: 0 },
    };
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 80) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    },
  },
  activated() {
    window.addEventListener("scroll", this.handleScroll);
  },
  deactivated() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style lang="stylus" scoped>
@import 'styles/varibles.styl';

.conten {
  height: 50rem;
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  text-align: center;
  line-height: 0.8rem;
  background: rgba(0, 0, 0, 0.8);

  .header-abs-back {
    color: #fff;
    font-size: 0.4rem;
  }
}

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #fff;
  font-size: 0.32rem;
  background: $bgColor;

  .header-fixed-back {
    position: absolute;
    width: 0.64rem;
    text-align: center;
    font-size: 0.4rem;
    top: 0;
    left: 0;
    color: #fff;
    background: #000;
  }
}
</style>
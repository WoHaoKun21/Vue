<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" />
            <p class="icon-desc">{{ item.desc }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array,
  },
  computed: {
    pages() {
      const pages = [];
      this.list.map((item, index) => {
        const page = Math.floor(index / 8); // 计算的是当前icon图标在那一页
        if (!pages[page]) {
          // 如果没有这个页数
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>

<style lang="stylus" scoped>
@import 'styles/varibles.styl';
@import 'styles/mixins.styl';

.icons >>> .swiper-container {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;
    position: relative;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0.44rem;
      right: 0;
      box-sizing: border-box;
      padding: 0.1rem;

      img {
        display: block;
        margin: 0 auto;
        height: 100%;
      }

      .icon-desc {
        text-align: center;
        position: absolute;
        left: 0;
        bottom: -0.38rem;
        right: 0;
        font-size: 0.28rem;
        color: $darkTextColor;
        ellipses();
      }
    }
  }
}
</style>
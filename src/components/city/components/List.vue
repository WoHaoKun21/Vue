<template>
  <div class="list wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{ this.currentCity }}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item in hot"
            :key="item.id"
            @touchstart="handleCityClick(item.name)"
          >
            <div class="button">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, inde) in cities" :key="inde" :ref="inde">
        <div class="title border-topbottom">{{ inde }}</div>
        <div class="item-list">
          <div
            class="item border-topbottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @touchstart="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";
export default {
  name: "CityList",
  props: {
    cities: Object, // 城市
    hot: Array, // 热门城市
    letter: String,
  },
  computed: {
    ...mapState({ currentCity: "city" }),
  },
  methods: {
    handleCityClick(city) {
      //   this.$store.commit("changeCity", city);
      this.changeCity(city);
      this.$router.push("/");
    },
    ...mapMutations(["changeCity"]),
  },
  watch: {
    letter() {
      // 监听letter属性，必须和变量名一样
      if (this.letter) {
        // 如果传过来的letter不为空
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {
    this.scroll = new Bscroll(".wrapper", {
      // 用来进行设置滚动
      pullUpLoad: true,
      scrollbar: true,
    });
    setTimeout(() => {
      this.scroll.refresh();
    }, 20);
  },
};
</script>

<style lang="stylus" scoped>
@import 'styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.list {
  position: absolute;
  top: 1.58rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  .title {
    line-height: 0.54rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
    font-size: 0.26rem;
  }

  .button-list {
    padding: 0.1rem;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;
    overflow: hidden;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        text-align: center;
        padding: 0.1rem 0;
        margin: 0.1rem;
        border: 0.02rem solid #ccc;
        border-radius: 0.06rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
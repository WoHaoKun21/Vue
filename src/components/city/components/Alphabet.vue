<template>
  <ul class="list">
    <li
      class="item"
      v-for="item in letters"
      :key="item"
      :ref="item"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    cities: Object,
  },
  data() {
    return {
      touchStatus: false,
      startY: 0, // 用来存储字母A距离屏幕的高度
      timer: null, // 用来对屏幕滑动时进行节流
    };
  },
  updated() {
    // 更新阶段生命周期
    this.startY = this.$refs["A"][0].offsetTop; // 获取“A”元素距离屏幕顶部的高度
  },
  computed: {
    letters() {
      let letters = [];
      for (let i in this.cities) {
        letters.push(i);
      }
      return letters;
    },
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText); // 然父组件监听自己创建的change事件
    },
    handleTouchStart() {
      // A B C D锁定栏拖动事件
      this.touchStatus = true; // 允许拖动
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          // 用来进行函数节流，提高网页性能
          const touchY = e.touches[0].clientY - 79; // 79是header部分的高度
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            console.log("得到的字母：", this.letters[index]);
            this.$emit("change", this.letters[index]); // 自定义事件，已经被父组件监控了，第二个参数是发送的数据
          }
        }, 16);
      }
    },
    handleTouchEnd() {
      this.touchStatus = false; // 禁止拖动
    },
  },
};
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column; /* 旋转 */
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bgColor;
  }
}
</style>
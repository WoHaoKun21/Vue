<template>
  <header>
    <div class="header-left">
      <div class="iconfont back-icon">&#xe7eb;</div>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe82e;</i>输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{ city }}<i class="iconfont arrow-icon">&#xe6bd;</i>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeadeR",
  props: {
    city: String,
  },
};
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/varibles.styl';

header {
  display: flex;
  line-height: 0.86rem;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 0.64rem;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: #fff;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    width: 1.24rem;
    text-align: center;

    .arrow-icon {
      font-size: 0.24rem;
    }
  }
}
</style>
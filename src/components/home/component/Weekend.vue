<template>
  <div>
    <div class="title">周末去哪玩儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img
              class="item-img"
              :src="item.imgUrl"
              alt=""
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  data() {
    return {
      recommendList: [
        {
          id: "0001",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg",
          title: "大连必打卡",
          desc: "爱上北方的碧海蓝天"
        },
        {
          id: "0002",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg",
          title: "亲子游乐",
          desc: "来生机勃勃的森林野生动物园留下你们珍贵的足迹"
        },
        {
          id: "0003",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg",
          title: "大连必打卡",
          desc: "爱上北方的碧海蓝天"
        },
        {
          id: "0004",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg",
          title: "亲子游乐",
          desc: "来生机勃勃的森林野生动物园留下你们珍贵的足迹"
        },
        {
          id: "0005",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/7f/fa4eb0ca72409d.jpg_r_640x214_2f2a860e.jpg",
          title: "大连必打卡",
          desc: "爱上北方的碧海蓝天"
        },
        {
          id: "0006",
          imgUrl: "https://imgs.qunarzz.com/sight/source/1505/89/267342d404cbd7.jpg_r_640x214_8d8d1162.jpg",
          title: "亲子游乐",
          desc: "来生机勃勃的森林野生动物园留下你们珍贵的足迹"
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/mixins.styl';
.title {
  margin-top: .2rem;
  line-height: .8rem;
  background: #eee;
  text-indent: .2rem;
}

.item-img-wrapper {
  overflow: hidden;

  .item-img {
    width: 100%;
  }
}

.item-info {
  padding: .1rem;

  .item-title {
    line-height: .54rem;
    font-size: .32rem;
    ellipses();
  }

  .item-desc {
    line-height: .4rem;
    color: #ccc;
    ellipses();
  }
}
</style>
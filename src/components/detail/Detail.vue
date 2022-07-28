<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    />
    <detail-header />
    <div class="content">
      <detail-list :list="list" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
import DetailList from "./components/List.vue";
export default {
  name: "DetaiL",
  components: { DetailBanner, DetailHeader, DetailList },
  data() {
    return {
      bannerImg: "", // banner页面的图片
      sightName: "", // 景点名称
      gallaryImgs: [], // banner滑动图
      list: [], // 详情信息页表
    };
  },
  methods: {
    getDetailInfo() {
      axios
        .get(`./api/detail.json`, { params: this.$route.params })
        .then((res) => {
          if (res.data) {
            this.getDetailInfoSucc(res.data.data);
          }
        });
    },
    getDetailInfoSucc(res) {
      this.bannerImg = res.bannerImg;
      this.sightName = res.sightName;
      this.gallaryImgs = res.gallaryImgs;
      this.list = res.categoryList;
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
.content {
  height: 40rem;
}
</style>
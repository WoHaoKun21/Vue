<template>
  <div>
    <detail-banner />
    <detail-header />
  </div>
</template>

<script>
import DetailBanner from "./components/Banner.vue";
import DetailHeader from "./components/Header.vue";
export default {
  name: "DetaiL",
  components: { DetailBanner, DetailHeader },
};
</script>

<style lang="stylus" scoped></style>
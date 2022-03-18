<template>
  <div>
    <city-header />
    <city-search />
    <city-List :cities="cities" :hot="hotCities" />
    <city-alphabet :cities="cities" />
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
import axios from "axios";
export default {
  name: "CitY",
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      cities: {}, // 存储的是A B C D所对应的名字
      hotCities: [], // 存储的热门城市
    };
  },
  methods: {
    getCityInfo() {
      axios.get("./api/city.json").then((res) => {
        this.handleGetCityInfoSucc(res.data.data);
      });
    },
    handleGetCityInfoSucc(res) {
      this.cities = res.cities; // 当前城市
      this.hotCities = res.hotCities; // 热门城市
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>

<style lang="stylus" scoped></style>
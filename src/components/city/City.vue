<template>
  <div>
    <city-header />
    <city-search />
    <city-List />
    <city-alphabet />
  </div>
</template>

<script>
import CityHeader from "./components/Header.vue";
import CitySearch from "./components/Search.vue";
import CityList from "./components/List.vue";
import CityAlphabet from "./components/Alphabet.vue";
export default {
  name: "CitY",
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
};
</script>

<style lang="stylus" scoped></style>
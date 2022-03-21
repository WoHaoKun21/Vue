import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
Vue.use(Vuex);
console.log(mutations)
export default new Vuex.Store({
    state,
    mutations,
    getters: {
        doubleCity(state) {
            return state.city + " " + state.city;
        }
    }
})
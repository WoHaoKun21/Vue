import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';
import App from './App.vue';
import router from './router';
import store from './store';
import "./assets/styles/iconfont.css";
import "./assets/styles/reset.css";
import "./assets/styles/border.css";
Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper);// 使用这个轮播插件
new Vue({
    store,// 使用全局store
    router,// 使用路由
    render: h => h(App)
}).$mount('#app')

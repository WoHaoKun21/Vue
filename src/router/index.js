import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../components/home/Home.vue";
import City from "../components/city/City.vue";
import Detail from "../components/detail/Detail";
Vue.use(VueRouter)

const routes = [// 用来进行注册route路由的，一个{}就是一个路由
    { path: "/", name: "Home", component: Home },
    { path: "/city", name: "City", component: City },
    { path: "/detail/:id", name: "Detail", component: Detail }
]

const router = new VueRouter({
    // mode: 'history',// BrowserRouter
    mode: 'hash',// HashRouter
    base: process.env.BASE_URL,
    routes
})

export default router

export default {// 相当于reducer
    changeCity(state, city) {// state：当前的state
        state.city = city;
        try {
            localStorage.city = city;
        } catch (error) {
            throw new Error("城市获取错误");
        }
    }
}
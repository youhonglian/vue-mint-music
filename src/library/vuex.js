import Vue from 'vue'
import Vuex from 'vuex'
// 将vuex注入到Vue，所有的组件都可以
// this.$store
Vue.use(Vuex)
// 返回唯一的一个stire实例，状态仓库
const store = new Vuex.Store({
    // 状态
    state: {
    }

})
export default store
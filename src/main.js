// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/library/vuex'
// 模块化分离  有利于main.js 精简 减少流程 只给模块入口
import mint from '@/library/mint'
import axiosJs from 'axios'
// ajax请求过期时间，最长5秒，如果超时不候
axiosJs.defaults.timeout = 5000


Vue.config.productionTip = false
// 将axios 放入到vue原型链中，所有的组件都可使用
Vue.prototype.axios = axiosJs
// api有很多，将它单独封装一个模块
import APIJS from './assets/js/api.js'
Vue.prototype.api = APIJS
import UtilJS from './assets/js/util.js'
Vue.prototype.util = UtilJS

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  mint,
  store,
  components: { App }
})
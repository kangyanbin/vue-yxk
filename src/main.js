import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//重置样式
import './assets/css/reset.css'
//解决click事件在移动端300毫秒的延迟的问题
import FastClick from 'fastclick'
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
      FastClick.attach(document.body);
  }, false);
}
//引入字体图标
import './assets/css/iconfont.css'
//引入适配font.js文件
import './assets/js/Font.js'
//引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'

// import 'swiper/dist/css/swiper.css'
import './assets/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//引入动画库
import animate from 'animate.css'
//引入 axios
import axios from 'axios'
Vue.prototype.axios = axios
//vue-router跳转页面后滚动条不在顶部的解决方法
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

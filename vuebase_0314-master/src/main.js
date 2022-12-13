import Vue from 'vue'
import App from './App'
import router from '@/router'
Vue.config.productionTip = false
new Vue({
  el:'#app',
  router,
  // 每个组件通过this.$router可以拿到路由器对象
  // 每个组件通过this.$route可以拿到当前匹配成功的路由对象
  render: h => h(App),
})


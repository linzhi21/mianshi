import Vue from 'vue'
import App from './App'
import store from '@/store'
Vue.config.productionTip = false


new Vue({
  el:'#app',
  store,  
  // 注入store，当配置了store以后，每个组件当中都可以通过
  // this.$store获取到store对象
  render: h => h(App),
})


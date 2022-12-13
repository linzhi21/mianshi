// 这个文件是路由器的配置文件

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/routes'

Vue.use(VueRouter)

// 配路由的时候就同时注册了路由组件

export default new VueRouter({
  mode:'history',
  routes
})
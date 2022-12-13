## 一、vue3路由基本使用

### 路由器的配置

#### vue2的配置

```js
// @/router/index.js  不需要考虑类型注解
import VueRouter from 'vue-router'
const router = new VueRouter({
    mode:'history',
    routes
})
export default router

// @/router/routes.js
// 路由对象的类型不需要注解
export default [
    {
        path:'',
        component:() => import('xxx')
    }
]

// @/main.js
import router from '@/router'
import App from '@/App.vue'
import Vue from 'vue'
new Vue({
    el:'#app',
    router,//注入router
    rander: h => h(App)
})

```

#### vue3的配置

​	新版vue-router创建路由器的时候引入的是函数api去调用

​	路由器配置的模式使用history配置项，值需要引入对应的（hash和history）函数来产生，不再是mode了

​	路由器配置滚动行为return的结果，之前是{y:0},现在变为了{top:0}

​	路由数组模块化需要指定类型RouteRecordRaw[]，类型是vue-router当中已经定义好的，引入即可

​	路由对象在写的时候，和之前一样的，注意如果是重定向路由，路径需要写完整路径，不能简写

​	路由器最终注入的方式改为插件使用方式,在main.ts当中需要用到app.use(router)

````js
// @/router/index.ts
import {createRouter,createWebHistory} from 'vue-router'
import routes from './routes'
const router = createRouter({
  history:createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition){
    return {top:0} //之前{x:0,y:0}
  }
})
export default router

// @/router/routes.ts
import type { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
  {
    path:'/home',
    component:() => import('@/views/Home/index.vue'),
    children:[
      {
        path:'message',
        component:() => import('@/views/Message/index.vue'),
        children:[
          {
            path:'messagedetail/:msgId?',
            component: () => import('@/views/MessageDetail/index.vue'),
            name:'msgdetail',
            // props:true,
            // props:{username:'赵丽颖'},
            props(route){
              return {msgId:route.params.msgId,msgContent:route.query.msgContent}
            }
          }
        ]
      },
      {
        path:'news',
        component:() => import('@/views/News/index.vue'),
        children:[
          {
            path:'newsdetail/:newsId?',
            component: () => import('@/views/NewsDetail/index.vue'),
            name:'newsdetail'
          }
        ]
      },
      {
        path:'/home', //vue3的路由当中重定向路由必须写全路径
        redirect:'/home/message'
      }
    ]
  },
  {
    path:'/about',
    component:() => import('@/views/About/index.vue')
  },
  {
    path:'/',
    redirect:'/home'
  }
]

export default routes

// @/main.ts当中
import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
const app = createApp(App)
app.use(router)//插件使用方式
app.mount('#app')
````

### 路由器对象和路由对象的使用

​	组件当中使用路由器对象和路由对象，之前我们可以通过this.$router获取到路由器对象来操作，通过this.$route获取到当前匹配的路由对象来操作

​	现在我们使用的setup函数，组和api写法，无法使用this，因此分别给了useRouter和useRoute两个函数来对应获取路由器对象和路由对象。在setup函数当中进行操作。

​	**注意：模板当中可以写$router和$route,也可以使用函数获取到的router和route来操作**

## 二、pinia的基本使用

### pinia的配置

```js
//@/store/index.ts
// 配置pinia
import {createPinia} from 'pinia'
const pinia = createPinia()
export default pinia

// @/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import pinia from './store'
const app = createApp(App)
app.use(pinia)
app.mount('#app')

//创建store仓库
// 每一个store也有自己的创建api
import {defineStore} from 'pinia'
export const useCountStore = defineStore('count',{
  // 必须是函数
  state(){
    return {
      count:0
    }
  },
  actions:{
    increment(){
      this.count++
    },
    decrement(){
      this.count--
    },
    incrementIfOdd(){
      if(this.count % 2 === 1){
        this.count++
      }
    },
    incrementAsync(){
      setTimeout(() => {
        this.count++
      }, 1000);
    }

  },
  getters:{
    double():number{
      return this.count * 2
    }
  }
})

```

### 注意事项

​	pinia提供了创建仓库的函数，调用即可创建store，defineStore(id,options),id代表仓库的标识，options代表配置对象，即需要的核心概念

​	每个store其实都是向外暴露一个函数，通过调用这个函数可以获取到当前这个store对象

​	通过store对象获取state和getters内部数据，都可以直接对象.属性直接获取

​	通过store对象调用actions内部方法，都可以直接对象.方法直接调用

​	不能直接对store对象解构获取数据，因为会失去响应式，如果要解构，使用storeToRefs

​	在每个store文件内部，可以通过this获取store的数据和方法进行操作




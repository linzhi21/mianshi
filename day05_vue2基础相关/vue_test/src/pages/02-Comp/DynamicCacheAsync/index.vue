<template>
  <div>
    <!-- 动态组件 和 缓存组件 和 异步组件 -->
    <button @click="currentComp = 'Home'">Home</button>
    <button @click="currentComp = 'Posts'">Posts</button>
    <!-- 没有缓存
     component是一个内置组件，我们称作为动态组件，因为它跟is配合
     is的值是组件的名称，如果哪个组件名称被is使用，component就显示哪个组件-->
    <!-- <component :is="currentComp"/> -->

    <!-- 
      有缓存
      include: 指定只缓存哪些名称的组件
      exclude: 不绑在哪些名称的组件
      keep-alive不只是能缓存路由组件，只要是有切换销毁的组件都可以缓存
     -->
    <keep-alive include="Posts">
      <component :is="currentComp"/>
    </keep-alive>
    
    
 
   

    <button @click="loadModule">动态加载一个模块</button>
  </div>
</template>

<script type="text/ecmascript-6">

   
  
  // 路由懒加载: component: () => import('xxx.vue')  ==> 项目优化
  //   1. import()动态引入组件: 将组件拆分(单独)打包
  //   2. 路由组件的配置是一个函数: 函数开始不执行 ==> 默认不加载组件的打包文件 
  //   ==>第一次访问组件的路由路径时才请求加载打包文件   ==> 这就是懒加载的效果
    

  // 静态import ==> 被引入的模块会打包到一起
  // import Home from './components/Home'
  // import Posts from './components/Posts'

  // 异步组件，路由组件使用异步组件的写法称作路由懒加载，都是使用import函数
  // 非路由组件也可以进行懒加载，称作叫异步组件
  const Home = () => import('./components/Home')
  const Posts = () => import('./components/Posts')

  /* 
  动态import
  import(modulePath): 被引入的模块会被单独打包(code split)   es2017的新语法
  () => import(modulePath): 配置的组件, 函数开始不调用, 当第一次访问对应的路由路径时才会执行 ==> 请求加载打包文件
  import()返回promise, promise成功的结果就是整体模块对象
  本质上: 可以利用import()实现对任意模块的懒加载
  // */


  export default {
    name: 'DynamicCacheAsync',

    data () {
      return {
        currentComp: 'Home' // 初始要显示的动态组件的名称(组件标签名)
      }
    },

    methods: {
      loadModule () {
        // 动态引入math模块  ==> math是懒加载的模块
        import('./math3').then(module => {
          console.log(module)
          console.log(module.sum(1, 2), module.default(2, 3))
        })
      }
    },

    components: {
      Home,
      Posts
    }
  }
</script>

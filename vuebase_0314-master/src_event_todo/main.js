import Vue from 'vue' //默认引入的这个vue版本是不包含模板解析器

// import Vue from 'vue/dist/vue.esm' //手动我们引入了带模板解析器的Vue版本

import App from './App'
// 开发阶段禁用eslint的三种方式
// // 第一种禁用方式：只能禁用当前这个文件当中的eslint错误
// /* eslint-disable */

// 第二种禁用方式：在配置文件当中把固定的某个错误类型提示进行关闭
// 只能配置固定的错误类型，后期如果需要配置，要配置很多项错误类型

// 第三种：全体禁用
let a = 10

Vue.config.productionTip = false

new Vue({
  el:'#app',
  // 第一种渲染App的方式
  // 需要引入带模板解析器的vue版本，那么会造成后期打包体积过大，浏览器加载效率低
  // You are using the runtime-only build of Vue 
  // where the template compiler is not available. 
  // Either pre-compile the templates into render functions,
  // or use the compiler-included build
  // components:{
  //   App
  // },
  // template:'<App/>'


  // 第二种渲染App的方式
  // 通过render函数去渲染App组件，它的内部调用了一个方法，h，这个方法内部
  // 自己写了一个解析器的功能
  // 后期使用的就是这个版本，因为它没有解析器，后期代码体积会小
  render: h => h(App),

  // render:(h) => {
  //   return h(App)
  // } 
})

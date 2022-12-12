import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

// 1. 创建路由器
const router = new VueRouter({
	mode: 'history',
	// mode: 'hash',
	routes,
})

const originPush = VueRouter.prototype.push
VueRouter.prototype.push = function (location, onComplete, onAbort) {
  console.log('push()', onComplete, onAbort)
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete===undefined && onAbort===undefined) {
    return originPush.call(this, location).catch(() => {})
  } else { // 如果有指定任意回调函数, 通过call调用源push函数处理
    return originPush.call(this, location, onComplete, onAbort)
  }
}

// 2. 暴露
export default router

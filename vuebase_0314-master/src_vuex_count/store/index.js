// 这个文件就是我们的vuex配置文件
// 1安装
// 2引入并声明使用
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)//声明使用插件 本质调用函数

// state是状态的意思，其实就是数据，它是一个可以包含多个属性和属性值的对象
// 以后用来存储数据
const state = {
  count:0
}

// mutations也是一个对象，是一个包含一个或者多个方法的对象
// 这些方法当中都是在直接操作state数据，就是对state当中的属性进行赋值操作
// 不能在这些方法当中出现异步循环、判断、操作
const mutations = {
  INCREMENT(state){
    state.count++
  },
  DECREMENT(state){
    state.count--
  }
}

// actions也是一个对象，是一个包含一个或者多个方法的对象
// 这里面的方法有两个作用
// 1、和vue组件用户的行为进行对接
// 2、把用户行为需要对数据的操作提交给mutations
// actions函数当中是可以写异步 循环  判断

const actions = {
  increment1(context){
    // context上下文 是我们store的复制品，是一个新对象，只是里面有很多属性和store属性一样
    // 即使不用也要写
    context.commit('INCREMENT')
  },
  decrement({commit}){
    commit('DECREMENT')
  },

  incrementIfOdd({commit,state}){
    if(state.count % 2 === 1){
      commit('INCREMENT')
    }
  },
  incrementAsync({commit}){
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000);
  }
}
// getters也是一个对象，是一个包含一个或者多个方法的对象
// 它和组件当中计算属性的get道理一样，根据已有的数据计算一个没有的数据使用
// 它是要根据state当中已经存在的数据，计算一个新的数据供组件当中使用
// 虽然写的都是函数，函数名或者方法名其实是一个数据
const getters = {
  double(state){
    return state.count * 2
  }
}


// 3向外暴露一个store对象
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

// 4在main.js当中实例化vm的时候在配置对象当中注入store



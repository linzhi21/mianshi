const state = {
  // 页面加载初始化时执行, 读取sessionStorage中保存的数据
  // cartList: [],
  cartList: JSON.parse(sessionStorage.getItem('CART_LIST_KEY')) || [],
  xxx: {}
}
const mutations = {
  RECEIVE_CART_LIST (state, cartList) {
    state.cartList = cartList
  },

  /* 
  异步更新
问题1: vuex中的mutation可以执行异步操作吗?
- 功能可以 ==> 异步更新数据后界面确实会自动更新
- 问题 ==> vuex的调试工具监视不到mutation中的异步更新, 工具记录还是更新前的数据(不对)
- 扩展: 工具如何记录数据变化? ==> 每次mutation函数执行完后, 立即记录当前的数据   ==> 在mutation中同步更新state, 才能被记录到
  */
  asyncUpdate (state) {
    setTimeout(() => {
      state.cartList.push({
        id: Date.now(),
        name: 'CC',
        price: 2000,
        count: 3
      })
    }, 1000)
  }
}

const actions = {

  getCartList ({commit, state}, reload) {

    if (reload) {
      state.cartList = []
    }

    if (state.cartList.length>0) return

    console.log('请求获取数据...')
    setTimeout(() => {
      const cartList = [
        {
          id: 1,
          name: 'AA',
          price: 1000,
          count: 2
        },
        {
          id: 2,
          name: 'BB',
          price: 2000,
          count: 3
        }
      ]

      commit('RECEIVE_CART_LIST', cartList)
    }, 2000);
  }
}
const getters = {
  totalPrice (state) {
    return state.cartList.reduce((pre, item) => pre + item.count*item.price, 0)
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters
}
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

const state = {
  isFirst: true,
  isLoading: false,
  errMsg: '',
  userList: []
}
const mutations = {
  // 以后有几个数据们就有几个mutations
  // 数据的个数为参考
  // SET_ISFIRST(state, isFirst) {
  //   state.isFirst = isFirst
  // },
  // SET_ISLOADING(state, isLoading) {
  //   state.isLoading = isLoading
  // },
  // SET_ERRMSG(state, errMsg) {
  //   state.errMsg = errMsg
  // },
  // SET_USERLIST(state, userList) {
  //   state.userList = userList
  // }

  // 数据的修改时机为参考
  BEFORE_REQUEST(state){
    state.isFirst = false
    state.isLoading = true
  },
  SUCCESS_REQUEST(state,userList){
    state.isLoading = false
    state.userList = userList
  },
  FAILED_REQUEST(state,errMsg){
    state.isLoading = false
    state.errMsg = errMsg
  }

}
const actions = {
  // 异步发送请求，获取数据
  // 提交给mutation修改数据
  async search({commit},q) {
    // // this.isFirst = false
    // commit('SET_ISFIRST',false)
    // // this.isLoading = true
    // commit('SET_ISLOADING',true)

    commit('BEFORE_REQUEST')
    try {
      const response = await axios({
        url: 'https://api.github.com/search/users',
        method: 'get',
        params: { q }
      })

      // this.isLoading = false
      // commit('SET_ISLOADING',false)
      // commit('SET_USERLIST',response.data.items.map(item =>
      //   ({
      //     id: item.id,
      //     username: item.login,
      //     headerImg: item.avatar_url,
      //     url: item.url
      //   })))

      commit('SUCCESS_REQUEST',response.data.items.map(item =>
        ({
          id: item.id,
          username: item.login,
          headerImg: item.avatar_url,
          url: item.url
        })))


      // this.userList = response.data.items.map(item =>
      // ({
      //   id: item.id,
      //   username: item.login,
      //   headerImg: item.avatar_url,
      //   url: item.url
      // }))
    } catch (error) {
      // // this.isLoading = false 
      // commit('SET_ISLOADING',false)
      // // this.errMsg = error.message
      // commit('SET_ERRMSG',error.message)
      commit('FAILED_REQUEST',error.message)
    }
  }

}
const getters = {}





export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})




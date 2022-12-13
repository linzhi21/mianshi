<template>
  <h2 v-if="isFirst">欢迎光临</h2>
  <h2 v-else-if="isLoading">正在加载中......</h2>
  <h2 v-else-if="errMsg">{{ errMsg }}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user, index) in userList" :key="user.id">
      <a :href="user.url">
        <img :src="user.headerImg" style='width: 100px' />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>

</template>
<script>
import axios from 'axios'
export default {
  name: 'Main',
  data() {
    return {
      isFirst: true,
      isLoading: false,
      errMsg: '',
      userList: []
    };
  },
  mounted() {
    this.$bus.$on('search', this.search)
    // 也可以写成下面这个样子
    // this.$bus.$on('search',() => {

    // })
  },
  methods: {
    // 发请求：1、用啥发  2、往哪发（接口文档） 3、返回啥
    // promise.then.catch的写法
    // search(q){
    //   // 发请求前界面切换为正在加载......
    //   this.isFirst = false
    //   this.isLoading = true
    //   // axios使用起来很简单：注意三种参数
    //   // params参数  query参数  body请求体参数

    //   // params加在路径当中，属于路径的一部分，只能在这加,比如下面的1
    //   // https://api.github.com/search/users/1?q=aa


    //   // query参数有两个地方可以写，
    //   //  1、路径的后面以？分割，后面的key=value&key=value代表query参数
    //   // query参数写在路径后面不属于路径的一部分
    //   //  2、配置对象当中的params代表的传递的是query参数


    //   // body参数，只能写在配置对象当中的data属性或者对象用法的第二个参数


    //   axios({
    //     // url:'https://api.github.com/search/users?q=' + keyword,
    //     url:'https://api.github.com/search/user',
    //     method:'get',
    //     // query参数
    //     params:{q}
    //   }).then((response) => {
    //     this.isLoading = false
    //     this.userList = response.data.items.map(item => 
    //       ({
    //         id:item.id,
    //         username:item.login,
    //         headerImg:item.avatar_url,
    //         url:item.url
    //       })
    //     )
    //     // console.log(response);

    //   }).catch((error) => {
    //     this.isLoading = false
    //     this.errMsg = error.message
    //   })

    // }

    // async和await的写法
    async search(q) {
      this.isFirst = false
      this.isLoading = true
      try {
        const response = await axios({
          // url: 'http://127.0.0.1:8888/user/userinfo', 
          //浏览器直接发给目标服务器会跨域
          url: '/api/user/userinfo',
          method: 'get',
          // params: { q }
        })

        this.isLoading = false
        this.userList = response.data.items.map(item =>
        ({
          id: item.id,
          username: item.login,
          headerImg: item.avatar_url,
          url: item.url
        }))
      } catch (error) {
        this.isLoading = false
        this.errMsg = error.message
      }
  }
}
  
}
</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

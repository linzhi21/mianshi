<template>
  <div role="tabpanel" class="tab-panel" id="News">
    <ul class="list-group">
      <li class="list-group-item" v-for="(n, index) in newsList" :key="n.id">
        {{n.content}}
        <button 
          @click="toDetail(n)"
          type="button" 
          class="btn btn-primary" 
          data-toggle="button" 
          aria-pressed="false" 
          autocomplete="off">
          {{n.id}}
        </button>
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'News',
  data() {
    return {
      newsList:[
        {id:1,content:'news01'},
        {id:2,content:'news02'},
        {id:3,content:'news03'},
      ]
    };
  },
  methods:{
    toDetail(n){
      // 编程式导航，用于点击之后自己调用进行导航跳转
      // push是有历史记录，后期我们返回的时候，是可以选择返回的历史记录界面
      // replace是不保存历史记录，后期返回的时候，不能去到历史记录界面
      // this.$router.push()
      // this.$router.replace()

      // 路由跳转书写路径的方式和声明式导航一致

      console.log('i love you!');
      // this.$router.push('/home/news/newsdetail/' + n.id + '?newsContent=' + n.content)
      // this.$router.push(`/home/news/newsdetail/${n.id}?newsContent=${n.content}`)
      this.$router.replace({
        name:'newsdetail',
        params:{newsId:n.id},
        query:{newsContent:n.content}
      })
    }
  }
}
</script>

<style scoped>
</style>

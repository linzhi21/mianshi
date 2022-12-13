<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyword" type="text" placeholder="enter the name you search" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      keyword:''
    };
  },
  methods:{
    // 点击按钮，我们不再这发请求而是把收集的关键字keyword传递给Main
    // 在Main当中去发请求拿数据，数据就直接在Main当中保存使用
    // 如果在这发请求，我们拿回来的数据还是要传递给Main去使用，这样做可以
    // 但是传递的数据量比较大
    search(){
      this.$bus.$emit('search',this.keyword)
      this.keyword = ''
    }
  }
}
</script>

<style scoped>
</style>

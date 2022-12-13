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
    
    search(){
      // dispacth传递数据的时候只能传递一个，如果要传递多个封装对象去传递
      this.$store.dispatch('search',this.keyword)
    }
  }
}
</script>

<style scoped>
</style>

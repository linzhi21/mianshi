<template>
  <div>
    <div class="container">
      <Header></Header>
    </div>
    <div class="container">
      <div class="row">
        <!-- Nav tabs -->
        <Nav></Nav>
        <!-- Tab panes -->
        <div class="tab-content col-md-6">
          <!-- 这个组件是vue-router给我们提供的内置组件
          我们定义的路由组件在这个里面进行切换 -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Nav from '@/components/Nav'
export default {
  name: 'App',
  components:{
    Header,
    Nav
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>
</style>

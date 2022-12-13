<template>
  <ul class="list-group">
    <li class="list-group-item">newsId:{{ $route.params.newsId }}</li>
    <li class="list-group-item">newsContent:{{ $route.query.newsContent }}</li>
    <li class="list-group-item">newsTitle:{{ newsTitle }}</li>
  </ul>
</template>
<script>

let titleArr = [
  { id: 1, title: 'title01' },
  { id: 2, title: 'title02' },
  { id: 3, title: 'title03' },
]

export default {
  name: '',
  data() {
    return {
      newsTitle: ''
    };
  },
  // 路由组件在切换的时候如果切换的是同一个组件，那么这个路由组件不会销毁
  // 但是路由对象是变化的
  // mouted处理第一次的跳转
  // 非第一次通过watch去处理
  mounted() {
    setTimeout(() => {
      this.newsTitle = titleArr.find(item => item.id === this.$route.params.newsId).title
    }, 1000);
  },
  watch: {
    $route: {
      handler() {
        setTimeout(() => {
          this.newsTitle = titleArr.find(item => item.id === this.$route.params.newsId).title
        }, 1000);
      }
    }
  }


  // 直接watch每一次的跳转，通过immediate:true,处理第一次
  // watch: {
  //   $route: {
  //     immediate:true,
  //     handler() {
  //       setTimeout(() => {
  //         this.newsTitle = titleArr.find(item => item.id === this.$route.params.newsId).title
  //       }, 1000);
  //     }
  //   }
  // }
}
</script>

<style scoped>
</style>

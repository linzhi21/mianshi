<template>
  <div role="tabpanel" class="tab-pane active" id="home">
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" role="tablist">
      <li role="presentation" class="active">
        <router-link to="/home/message" aria-controls="Message" role="tab" data-toggle="tab">Message</router-link>
      </li>
      <li role="presentation">
        <router-link to="/home/news" aria-controls="News" role="tab" data-toggle="tab">News</router-link>
      </li>
    </ul>
    <!-- Tab panes -->
    <div class="tab-content">
      <!-- 缓存路由组件，让路由组件不死 
      include 后面跟的是组件的name名称
      -->
      <keep-alive include="Message">
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {

    };
  },
}
</script>

<style scoped>
</style>

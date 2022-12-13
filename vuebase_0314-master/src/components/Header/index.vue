<template>
  <div class="page-header">
    <h1>路由组件的练习</h1>
    <button @click="$router.back()">back</button>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {

    };
  },
}
</script>

<style scoped>
</style>

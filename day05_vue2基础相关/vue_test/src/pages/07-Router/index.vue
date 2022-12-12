<template>
  <div>
    <router-link to="/router">跳转到当前路由</router-link>
    <button @click="$router.push('/router')">跳转到当前路由</button>

  </div>
</template>

<script type="text/ecmascript-6">

  export default {
    name: 'Router',
  }
</script>
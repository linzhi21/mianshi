<template>
  <div>
    <h2>我爱你赵丽颖</h2>
    <button @click="count++">爱了{{count}}次</button>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      count:0
    };
  },
}
</script>

<style scoped>

</style>

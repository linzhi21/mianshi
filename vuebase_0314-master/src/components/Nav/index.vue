<template>
  <ul class="nav nav-stacked col-md-6" role="tablist">
    <li role="presentation" class="active">
      <!-- <a href="#home" aria-controls="home" role="tab" data-toggle="tab">Home</a> -->
      <router-link aria-controls="home" role="tab" data-toggle="tab" to="/home">Home</router-link>
    </li>
    <li role="presentation">
      <!-- <a href="#About" aria-controls="About" role="tab" data-toggle="tab">About</a> -->
      <router-link aria-controls="About" role="tab" data-toggle="tab" to="/about">About</router-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'Nav',
  data() {
    return {

    };
  },
}
</script>

<style scoped>
</style>

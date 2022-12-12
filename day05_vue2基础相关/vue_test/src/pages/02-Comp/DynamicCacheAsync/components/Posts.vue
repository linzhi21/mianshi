<template>
  <div class="box">
    Posts Component
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('posts beforeCreate');
  },
  beforeDestroy(){
    console.log('posts beforeDestroy')
  },
  destroyed() {
    console.log('posts destroyed')
  },
  activated() {
    console.log(1111);
  },
  deactivated(){
    console.log(222);
  }
}
</script>
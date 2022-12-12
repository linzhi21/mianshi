<template>
  <div class="box">
    <slot name="top"></slot>
    <div>{{title}}</div>
    <slot name="bottom"></slot>
    <slot name="other">
      <h4>ccccc</h4>
    </slot>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['title']
}
</script>

<style scoped>

</style>

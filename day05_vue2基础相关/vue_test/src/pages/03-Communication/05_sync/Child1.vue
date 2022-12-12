<template>
  <div class="box">
    <span>小明每次花100元</span>
    <button @click="spend">点击花钱</button>, 老爸还剩下{{money}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child1',
    props: ['money'],

    methods: {
      spend () {
        this.$emit('update:money', this.money-100)
      }
    }
  }
</script>

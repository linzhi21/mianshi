<template>
  <div class="box">
    <span>小明每次花200元</span>
    <button @click="$emit('input', value-200)">点击花钱</button>, 老爸还剩下{{value}}
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Child2',
    props: ['value']
  }
</script>

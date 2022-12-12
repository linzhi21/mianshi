<template>
  <el-tooltip effect="dark" :content="title" placement="top">
    <!-- 接收的属性是不确定的(属性名和个数都不确定) -->
    <el-button v-bind="$attrs" v-on="$listeners"></el-button>
  </el-tooltip>
</template>

<script>
export default {
  name: 'HintButton',
  props: ['title'],
  mounted() {
    // $attrs用来存储所有在props未声明的标签属性的对象
    console.log(this.$attrs) 
    // $listeners用来存储的给当前组件绑定的所有事件监听方法(事件名是方法名, 回调是方法的函数)的对象
    console.log(this.$listeners)
  },
}
</script>

<style scoped>

</style>

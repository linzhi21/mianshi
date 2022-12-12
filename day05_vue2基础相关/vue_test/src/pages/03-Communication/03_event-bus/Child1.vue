<template>
  <div class="box">
    <h2>Child111 component</h2>
    <p>msg: {{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'Child1',
  data () {
    return {
      msg: 'abc'
    }
  },

  mounted () {
    // 给事件总线绑定事件监听
    this.$bus.$on('updateMsg', (data) => {
      console.log('---------')
      this.msg += data
    })
  },

  beforeDestroy () {
    // 在组件死亡前, 解绑事件总线上的updateMsg监听  ==> 如果不处理, 就会出现内存泄露
    this.$bus.$off('updateMsg')
  }
}
</script>

<style scoped>

</style>

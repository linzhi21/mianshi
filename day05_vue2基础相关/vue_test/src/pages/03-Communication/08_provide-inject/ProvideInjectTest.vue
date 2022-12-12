<template>
  <div class="box">
    <h1>组件间通信8: provide + inject</h1>

    <h2>祖组件标题</h2>
    <p>
      content1: {{content1}} 
      <button @click="content1+= '--'">更新</button>
    </p>
    <p>
      content2.name: {{content2.name}}
      <button @click="content2={name: '+++'}">更新content2对象</button>
      &nbsp;
      <button @click="content2.name += '***'">更新content2对象内的name</button>
    </p>
    <Child/>
  </div>
</template>
<script>
import Child from './Child'
export default {
  name: 'ProvideInjectTest',
  data () {
    return {
      content1: 'abc',
      content2: {
        name: 'tom'
      }
    }
  },
  // 声明向后代提供数据

  // provide本省并不是说提供的就会自动变为变为响应式
  // 而是要看你提供的数据是不是响应式
  // 你提供的是响应式，那么后代组件注入使用的也就是响应式
  // 你提供的本来就不是响应式数据，后期使用也不是响应式

  provide () { // provide提供的数据本身不是响应式的
    return {
      content11: this.content1,//这个数据提供了以后并不是响应式数据
      content22: this.content2, // 响应式对象内部的数据依然是响应式的
      updateContent1: this.updateContent1
    }
  },

  methods: {
    updateContent1 (end) {
      // this.content1 += end
      this.content2.name += end
    },
  },

  components: {
    Child
  }
}
</script>

<style lang="less" scoped>

</style>

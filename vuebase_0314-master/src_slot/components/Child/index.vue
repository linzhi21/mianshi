<template>
  <div>
    <h2>我爱赵丽颖</h2>
    <!-- 插槽：分为三种：默认插槽  具名插槽   作用域插槽 -->
    <!-- slot就是插槽，它本质上是vue内置的一个组件 
    如果我们写slot不带name属性就称作是默认插槽，默认插槽只能有一个
    插槽就是我们所说的留坑，后期父组件在使用的时候可以传递结构和样式数据
    进行填坑，插槽当中可以有默认的内容，如果父组件没有填坑，显示默认的，
    如果父组件填坑了，那么使用传递的内容，不用默认内容-->
    <div>
      <slot>哈哈</slot>
    </div>
    <slot name="aa">哈哈</slot>
    <slot name="bb">哈哈</slot>
  </div>
</template>
<script>
export default {
  name: 'Child',
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>

</style>

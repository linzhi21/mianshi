<template>
  <ul>
    <li v-for="(todo, index) in todoList" :key="todo.id">
      <!-- <span :style="{color:todo.isOver?'green':''}"> {{todo.content}}</span> -->
      <!-- 通过插槽回传数据给父组件，有了这些属性我们就称插槽为作用域插槽 -->
      <slot :todo="todo" :index="index">{{todo.content}}</slot>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'ScopedSlot',
  props:{
    todoList:Array //第二种写法，通过简单的对象写法，可以限定传递过来的数据类型
  },
  data() {
    return {
      
    };
  },
}
</script>

<style scoped>

</style>

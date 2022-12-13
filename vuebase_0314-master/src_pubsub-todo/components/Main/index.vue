<template>
  <ul class="todo-main">
    <!-- <Item 
      v-for="(todo, index) in todoList" 
      :key="todo.id" 
      :todo="todo" 
      :updateOneTodo="updateOneTodo"
      :deleteOneTodo="deleteOneTodo"
      :index="index">
    </Item> -->

    <Item 
      v-for="(todo, index) in todoList" 
      :key="todo.id" 
      :todo="todo" 
      :index="index">
    </Item>
  </ul>
</template>
<script>
import Item from '@/components/Item'
export default {
  name: 'Main',
  // props:['todoList','updateOneTodo','deleteOneTodo'], 
  props:['todoList'], 
  //声明接收属性
  //接收到属性之后，以后在当前这个组件当中就可以使用属性获取到属性值
  // 这个接收的属性就相当于是data当中定义的
  components: {
    Item
  },
  data() {
    return {

    };
  },
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>

<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <Header :addTodo="addTodo"></Header>
        <!-- 如果属性写在html标签身上就是绑定数据,不管有没有v-bind
        如果属性写在组件标签身上，那么就是props传递数据，不管有没有v-bind 
        这里是在组件标签身上加属性，如果不写冒号传递是一个字符串，如果写了
        传递的就是动态数据数组
        -->
        <Main 
          :todoList="todoList" 
          :updateOneTodo="updateOneTodo" 
          :deleteOneTodo="deleteOneTodo">
        </Main>
        <Footer 
          :todoList="todoList" 
          :updateAllTodo="updateAllTodo" 
          :deleteAllIsOverTodo="deleteAllIsOverTodo">
        </Footer>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todo_key'))||[
        { id: 1, content: '抽烟', isOver: false },
        { id: 2, content: '喝酒', isOver: true },
        { id: 3, content: '烫头', isOver: false },
      ],
    };
  },
  methods: {
    // 添加
    addTodo(todo) {
      this.todoList.unshift(todo)
    },
    // 修改单个选中状态
    updateOneTodo(index) {
      this.todoList[index].isOver = !this.todoList[index].isOver
    },
    // 点击删除单个todo
    deleteOneTodo(index) {
      this.todoList.splice(index, 1)
    },
    // 修改多个选中状态 （全选和全不选） 
    updateAllTodo(val) {
      this.todoList.forEach(item => item.isOver = val)
    },
    // 点击删除多个已完成的todo
    deleteAllIsOverTodo(){
      this.todoList = this.todoList.filter(item => !item.isOver)
    }
  },

  // 一般监视和深度监视

  // 如果监视的是数组，监视数组的长度，数组长度有改变，那么就会监视到
  // 如果监视的是数组内部的对象的属性，那么一般监视监视不到，需要深度监视

  // 监视的就是对象
  // 监视的是对象的地址，一般监视只有对象的地址发生改变才能监视到
  // 如果改变的是对象的属性，那么要深度监视

  watch:{
    todoList:{
      deep:true,
      handler(newVal,oldVal){
        localStorage.setItem('todo_key',JSON.stringify(this.todoList))
      }
    },
  }
}
</script>

<!-- scoped 是作用域的意思，作用是把样式作用域限制在本组件
不影响其它组件 -->
<style scoped>
/*app*/
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>

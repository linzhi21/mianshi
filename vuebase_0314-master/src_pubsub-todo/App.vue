<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 之前子向父传递使用props传递函数数据 -->
        <!-- <Header :addTodo="addTodo"></Header> -->
        <!-- ref如果写在html标签身上代表获取这个真实dom元素
        ref写在组件标签身上代表获取组件对象 -->
        <!-- <Header ref="header"></Header> -->
        <Header @addTodo="addTodo"></Header>

        <!-- <Main 
          以前的props传递函数
          :todoList="todoList" 
          :updateOneTodo="updateOneTodo" 
          :deleteOneTodo="deleteOneTodo">
        </Main> -->

        <!-- 消息的订阅和发布pubsub实现爷孙直接传递数据 -->
        <Main :todoList="todoList"></Main>
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
import PubSub from 'pubsub-js'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  },





  mounted(){
    // 获取到header的组件对象
    // $on是Vue的显式原型和vm的隐式原型当中的方法
    // vm和组件对象的关系：vm的隐式原型就是组件对象隐式原型的隐式原型
    // this.$refs.header.$on('addTodo',this.addTodo)//后期不用，麻烦

    // this如果是在new Vue的时候配置对象当中代表vm
    // this如果是在组件的配置对象当中代表当前组件对象
    this.$bus.$on('updateOneTodo',this.updateOneTodo)

    PubSub.subscribe('haha',this.deleteOneTodo)
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
    deleteOneTodo(msg,index) {
      console.log(index);
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

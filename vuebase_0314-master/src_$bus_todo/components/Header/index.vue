<template>
  <div class="todo-header">
    <input @keyup.enter="addT" type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="content"/>
  </div>
</template>
<script>
export default {
  name: 'Header',
  // props:['addTodo'],
  data() {
    return {
      content:''
    };
  },
  methods:{
    addT(){
      let {content} = this  //====> let content = this.content
      if(content&&content.trim()){
        // 把收集的内容封装成一个新的todo对象
        let obj = {
          id:Date.now(),
          content,
          isOver:false
        }

        // 需要把这个对象给加到todoList当中
        // 数据在哪，修改数据的方法就在哪，组件当中需要让数组所在的组件把修改数据的方法传递过来
        // 组件当中去调用，传参给数据所在的组件
        // this.addTodo(obj) //props使用父组件传递的函数，调用传参传递数据

        // $emit和$on都是vm原型当中的方法
        // $on是绑定，$emit是触发（本质其实就是自己在调用事件的回调）
        
        this.$emit('addTodo',obj)
      }else{
        alert('输入的内容不能为空！！！')
      }
      this.content = ''
    }
  }
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>

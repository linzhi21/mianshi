<template>
  <div class="todo-footer">
    <label>
      <input type="checkbox" v-model="isAllOver"/>
    </label>
    <span>
      <span>已完成{{overNum}}</span> / 全部{{todoList.length}}
    </span>
    <button class="btn btn-danger" @click="deleteAllIsOver">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  props:['todoList','updateAllTodo','deleteAllIsOverTodo'],
  data() {
    return {

    };
  },
  methods:{
    deleteAllIsOver(){
      this.deleteAllIsOverTodo()
    }
  },
  computed:{
    overNum(){
      return this.todoList.reduce((prev,item) => {
        if(item.isOver){
          prev += 1
        }
        return prev
      },0)
    },

    isAllOver:{
      get(){
        return this.todoList.every(item => item.isOver) && this.todoList.length
      },
      set(val){
        this.updateAllTodo(val)
      }
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>

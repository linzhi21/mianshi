<template>
  <li :class="{active:isShow}" @mouseenter="isShow = true" @mouseleave="isShow = false">
    <label>
      <!-- 单个的checkbox 可读可写 有两种方案
      1、使用checked 配合后期 click  实现可读可写
      2、使用vmodel配合计算属性的get和set 实现可读可写
      -->
      <input type="checkbox" :checked="todo.isOver" @click="updateOneT"/>
      <span>{{todo.content}}</span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="deleteOneT">删除</button>
  </li>
</template>
<script>
export default {
  name: 'Item',
  // props:['todo','index','updateOneTodo','deleteOneTodo'],
  props:['todo','index','deleteOneTodo'],
  data() {
    return {
      isShow:false
    };
  },
  methods:{
    // 点击修改单个状态
    updateOneT(){
      // this.updateOneTodo(this.index)
      this.$bus.$emit('updateOneTodo',this.index)
    },

    deleteOneT(){
      this.deleteOneTodo(this.index)
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li.active{
  background-color: hotpink;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>

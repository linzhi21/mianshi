<template>
  <div>

    <!-- 默认插槽和具名插槽 -->
    <Child>
      <!-- 以后给插槽填坑，一个插槽对应一个template -->
      <!-- 如果template什么都不写，或者写了v-slot:default，代表给默认插槽填坑 
      如果template标签给具名插槽填坑，那么就必须写v-slot:插槽名称-->
      <template>
        <button>点击我</button>
      </template>

      <template v-slot:aa>
        <button>再点击我</button>
      </template>
    </Child>

    <Child>
      <!-- 以后给插槽填坑，一个插槽对应一个template -->
      <!-- 如果template什么都不写，或者写了v-slot:default，代表给默认插槽填坑 
      如果template标签-->
      <template v-slot:default>
        <p>就是爱你</p>
      </template>

      <template v-slot:aa>
        <a href="###">爱着你</a>
      </template>
    </Child>
    



    <!-- 
      定义一个专门用于遍历展示列表的组件

      1、数据是定义在父组件的
      2、数据需要传递给子组件，子组件只是为了把数据进行展示
      3、数据在子组件当中展示的过程中，如果需要额外的结构或者样式，子组件说了不算
      需要父组件说了算,此时就要用到作用域插槽
     -->
     <!-- 展示todo 完成的人显示红色 -->
      <ScopedSlot :todoList="todoList">
        <template v-slot:default="slotProps">
          <!-- slotProps是一个对象
            {
              todo,
              index
            }
          -->
          <span :style="{color:slotProps.todo.isOver?'red':''}">{{slotProps.todo.content}}</span>
        </template>
      </ScopedSlot>

       <!-- 展示todo 斑马-->
      <ScopedSlot :todoList="todoList">
        <template v-slot:default="{todo,index}">
          <span :style="{color:index%2===0?'red':'green'}">{{todo.content}}</span>
        </template>
      </ScopedSlot>
    
  </div>
</template>
<script>
import Child from '@/components/Child'
import ScopedSlot from '@/components/ScopedSlot'
export default {
  name: 'App',
  components:{
    Child,
    ScopedSlot
  },  
  data() {
    return {
      todoList:[
        { id: 1, content: '抽烟', isOver: false },
        { id: 2, content: '喝酒', isOver: true },
        { id: 3, content: '烫头', isOver: false },
      ],
    };
  },
}
</script>

<style scoped>

</style>

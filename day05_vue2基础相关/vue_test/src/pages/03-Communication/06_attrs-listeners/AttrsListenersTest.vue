<template>
  <div class="box">
    <h1>组件间通信6: $attrs与$listeners</h1>
    <h2>需求: 自定义带Hover提示的按钮</h2>

    <HintButton title="添加用户" type="primary" icon="el-icon-plus" size="small" @click="add" class="xxx"/>

    <HintButton title="修改用户" type="info" icon="el-icon-edit" size="small" round 
      @click="update" @xxx="update"/>

    <!-- 
      给组件标签绑定自定义事件监听, 内部一定emit分发回调才会调用
      el-button内部没有分发dblclick自定义的事件监听
      给el-button绑定原生的dblclick事件监听, 就可以处理了
    -->
    <HintButton title="双击删除" type="danger" icon="el-icon-delete" size="small" @dblclick.native="deleteData"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import HintButton from './HintButton.vue'
  export default {
    name: 'AttrsListenersTest',
    components: {
      HintButton
    },
    methods: {
      add () {
        alert('add')
      },
      update () {
        alert('update')
      },

      deleteData () {
        alert('deleteData')
      }
    },
  }
</script>

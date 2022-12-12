<template>
  <div class="box">
    <h2>生命周期测试11</h2>
    <p ref="p">{{msg}}</p>
    <button @click="msg += '--'">更新</button>
    <button @click="$destroy()">销毁</button>
    <br>
    <br>
    <Child :msg="msg"/> 
  </div>
</template>

<script>
  import Child from './Child'
  export default {
    name: 'Life1',  // 路由组件一定要有name配置

    data () {
      return {
        msg: 'abc'
      }
    },

    /**
     初始化阶段
     */
    beforeCreate () {
      console.log('beforeCreate', this.msg)
    },

    // 初始化的操作(数据代理, 将methods中的方法添加到组件对象)

    created () {
      console.log('created', this.msg)
    },
    // 编译模板(在内存中)
    beforeMount () {
      console.log('beforeMount', this.$refs.p)
    },
    // 挂载到页面显示
    mounted () {
      console.log('mounted', this.$refs.p)
    },

    /**
    更新阶段
    */
   /* 
   问题: 是在界面更新前调用?(此时数据已经更新了)
   */
    beforeUpdate () {
      console.log('beforeUpdate', this.msg, this.$refs.p.innerHTML)
    },

    // 更新界面

    updated () {
      console.log('updated', this.msg, this.$refs.p.innerHTML)
    },

    /**
    死亡阶段
    */
    beforeDestroy () {
      console.log('beforeDestroy')
    },

    destroyed () {
      console.log('destroyed')
    },

    // // // 激活: 初始显示最后 / 再回到当前路由
    activated () {
      console.log('activated')
    },

    // 当前组件没有死亡, 但不可见: 离开当前路由
    deactivated () {
      console.log('deactivated')
    },

    // // // // // 捕获子组件传递过来错误
    errorCaptured (err, child, info) {
      // err 代表错误信息
      // child 发生错误的子组件对象
      // info 代表在子组件的哪里发生的错误
      // console.log(err,child, info)
      return false
    },

    components: {
      Child
    }
  }


</script>
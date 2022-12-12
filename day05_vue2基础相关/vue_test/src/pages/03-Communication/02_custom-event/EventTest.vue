<template>
  <div class="box">
    <h1>组件间通信2: vue自定义事件</h1>


    <!-- 
    区分原生事件监听与自定义事件监听(从3个方面分析)
    1. 如何绑定监听?
      原生:
        原生标签上:  @事件名="回调函数($event)", 事件名只能是有限的几个
        组件标签上: 
          @事件名.native="回调函数($event)", 事件名只能是有限的几个
      自定义:
        原生标签上:  不可以
        组件标签上: @事件名="回调函数($event)", 事件名可以任意
    2. 如何分发事件?
      原生: 当用户对目标元素做相应的操作时, 浏览器自动分发事件, 并指定包含事件相关数据的对象: 事件对象(event)
      自定义: 在子组件内部, 通过 $emit('事件名', data), 数据可以不指定, 且值是任意类型
    3. 事件对象是什么样的?
      原生: 包含事件相关信息数据属性的对象: offsetX/offsetY/target/keyCode
      自定义: 就是分发指定的数据(不一定是对象, 是任意类型)
      $event: 原生的是对象, 但自定义是任意类型(有可能是undefined) , 但一般我们不叫它事件对象
    -->
    <h2>原生事件监听</h2>
    <button @click="test1">原生标签原生DOM事件监听</button>
    <button @click="test2('abc', $event)">原生标签原生DOM事件监听2</button>

    <Event1 @click.native="test3"/>

    <h2>自定义事件监听</h2>
    <p>count: {{count}}</p>
    <Event2 ref="event2" @xxx="test4" @click="test5($event)"/>

  </div>
</template>

<script type="text/ecmascript-6">
  import Event1 from './Event1.vue'
  import Event2 from './Event2.vue'

  export default {
    name: 'EventTest',

    data () {
      return {
        count: 0
      }
    },

    mounted () {
      console.log(this.constructor)
      // 给event2组件对象绑定自定义事件监听
      this.$refs.event2.$on('xxx', this.test5)
      console.log(this)
      console.log(this.constructor)
    },

    // beforeDestroy () {
    //   // 解绑事件监听  ===> 此时其实不太需要
    //    this.$refs.event2.$off('xxx')
    // },

    methods: {
      test4 (event) {
        alert(event)
         this.count += event
      },

      test5 (data) {
        console.log('----test5')
        alert(data)
      },


      test1 (event) {
        console.log(event)
        alert(event.target.innerHTML)
      },

      test2 (msg, event) {
        alert(msg + '---' + event.target.innerText)
      },

      test3 (event) {
        alert('-------')
      }
    },

    components: {
      Event1,
      Event2,
    },
  }
</script>

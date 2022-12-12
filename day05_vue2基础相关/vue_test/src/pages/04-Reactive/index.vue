<template>
  <div class="box">

    <ul>
      <li v-for="(item, index) in arr" :key="index">{{item}}</li>
    </ul>
    <p>数组长度: {{arr.length}}</p>

    <p>xxx: {{xxx}}</p>
     <p>msg1: {{msg1}}</p>

    <button @click="update">更新</button>
    
    <data-test :msg4="msg1"></data-test>

  </div>
</template>

<script type="text/ecmascript-6">
  import DataTest from './DataTest'
  export default {
    name: 'Reactive',

    data () {
      // 什么时候需要给组件对象添加一个非响应式数据?
        // 组件界面没有根据这个数据进行动态显示
      this.xxx = 'cccc'

      return {
        msg1: {name: 'aaaa'},
        msg3: 'atguigu',
        arr: [
          {name: 'A'},
          {name: 'B'},
        ]
      }
    },

    /* data: {
      msg1: {name: 'aaaa'},
      msg3: 'atguigu',
    }, */

    methods: {
      update () {
        // this.arr = []   // 会更新
        // this.arr[0] = {name: 'C'}  // 不会更新 内部没有给数组的下标属性添加setter
        // this.arr.splice(0, 1, {name: 'C'}) // 会更新 内容重新定义的arr的splice方法
        // this.arr[0].name = 'D' // 会更新 更新对象的name属性
        // this.arr.length = 5   // 不会更新  没有给数组的length加setter
        // this.arr.push({name: 'E'}) // 会更新, 数组方法重写了
        // this.xxx = this.xxx + '---' // 不会更新, 不是响应式数据
        this.msg1.name += '++'
      },
    },


    components: {
      DataTest
    }
  }
</script>
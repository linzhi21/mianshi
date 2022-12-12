<template>
  <div class="box">
    <h1>组件间通信7: $ref & $children & $parent</h1>

    <p>BABA有存款: {{money}}</p>
    <button @click="borrow1">找小明借钱100</button><br>
    <button @click="borrow2">找小红借钱150</button><br>
    <button @click="borrow3">找所有孩子借钱200</button><br>
    
    <br>
    <Son ref="son"/>

    <br>
    <Daughter ref="dau"/>
  </div>
</template>

<script>
import Son from './Son'
import Daughter from './Daughter'

export default {
  name: 'ChildrenParentTest',
  data () {
    return {
      money: 1000
    }
  },

  methods: {
    borrow1 () {
      // 得到son组件, , 并更新其数据
      // this.$refs.son.money -= 100
      this.$refs.son.borrowMoney(100)
      // 更新自己的数据
      this.money += 100
    },

    borrow2 () {
      // 得到son组件, , 并更新其数据
      // this.$refs.dau.money -= 150
      this.$refs.dau.borrowMoney(150)
      // 更新自己的数据
      this.money += 150
    },


    borrow3 () {
      // 得到所有子组件对象, 并更新它们的数据
      this.$children.forEach(child => {
        child.borrowMoney(200)
        // 更新自己的数据
        this.money += 200
      })
      
    }
  },

  components: {
    Son,
    Daughter
  }
}
</script>

<style>

</style>

<template>
  <div>
    <ul>
      <li v-for="(item, index) in data" :key="index" @click.stop="showChild(item)">
        {{item.text}}
        <Tree :data="item.children" v-show="item.isShow"></Tree>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"Tree",  //递归组件必须写name
  props:['data'],
  data(){
    return {
      // isShow:false
      // currentIndex: -1
    }
  },
  methods: {
    showChild(item){
      // this.$set(item,'isShow',!item.isShow) //这一行可以搞定，但是每次都要添加新属性
      
      if(item.hasOwnProperty('isShow')){
        item.isShow = !item.isShow
      }else{
        this.$set(item,'isShow',true)
      }

    }
  },
}
</script>

<style scoped>

</style>

(function(w){
  w.mybutton = {
    // 配置对象，这个配置对象和vue的配置对象几乎一样，除了没有el以外
    data(){
      // 面试题：为什么组件当中data必须是函数，不能写对象
      return {
        count:0
      }
    },
    // data:{
    //   count:0
    // },
    template:'<div><h2>我爱你赵丽颖</h2><button @click="count++">爱了{{count}}次</button></div>'
  }
})(window);
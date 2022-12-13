<template>
  <div>
    <!-- {{count}} <br> -->
    {{$store.state.count}} <br>
    {{count}} <br>
    {{double}} <br>
    <!-- {{count1}} <br> -->
    <button @click="increment">点击+</button>
    <button @click="decrement">点击-</button>
    <button @click="incrementIfOdd">点击奇数+</button>
    <button @click="incrementAsync">点击异步+</button>
  </div>
</template>
<script>
import {mapState,mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  data() {
    return {
      // count:0
    };
  },

  // 对方法进行简化操作，获取方法调用比较单间
  // 通过mapMutations和mapActions可以映射方法的操作
  // 映射方法是在methods当中进行
  methods:{
    // 最原始的vue当中的写法
    // increment(){
    //   this.count++
    // },
    // decrement(){
    //   this.count--
    // },
    // incrementIfOdd(){
    //   if(this.count % 2 === 1){
    //     this.count++
    //   }
    // },
    // incrementAsync(){
    //   setTimeout(() => {
    //     this.count++
    //   }, 1000);
    // }





    // 以后我们的方法去映射的很少，一般都是自己去dispatch
    // ...mapActions(['decrement','incrementIfOdd','incrementAsync']),

    // ...mapActions({
    //   increment:'increment1'
    // })

    // 下面这个方法不能去写，因为根本没有这样的写法
    // 只有在映射数据的时候，回调函数会把state传递给形参
    // 映射方法的时候不会把actions和mutations传递给形参
    // ...mapActions({
    //   increment:actions => actions.increment1
    // })



  
    increment(){
      // 和actios当中对应的方法进行对接,拧开关
      // dispatch和当年我们学的emit道理是一样的，分发触发的意思
      // 本质是在调用对应的actions函数
      this.$store.dispatch('increment')
      // this.$store.commit('INCREMENT')  
      //如果单纯的就是修改数据，那么可以省略actions函数，直接提交mutations修改
      // 但是这样的情况几乎没有，所以我们还是要掌握完整的流程
    },

    decrement(){
      this.$store.dispatch('decrement')
    },

    incrementIfOdd(){
      this.$store.dispatch('incrementIfOdd')
    },
    incrementAsync(){
      this.$store.dispatch('incrementAsync')
    } 
  },

  // 对数据进行简化操作，获取数据简单，自己从vuex把数据给捞到vue组件当中
  // 捞数据以后用的全是计算属性computed,vuex的数据包括state和getters
  computed:{
    // count(){
    //   return this.$store.state.count
    // },
    ...mapState(['count']),


    // 下面这个写法去获取getters计算的数据不行
    // 只有state可以传递对象，对象当中写回调函数
    // ...mapGetters({
    //   double:getters => getters.double
    // })


    // mapState和其余的映射函数道理是一样的，它本质是一个函数，函数调用需要传递一个参数
    // 这个函数返回的结果是一个对象，对象长下面这个样子
    // {
    //   count(){
    //     return this.$store.state.count
    //   },
    // }

    // mapState里面传递的参数可以是数组也可以是对象
    // 使用数组的时候需要符合下面两个条件
    // 1、组件当中数据的名称要和vuex当中数据的名称一样
    // 2、使用了模块化必须使用命名空间或者不使用用模块化
    
    // 一旦上面的条件不符合，我们就不能传递数组了,传递对象
    // 下面这个对象写法也是有条件，条件就是不能使用模块化
    // 后期项目基本都要使用模块化，所以基本不用
    // ...mapState({
    //   count1:'count'
    // })


    // 使用了模块化，对象传递,后期这个用的贼多，它什么情况都能用
    // ...mapState({
    //   count1:state => state.count
    // })

  }
  // computed:mapState(['count'])
}
</script>

<style scoped>

</style>

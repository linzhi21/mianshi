<template>
  <div>
    <!-- <div v-show="a.b">
      <div>{{a.b.c}}</div>
      <div>{{a.b.d}}</div>
      <div>{{a.b.e}}</div>
    </div> -->

    <p>xxx: {{xxx}}</p>
    <p>msg: {{msg}}</p>
    <button @click="update">更新</button>
    <button @click="$forceUpdate()">更新2</button>
    <div v-if="product.address">
      <p>{{product.address.name}}</p>
      <p>{{product.address.time}}</p>
    </div>
    
    
    firstName: <input type="text" v-model="firstName"><br>
    lastName: <input type="text" v-model="lastName">
    <p>fullName: {{fullName}}</p>
    <p>fullName: {{fullName}}</p>
    <p>fullName2: {{fullName2}}</p>
    <p>fullName3: {{fullName3()}}</p>
    <p>fullName3: {{fullName3()}}</p>


    <ul>
      <li v-for="item in persons" v-if="item.age>20">
      <!-- <li v-for="item in filterPersons"> -->
        {{item}}
      </li>
    </ul>
    <ul v-if="isShow">
      <li v-for="(item, index) in persons">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Test',

  data () {

    this.xxx = 'abc' // xxx不是响应式的, 不能被watch
    return {
      a: {},
      msg: 'abc',
      product: {},
      firstName: 'A',
      lastName: 'B',
      fullName2: '',
      isShow: true,
      persons: [
        {id: 1, name: 'A', age: 21},
        {id: 1, name: 'A', age: 20},
        {id: 1, name: 'A', age: 23},
      ],

      arr: [{m: {n: 1}}]
    }
  },

  mounted () {
    setTimeout(() => {
      const product = {
        id: 1,
        name: 'xxx',
        address: {
          name: 'WH',
          time: 1234
        }
      }
      this.product = product
    }, 1000)
  },

  methods: {
    update () {
      // this.msg += '--'
      // this.xxx += '++'
      this.persons[4] = {
        id: 6,
        name: 'xxx',
        address: {
          name: 'WH',
          time: 1234
        }
      }
    },


    fullName3 () {
      console.log('fullName3()')
      return this.firstName + '-' + this.lastName
    }
  },

  computed: {
    filterPersons () {
      return this.persons.filter(item => item.age>20)
    },
    // 这个计算属性相当于监视了fisrstName和lastName
    fullName () {
      console.log('fullName')
      return this.firstName + '-' + this.lastName

      // 不能异步返回计算结果
      // setTimeout(() => {
      //   return this.firstName + '-' + this.lastName
      // }, 1000)

      // return undefined
    }
  },

  watch: {
    firstName (value) {
      // this.fullName2 = value + '-' + this.lastName
      // 可以异步操作后更新数据
      setTimeout(() => {
        this.fullName2 = value + '-' + this.lastName
      }, 1000)
    },

    lastName: {
      immediate: true,
      handler (value) {
        this.fullName2 = this.firstName + '-' + value
      }
    },

    arr: {
      deep: true, // 深度监视
      immediate: true, // 初始显示时就会执行一次监视回调
      handler () {

      }
    }

  }
}
</script>

<style scoped>

</style>

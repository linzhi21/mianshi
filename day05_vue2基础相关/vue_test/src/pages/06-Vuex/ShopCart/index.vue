<template>
  <div>
    <h2>ShopCart 组件</h2>

    <ul>
      <li v-for="item in cartList" :key="item.id">
        {{item.name}}--{{item.price}}--{{item.count}}
      </li>
    </ul>
    <p>总价格: {{totalPrice}}</p>

    <hr>
    <button @click="$store.commit('asyncUpdate')">更新</button>
    <button @click="$store.dispatch('getCartList', true)">强制重新加载</button>
  </div>
</template>

<script>
  import {mapState, mapGetters} from 'vuex'
  export default {
    name: 'ShopCart',
    computed: {
      ...mapState({
        cartList: state => state.shopCart.cartList
      }),
      ...mapGetters(['totalPrice'])

    },

    watch: {
      cartList () {
        
      }
    }
  }
</script>

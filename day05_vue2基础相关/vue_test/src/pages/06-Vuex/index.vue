<template>
	<div>
		<h1>Vuex Test</h1>
    <div>
      <router-link to="/vuex/shopcart">ShopCart链接</router-link>  &nbsp;&nbsp;
      <router-link to="/vuex/personal">Personal链接</router-link>
    </div>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>
	export default {
    name: 'vuexTest',

    mounted () {
      this.$store.dispatch('getCartList')
      // 绑定页面卸载前的监听
      window.addEventListener('beforeunload', () => { // 当页面刷新时, 页面卸载前的事件回调
        sessionStorage.setItem('CART_LIST_KEY', 
          JSON.stringify(this.$store.state.shopCart.cartList))
      })
    },

    beforeDestroy () {
      // 解绑监听
      window.removeEventListener('beforeunload')
    }
	}
</script>
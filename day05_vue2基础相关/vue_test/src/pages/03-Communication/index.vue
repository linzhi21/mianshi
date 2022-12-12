<template>
  <div class="com">
    <h2>组件间通信高级(**非常重要, 面试必备**)</h2>
    <router-link to="/communication/props">props</router-link>&nbsp;&nbsp;
    <router-link to="/communication/event">custom event</router-link>&nbsp;&nbsp;
    <router-link to="/communication/bus">event bus</router-link>&nbsp;&nbsp;
    <router-link to="/communication/model">v-model</router-link>&nbsp;&nbsp;
    <router-link to="/communication/sync">.sync</router-link>&nbsp;&nbsp;
    <router-link to="/communication/attrs-listeners">$attrs & $listeners</router-link>&nbsp;&nbsp;
    <router-link to="/communication/ref-children-parent">$ref & $children & $parent</router-link>&nbsp;&nbsp;
    <router-link to="/communication/provide-inject">provide-inject</router-link>&nbsp;&nbsp;
    <router-link to="/communication/vuex">vuex</router-link>&nbsp;&nbsp;
    <router-link to="/communication/slot">slot</router-link>&nbsp;&nbsp;
    <br>
    <br>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Communication'
  }
</script>

<style lang="less" scoped>
  .com {
    margin: 10px;
    a {
      font-size: 16px;
      margin-right: 5px;
      &.router-link-active {
        color: red;
      }
    }
  }
</style>
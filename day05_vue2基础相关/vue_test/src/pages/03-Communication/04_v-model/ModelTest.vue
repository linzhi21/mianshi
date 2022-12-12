<template>
  <div class="box">
    <h1>组件间通信4: v-model</h1>

    <h2>1. 用在原生标签上</h2>
    <!-- 原生上的本质: 动态value与原生input监听 -->
    <input type="text" v-model="msg1">
    <span>{{msg1}}</span>
    <br>
    <input type="text" :value="msg2" @input="msg2=$event.target.value">
    <span>{{msg2}}</span>

    <h2>2. 用在组件标签上</h2>
    <!-- 组件标签上的本质: 动态value与自定义input监听 -->
    <h2>需求: 自定义带左侧标题的输入框</h2>
    <custom-input :title="'用户名'" v-model="msg3"></custom-input>
    <span>{{msg3}}</span>

    <CustomInput :title="'用户名22'" :value="msg4" @input="msg4 = $event"/>
    <span>{{msg4}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data () {
      return {
        msg1: 'abc',
        msg2: 'cba',
        msg3: 'aaa',
        msg4: 'bbb',
      }
    },
    components: {
      CustomInput
    }
  }
</script>

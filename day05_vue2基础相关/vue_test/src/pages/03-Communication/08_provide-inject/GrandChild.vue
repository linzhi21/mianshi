<template>
  <div class="box">
    <h4>孙组件标题</h4>
    <p>content11: {{content11}}</p>
    <p>content22: {{content22}}</p>
    <br>
    <button @click="updateContent1('~~~')">更新祖组件的数据</button>
  </div>
</template>

<script>
export default {
  name: 'GrandChild',
  inject: ['content11', 'content22', 'updateContent1'], // 注册的数据会自动成功组件对象的数据
}
</script>


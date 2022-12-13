<template>
  <ul class="list-group">
    <li class="list-group-item">msgId:{{$route.params.msgId}}</li>
    <li class="list-group-item">msgId:{{msgId}}</li>
    <li class="list-group-item">msgContent:{{$route.query.msgContent}}</li>
    <li class="list-group-item">msgContent:{{msgContent}}</li>
  </ul>
</template>
<script>
export default {
  name: 'MessageDetail',
  props:['msgId','username','msgContent'],
  beforeMount(){
    this.msgId = this.$route.params.msgId
  },  
  data() {
    return {
      msgId:''
    };
  },
}
</script>

<style scoped>
</style>

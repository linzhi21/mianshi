<template>
  <div class="container">
    <Header></Header>
    <Main></Main>
  </div>
</template>
<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
export default {
  name: 'App',
  components:{
    Header,
    Main
  },  
  data() {
    return {

    };
  },
}
</script>

<style scoped>
</style>

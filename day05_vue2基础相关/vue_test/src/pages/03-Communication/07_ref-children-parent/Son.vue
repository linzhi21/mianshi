<template>
  <div class="box">
    <h3>儿子小明: 有存款: {{money}}</h3>
    <button @click="giveMoney(50)">给BABA钱: 50</button>
  </div>
</template>

<script>
import {SDMixin} from './mixins'
export default {
  name: 'Son',

  mixins: [SDMixin],
  
  data () {
    return {
      money: 30000
    }
  },
}
</script>

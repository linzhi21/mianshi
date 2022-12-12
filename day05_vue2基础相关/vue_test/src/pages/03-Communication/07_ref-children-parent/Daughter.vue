<template>
  <div class="box">
    <h3>女儿小红: 有存款: {{money}}</h3>
    <button @click="giveMoney(100)">给BABA钱: 100</button>
  </div>
</template>

<script>
import {SDMixin} from './mixins'
export default {
  name: 'Daughter',
  mixins: [SDMixin],
  data () {
    return {
      money: 20000
    }
  },
}
</script>

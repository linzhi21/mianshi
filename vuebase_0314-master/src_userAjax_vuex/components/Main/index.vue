<template>
  <h2 v-if="isFirst">欢迎光临</h2>
  <h2 v-else-if="isLoading">正在加载中......</h2>
  <h2 v-else-if="errMsg">{{ errMsg }}</h2>
  <div class="row" v-else>
    <div class="card" v-for="(user, index) in userList" :key="user.id">
      <a :href="user.url">
        <img :src="user.headerImg" style='width: 100px' />
      </a>
      <p class="card-text">{{ user.username }}</p>
    </div>
  </div>
</template>
<script>

import { mapState } from 'vuex';
export default {
  name: 'Main',
  computed:{
    ...mapState(['isFirst','isLoading','errMsg','userList'])
  },

}
  

</script>

<style scoped>
.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card>img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>

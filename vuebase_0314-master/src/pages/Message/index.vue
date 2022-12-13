<template>
  <div role="tabpanel" class="tab-pane active" id="Message">
    <input type="text">
    <ul class="list-group">
      <li class="list-group-item" v-for="(m, index) in messages" :key="m.id">
        <!-- 路由传参的两种参数：params参数  query参数 
        我要传递id使用params参数    params参数是属于路径的一部分，配置路由的时候就要占位
        我要传递content使用query参数   query参数是？分割后面的key=value&key=value，但是不属于路径的一分部-->
        <!-- 第一种写法：字符串拼接 -->
        <!-- <router-link :to="'/home/message/msgdetail/' + m.id + '?msgContent=' + m.content">{{m.content}}</router-link> -->
        <!-- 第二种写法：模板字符串 -->
        <!-- <router-link :to="`/home/message/msgdetail/${m.id}?msgContent=${m.content}`">{{m.content}}</router-link> -->

        <!-- 第三种写法：对象 -->
        <router-link :to="{
          name:'msgdetail',
          params:{msgId:m.id},
          query:{msgContent:m.content}
        }">{{m.content}}</router-link>

        <!-- <a href="##">{{m.content}}</a> -->
      </li>
    </ul>
    <div class="alert alert-success" role="alert">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  data() {
    return {
      messages:[
        {id:1,content:'msg01'},
        {id:2,content:'msg02'},
        {id:3,content:'msg03'}
      ]
    };
  },
  mounted(){
    console.log('Message创建挂载完成');
  }
}
</script>

<style scoped>
</style>

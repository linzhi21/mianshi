<template>
  <div class="box">
    <ul>
      <li v-for="(item, index) in data" :key="item.id">
        <!-- slot标签的所有属性都会自动传递给父组件 -->
       <slot :row="item" :$index="index"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    data: Array
  }
}
</script>
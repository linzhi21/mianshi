
export const SDMixin = { // 只是组件的一些配置
  methods: {
    borrowMoney (num) {
      this.money -= num
    },

    giveMoney (num) {
      this.money -= num
      // 更新父组件的数据
      this.$parent.money += num
    }
  }
}
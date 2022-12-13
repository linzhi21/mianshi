(function (w) {
  // 一个插件可以是一个对象，也可以是一个函数
  // 如果写的插件是对象式插件，这个对象必须有一个方法叫install，名字不能随意更改

  // 对象式插件  插件是一个对象
  // let MyPlugin = {}
  // MyPlugin.install = function (Vue, options) {
  //   // 1. 添加全局方法或 property
  //   Vue.myGlobalMethod = function () {
  //     console.log('全局方法被调用myGlobalMethod');
  //   }

  //   // 2. 添加全局资源
  //   Vue.directive('upper', (node, bindings) => {
  //     // console.log(node,bindings);
  //     // 获取到元素和元素所绑定的数据
  //     // 手动给元素的内容改成大写
  //     node.textContent = bindings.value.toUpperCase()
  //   })

  //   // 4. 添加实例方法
  //   Vue.prototype.$myMethod = function (methodOptions) {
  //     console.log('实例方法被调用$myMethod');
  //   }
  // }


  // 函数式插件  插件也可以是一个函数
  function MyPlugin(Vue, options) {
    // 1. 添加全局方法或 property
    Vue.myGlobalMethod = function () {
      console.log('全局方法被调用myGlobalMethod');
    }

    // 2. 添加全局资源
    Vue.directive('upper', (node, bindings) => {
      // console.log(node,bindings);
      // 获取到元素和元素所绑定的数据
      // 手动给元素的内容改成大写
      node.textContent = bindings.value.toUpperCase()
    })

    // 4. 添加实例方法
    Vue.prototype.$myMethod = function (methodOptions) {
      console.log('实例方法被调用$myMethod');
    }
  }

  w.MyPlugin = MyPlugin
})(window);
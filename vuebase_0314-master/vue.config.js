const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,  //关闭eslint检查总开关
  devServer:{


    proxy: {
      "/api": {
        // /api代表转发标识，本质是路径的开头
        // 这个标识有可能本身路径里就存在，也有可能是自己加的
        // 只要往本地发的请求，都要去检查路径是不是以转发标识开头，如果是就转发


        target: "http://localhost:8888",
        // 目标，代表要转发的目标服务器地址，没有路径，只有协议 IP 端口
        // 路径发往本地的请求当中已经有了

        pathRewrite: {"^/api" : ""}
        // 路径重写，要看最终目标服务器的路径当中有没有标识，如果本来就有这个标识
        // 那么就不需要重写，如果本身，没有是自己加的，那么要重写掉这个标识
      }
    }
  }
})

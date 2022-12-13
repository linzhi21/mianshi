const express = require('express')
const app = express()

app.get('/user/userinfo', function (req, res) {
  let response = {
    data:{
      username:'zhaoliying',
      age:35
    },
    status:200,
    message:'ok'
  }
  res.send(response)
})

app.listen(8888,() => {
  console.log('服务成功启动在8888端口');
})
import Home from '@/pages/Home'
import About from '@/pages/About'
import Message from '@/pages/Message'
import News from '@/pages/News'
import MessageDetail from '@/pages/MessageDetail'
import NewsDetail from '@/pages/NewsDetail'

export default [
  {
    path:'/home',
    component:Home,  //注册路由组件
    children:[
      {
        // path:'/home/message', 麻烦写法
        path:'message', //这里是简写，
        //系统会把一级路由path和二级路由path进行拼接，并且拼接的时候会给子路由path自带/
        component:Message,
        children:[
          {
            name:'msgdetail',
            path:'msgdetail/:msgId',  //:msgId是给传递的params参数占位，
            component:MessageDetail,
            // 通过props配置简化路由传递参数的操作
            // 1、props:布尔值，只能映射params参数，不用
            // props:true  //它是把params参数映射为组件内的属性
            // 2、props:对象，专门用来映射一些额外的数据，也很少用
            // props:{username:'赵丽颖'}
            // 3、props:函数
            props(route){
              return {msgId:route.params.msgId,msgContent:route.query.msgContent}
            }
            // params:{
            //   msgId:1
            // },
            // query:{
            //   msgContent:'msg01'
            // }
          }
        ]
      },
      {
        path:'news',
        component:News,
        children:[
          {
            name:'newsdetail',
            path:'newsdetail/:newsId',
            component:NewsDetail
          }
        ]
      },
      {
        path:'',
        redirect:'message'
      }
    ]
  },
  {
    path:'/about',
    component:About  //注册路由组件
  },
  // 重定向路由
  {
    path:'/',
    redirect:'/home'
  }
]
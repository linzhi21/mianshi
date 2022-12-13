# 六-3. 前台管理项目总结

## 1. 功能模块

    首页
    商品搜索列表
    商品详情
    购物车
    登陆与注册
    订单交易/结算
    支付
    个人中心/订单列表

## 2. 使用的库

    vue
    vue-router
    vuex


​    vee-validate   表单验证插件(插件  不常用)
​    vue-lazyload  图片懒加载
​    element-ui  (可以不用)
​    

    axios  query参数  params参数  请求体参数
    mockjs
    nprogress
    uuidjs  创建唯一标识
    
    swiper
    qrcode 二维码
    lodash 函数工具库

## 3. Vue配置

    name
    	工具查询 vue-devtools
    	全局注册 vue.commponent
    	keepAlive 
    	递归组件 必须写name 自己用自己
    	动态组件 配合is 使用
    data
    	对象 (报警告,复用几次,有几个实例化,指向同一个地址,共用一个,就乱了)
    	data 写成对象,代表组件复用的时候,多个组件对象,共用的是一个数据对象,就是data对象,有一个去改变data的数据,其余的也发生改变
    	函数 组件只能写函数  每个组件实例化的时候,都会调用这个函数,每次都会返回一个新的对象
    		
    props
    	三种写法
    	1.[]  啥都限定不了
    	2.对象简单写法(只能限定类型)  
    	3. 对象复杂写法(啥都可以限定)
    	
    computed
    一般什么时候用（数据不存在要用,这个数据和已有数据有关系）
    主要是看要计算的数据 可读还是可写
    	get
    	set
    	能用computed 一定可以用watch  能用watch的 不一定都能用computed
    	watch 是异步
    	
    watch*********
    	一般什么时候用（数据已经存在，变化引起其它操作）
    	和computed的区别  computed同步 watch异步
    methods
    	方法  this指向  组件实例
    mounted/created
    beforeDestroy  清除定时器
    beforeCreate  安装 全局事件总线
    components	  局部定义并且注册组件
    .vue文件 本质上是一个配置对象  用来生成组件  定义并且注册后 才是一个组件
    



## 组建通信

> 1.props

> 2.自定义事件

> 3.全局事件总线
>
> * 可以调用 $on $emit

> 4.pubsub  第三方包  一般不用

> 5.插槽 

> 6.Vuex

## 4. 2个重要方法:

    vm.$nextTick()与Vue.nextTick()
    vm.$set()与Vue.set()
    
    $set(): 给响应式对象添加一个响应属性, 直接通过.xxx的方式添加, 这个属性不是响应式的, 界面不会自动更新
    	参数 : 给谁添  添什么属性 添什么值
    
    $nextTick(callback): 一般是在数据更新之后, 界面更新前调用$nextTick(callback), 回调函数延迟到界面更新后执行 
    	数据改变 页面改变 dom更新 异步的
        



## 5. 与后台交互

    axios二次封装
        1). 配置通用的基础路径和超时
        2). 显示请求进度条
        3). 成功返回的数据不再是response, 而直接是响应体数据response.data
        4). 统一处理请求错误, 具体请求也可以选择处理或不处理
        5). 每次请求都携带一个userTempId请求头, 数据值在state中
        6). 每次请求(已登陆)都携带一个token请求头, 数据值在state中
    postman与测试接口
    定义接口请求函数模块
    在vuex的异步action中调用接口请求函数
    将API挂载到Vue的原型对象上, 在组件中调用接口请求函数与后台交互: Vue.prototype.$API = API
    当后台接口还未完成时, 先mock数据, 可以使用mockjs, 当然有的公司可能有自己的一套

## 6. vuex

    基本组成: store / state / mutations / actions / getters / modules(namespaced) /plugins
    vuex多模块编程: 当要管理的数据过多时, 将每个模块的数据单独管理, 更方便, 更有扩展性
    
    new Vuex.Store({
    	state, 
    	mutations,
    	actions,
    	getters,
    	modules,
    	plugins
    })
    
    带vuex的整体编码组成:
        component:
            触发action调用请求获取数据: dispatch()
            读取vuex中的数据: mapState() / mapGetters()
            模板动态显示数据: 插值与指令
        vuex:
        	state: 定义初始化数据
        	mutation: 更新state数据
            action: 调用API函数请求获取数据, 提交给mutation
           
        api:
            axios二次封装
            定义针对不同接口的请求函数

## 7. 路由相关

    跳转路由的2种基本方式: 声明式路由(route-link)与编程式路由(push,replace)
    	编程式导航 可以写一些逻辑
    跳转路由携带参数的类型: params与query参数
    
    	params参数 写在路径当中
    	query  ? 没有配置项
    	路由传参 传给路由  /:id?  params接收   query参数不用接收,会自动解析
    	axios的 params query参数  传给后端
    携带参数的2种方式: 字符串与对象形式
    参数相关问题:
        params与path配置能不能同时使用  不能 只能和name
        如何配置params参数可传可不传?
        路由组件能不能传递props参数     可以  布尔值  对象  函数
        编程式路由跳转到当前路由, 参数不变会报出错误 
        	promise 内部抛出错误
        	参数不变  连续点击
        
    如何让路由跳转后, 滚动条自动停留到起始位置
        scrollBehavior配置
    路由导航守卫的理解和使用
        全局前置守卫
        路由/组件前置守卫

## 8. 自定义通用型/复用型组件的基本步骤

    分页组件
    
    实现静态组件: 模板/样式写好
    设计从外部接收的数据: props
    设计内部的数据: data
    
    设计基于props和data的计算属性数据: computed
    根据props和data数据和computed进行动态显示


​    
​    更新数据, 更新界面, 通知父组件

## 9. 相关问题(具体内容看笔记，编写简历项目时可使用)

    编程式路由跳转到当前路由, 参数不变会报出错误
        vue-router版本(3.1.0)变化: 上一个项目没问题, 新的项目有问题
        重写VueRouter原型上的push/replace方法
    优化减小打包文件: 
        对UI组件库实现按需打包
        对lodash库实现按需引入
    什么时候需要使用编程式导航代替声明式导航
        有一定条件限定
        	个数太多  ==> 如果使用<router-link>, 产生过多的组件对象 ==> 占用内存过大
        	跳转之前需要添加自己的逻辑
        
    优化事件处理效率: 
    	<route-link> 是路由的内置组件 路由是个插件
        编程式导航 + 利用事件委托 ==> 减少点击监听数量
        


​        
​        
​    如何携带点击的分类的数据?
​    	利用自定义的data标签属性来保存分类信息  data-Xxx = "value"
​    	event.target.dataset得到a标签上的data自定义属性数据
​    	
    对mouseEnter高频事件进行节流处理
    	使用lodash的throttle进行节流处理
    	
    解决swiper动态页面轮播的bug
        watch + $nextTick()  + new SWiper()
    解决Floor组件中轮播有问题的bug
        watch的immediate
    分发异步action后, 如何能知道处理完成了 
    	await this.$store.dispatch('getProduct')
    	// 请求得到product后才执行下面的代码
        回调函数
        dipatch()的返回值是异步action返回的promise


​        
​    区别userTempId与Token
​    	userTempId: 未登陆的标识(uuid产生)    userTempId: cartList
​    	Token: 登陆用户的标识 (后台返回)     token ==> userId: cartList
​    	
​    2种懒加载的优化手段:
​        路由组件懒加载
​        图片懒加载
​        
    <Floor v-for="floor in floors"/>
    <Floor :foor="foor"/>
    foor: {}
    floors: []
    
    floor= {xxxx}
    floors=[{xxxx}, {yyyyy}]




## 10. 面试可说性强的功能

### 1) 三级分类列表

- 使用编程式导航代替声明式导航
  - router-link太多 ==> 创建很多组件对象 ==> 占用内存大, 效率低

- 优化事件处理效率
  - 利用事件委托: event.target
  - 理解事件委托与事件冒泡

- 如何携带点击的分类的数据?
  - event.target得到a标签
  - 利用自定义的data标签属性来保存分类信息

- 对mouseEnter高频事件进行节流处理
  - 使用lodash的throttle进行节流处理
  - 对lodash库实现按需引入

### 2) 商品搜索列表
- 跳转路由携带条件数据
  - params参数: 搜索关键字
  - query参数: 分类id和名称
  - 实现params参数可传可不传:     /search/:keyword?
- 准备各种搜索条件
  - category1Id: '', // 一级分类ID
  - category2Id: '', // 二级分类ID
  - category3Id: '', // 三级分类ID
  - categoryName: '', // 分类名称
  - keyword: '', // 关键字
  - trademark: '', // 品牌  "ID:品牌名称"
  - props: [], // 商品属性的数组: ["属性ID:属性值:属性名"] 示例: ["2:6.0～6.24英寸:屏幕尺寸"]
  - order: '1:desc', // 排序方式  1: 综合,2: 价格 asc: 升序,desc: 降序  示例: "1:desc"
  - pageNo: 1, // 当前页码
  - pageSize: 10, // 每页数量
- 添加搜索条件
- 删除搜索条件
	- 删除分类或关键字条件后, 地址栏还有条件参数?
	- 删除关键字条件, 输入框中的关键字没有同步删除?
- 排序处理
	- 根据综合/价格/销量/评价排序
	- 升序/降序
	- 搞清条件数据结构
		- orderFlag:orderType
		- orderFlag: 1: 综合,2: 价格, 3: 销量, 4: 评价
		- orderType:  asc: 升序,desc: 降序
- 删除搜索关键字条件, 清除输入框中的关键字   ===> 全局事件总线
- 删除分类条件/关键字条件 ==>  直接发请求
  - 问题: 地址栏上的条件参数没有删除
  - 解决:  重新跳转到search, 不再携带要删除条件参数, search组件监视路由的变化, 发请求获取数据



### 3) 注册流程

- 前台: 输入注册需要的相关信息(用户名/密码/...), 进行前台表单校验, 如果不通过, 提示错误
- 前台: 发送注册的ajax请求(post), 携带注册接口需要的相关数据(用户名/密码/...)

- 后台: 获取到注册请求携带的参数, 去数据库中判断是否已经存在
  - 如果已经存在, 返回提示此用户已存在的提示信息
  - 如果不存在, 保存到数据库, 返回成功的数据
- 前台: 接收到响应
  - 如果是不成功的数据, 提示
  - 如果是成功的数据, 自动跳转到登陆页面

### 4) 登陆流程

- 前台: 输入登陆需要的相关信息(用户名/密码),  进行前台表单校验, 如果不通过, 提示错误
- 前台: 发送登陆的ajax请求(post), 携带登陆接口需要的相关数据(用户名/密码)
- 后台: 获取到登陆请求携带的参数, 去数据库中查询看是否存在
  - 如果不存在, 返回登陆失败的信息
  - 如果存在, 生成一个新的token字符串, 将token返回或者与用户信息一起返回
- 前台: 接收到响应
  - 如果是不成功的数据, 提示
  - 如果是成功的数据, 
    - 将用户信息和token都保存到vuex中
    - 跳转到首页或redirect页面

### 5) 自动登陆流程

​	讲token保存在localStorage当中，每次刷新，都会从localStorage当中获取token，获取到token就代表成功

token没有获取到，代表没有登录过



根据token获取用户信息和token校验

- 简单说: 
  - 前台: 页面一加载时, 发送请求根据token获取用户信息
  - 后台: 得到请求头中的token值, 解析出里面包含的userId和失效时间,
    - 已经失效了: 返回代表token失效的401的错误响应
    - 还在有效期内: 根据userId查询数据库, 得到用户信息返回
- 利用全局前置守卫:
  -  一旦发现当前没有登陆, 但前面登陆过(有token, 没有用户信息)
  - 发送请求根据token获取用户信息
    - 成功了, 保存用户信
    - 失败了(说明token过期了): 清除token, 强制跳转到登陆页面

### 6) 购物车模块
- 购物车数据是保存在后台的, 标识是什么?
  - 未登陆: 标识为用户临时ID(userTempId)
    - 第一次访问时前台利用uuid库生成的唯一字符串, 保存保存在local中
    - 每次请求时通过请求头自动携带它(利用请求拦截器)
  - 登陆: 登陆用户的token对应的userId
    - 用户请求登陆时, 服务器端生成并返回给浏览器, 浏览器收到后自动保存到local中
    - 每次请求时通过请求头自动携带它(利用请求拦截器)
- 进入购物车页面, 显示购物车列表
  - 请求获取时不需要携带额外参数, 会自动携带标识: userTempId / token
  - 一旦用户登陆上, 后台会将关联在usertempId上的购物车数据合并到token对应用户关联的购物车数据
  - 根据临时用户ID或者token请求接口得到购物车列表数据显示
- 添加购物车 / 修改购物项数量
  - 提交请求时, 携带商品的skuid和数量(变化的)
  - 这2个操作是同一个接口, 也就是数量有可能是负数
- 删除购物项(一个/多个)
  - 请求接口, 携带一个skuId或多个skuId的数组
  - 参数: skuId的数组   [2, 3]
- 勾选购物项(一个/多个)
  - 请求接口, 携带一个skuId或多个skuId的数组 和 是否勾选的标识数据(0/1)

### 7) 下单支付流程

- 去结算 ==> 获取订单交易数据
- 提交订单 ==>提交下单请求, 得到订单ID
- 根据订单ID获取支付信息
  - 金额
  - 支付url
- 支付
  - 根支付Url生成支付二维码图片显示, 使用qrcode
  - 扫码支付
  - 轮询请求获取订单状态  websocket
- 分页显示订单列表


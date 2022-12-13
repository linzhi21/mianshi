## 一、采用vite脚手架创建vue3项目并初始化

##### 找到项目管理目录，cmd去到命令行窗口

##### npm init vite@latest

##### 选择vue

##### 选择vue-ts

##### 使用vscode打开项目，并npm i  

##### npm run dev 启动项目

##### 删除原来的组件换成自己的



## 二、配置@别名

#### 在tsconfig.json当中需要添加两个配置项

````js
"baseUrl": "./",
"paths": {
	"@/*":["src/*"]
}
````

#### 在vite.config.ts当中添加配置

````js
resolve:{
    alias:{
        "@":path.resolve(__dirname,'src')
    }
}
````



## 三、和之前一样先静态后动态

#### 1、静态的拆 组  渲和之前完全一致

#### 2、动态数据初始化展示需要定义数据类型

#### 3、定义ts类型

##### 使用接口限定todo对象的类型

````js
export interface TodoData {
    id:number,
    content:string,
    isOver:boolean
}
export type TodoListData = TodoData[]

````

##### 使用接口限定传递的prop类型	

```js
使用接口限定的对象如果有方法
import type {TodoListData} from './App.vue'
interface PropsData {
    todoList:TodoListData,
	addTodo():void,
	updateTodo: () => void
}
//const props = defineProps(['todoList']) //这样接收的属性数据没有类型
//这样写才是ts的规范，并且限定传递的属性数据类型
const props = defineProps<PropsData>()
```

##### 所有的函数形参都要有类型

````js
import type {TodoData} from './App.vue'
const addTodo = (todo:TodoData) => {
    todoList.value.unshift(todo)
}
````


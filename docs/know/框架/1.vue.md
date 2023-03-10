# 1.vue | 主流方案对比

[[toc]]



## 1.0 经典八股

### 1.0.1 nexttick原理

```
【1】nextTick 中其实就是封装了异步代码。（promise.then.resolve）
【2】Vue 中数据变化到 DOM 更新的过程是异步的，这个异步更新策略内部其实也是用到了 nextTick。
【3】本质是事件循环
```



### 1.0.2 虚拟dom+diff

用js对象描述dom树结构，然后用它构建真正的dom树插入文档。状态发生变化后，重新构造js的dom结构，新的和旧的对比，得出差异。针对差异进行视图更新

```
1.patch  2.patchvnode 3. updateChildren
```



### 1.0.3 scope原理

原理是属性选择器。给这个组件添加上dataset-xx就可以了。

### 1.0.4 data，prop，method的优先级

优先级prop>method>data>compute>watch



### 1.0.5 diff | 深度优先，同层比较

```js
首先我们要知道虚拟dom是表示真实dom的js对象。在我们视图发生变化的时候虚拟dom会发生变化。

循环从两边向中间比较

那么我们这个时候要比对的其实就是两个js对象之间的差异。



--1. patch：触发setter和notify方法通过patch比对samevnode。通知watcher。不是同标签直接替换。
--2. patchvnode比对新老节点，相同直接return，不同分四种情况。其他三种比较简单不说，说一下第四种情况 
--3. updatechildren比对都有子节点的情况，用的是首尾指针。旧（头）新（头），旧（头）新（尾），旧（尾）新（头），旧（尾）新（尾），循环比对成功的会向中间移动。start跑到end右侧的时候，终止比较。（注意一下，这里是oldvnode和newvnode作比较，生成真实dom-这玩意依靠newvnode生成）
--4.vue3是增加了静态标记。和一个静态子递归
```





### 1.0.6 受控组件和不受控组件

```
受控组件 ：  **他的值是否只能由用户设置**。类似于双向绑定。边输入便监听用户数据

不受控组件：例如提交时才输出数据
```



### 1.0.8  vue监听范围

```js
proxy为什么能够监听数组:proxy第一个参数如果是object的时候，函数会把这个转化成类数组对象，添加length属性

vue监听对象(new的时候能够被监听_第一次被调用。xx.属性=xx的时候不会更新，增删改不会更新)。数组监听(push，pop这些方法都可以监听得到)。

总结一下，array的push，slice都可以被检测到。{data:[{},{}]}这种形式的也能够被监测得到。但是如果是{name:"xx"},我们想改变name的值得时候不会变。我们想要在name的同级添加一个key也不会监听到

```

### 1.0.9  vue23自定义指令的区别

```

```



### 1.0.10 pinia持久化



### 1.0.11 vuex的使用

定义actions，state，mutation。导出后

```
const store = new Vuex.Store({
  modules,
})
```



```
actions是异步操作

mutation是同步操作
```







### 1.0.11 compute和watch的异同

```js
同：
--1.都是基于reative effect
```







### 1.0.12  在 Vue 中为什么不推荐用 index 做 key

```
key就是唯一标记，用于判断是否有更新dom的依据，但是用index，只要发生增加和删除，必然导致大量index值改变，也就失去了意义了，就和增删数组的时候，直接使用index遍历很容易出错一个道理
```



### 1.0.13  vnode是啥，怎么渲染的

```js
vnode:本质上来说就是一个普通的JavaScript对象.

不同类型的vnode实例各自表示不同类型的DOM元素(元素节点和文本节点和注释节点)

低代码平台其实就相当于你要实现一个虚拟dom，也就是vnode
```



### 1.0.14 keep alive怎么实现

缓存虚拟dom,结合router进行排除

```
原理：它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode。component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。
```



### 1.0.15 父子组件·渲染顺序

```js
先是父create 然后 子 mount 然后 子xxx   最后父销毁
```



### 1.0.16 生命周期 | created | mount 哪里发数据

```
如果放在 mount 中 ，那么可能会有闪烁的情况出现
如果放在 create 中，注意不要操作dom，因为这个时候也拿不到
react中就很烦，useEffect 是 mount 。create 没有值



```





### 1.0.17 v-model | 双向绑定 原理

1.语法糖 vue2 是input+value。vue3是update：modelvalue   modelvalue 2.vue3移除sync用 vmodel代替 3.多个vmodel

vue2

```html
父组件中 <inputComponent v-model="Vmodel"></inputComponent>
子组件中 
model: {
    //代表 v-model 绑定的prop名
    prop: 'vModel', // 对应 props
    //代表 v-model 通知父组件更新属性的事件名,
    //通过this.$emit('change', event.target.value)    来反复触碰 
    event: 'change'
},

model
```

vue3

```js
父： <Child v-model="message"/> 
子

const props = defineProps([
  "modelValue", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
]);

const emit = defineEmits(['update:modelValue'])
emit('update:modelValue', event.target.value)
```



```
上面的只是简单说了一下，更加深层次的是
0.vue2 和 vue3 分别通过 proxy和 defineproperty
1.new Vue 在 Observe(监听器) 对 data 进行响应化处理
2.在compile(编译器) 中 对 temple 编译。获取第一步的data并初始化
3.定义一个watcher和updated。这个watch用dep来进行管理
4.将来data数据变化，会找到dep，通知所有的watch
Observe(监听器) - data
compile(编译器) - temple
dep-watch-updated


```





### 1.0.18 组件 | 插件

```ts
组件很简单就是 vue.component("",<temple></temple>)
插件就是
plugin.install = function (vue,option){
    // 可以添加全局变量
    vue.test = xxxxx
    // 可以添加全局指令
    vue.directive('xxx',{
        bind(){
            
        }
    })
    //可以注入组件
    vue.mixin({
        create:function(){
            
        }
    })
}
```



### 1.0.19 h函数 

```ts
  return h(
      'div',
      {
        style: 'color:red;',
        onClick: ($event: Event) => console.log('clicked', $event.target)
      },
      'hello world ~'
    );
```





### 1.0.30 v-if | v-for

`v-for`优先级比`v-if`高

### 1.0.31 data为什么是函数

```
对象就会重复，因为用了用一个内存地址。funciton不会重复，因为函数的内存地址并不相同
```





## 1.3 vue3相关



### 1.3.1 vue3 | vue2 区别

```js
1.vue3是Composition API。vue2使用的是options API
组合api中有响应式函数：reactive，ref  API
有生命周期钩子：onMounted
有依赖注入inject/project

2.可以treeshake 的 证据是
import { nextTick, observable } from 'vue'
3.
```



## 1.4 基本知识



### 1.4.1 Composition API,options API区别

```js
1.vue2中使用的是options API 来定义一个组件内部的一些属性，如methods、data等等;写一个功能可以东西到处飞
2.vue3 composition API主要就是为了解决API太过于分散的问题。将同一个功能下的api统一放到一个地方
```





### 1.4.2 Suspense

```vue
1.实现异步效果
<!-- Promise 未执行完成时，就会显示 Loding... 执行完毕后，就会显示数值 -->
	<Suspense>
      <template #default>
		<!-- 执行完成的时候 -->
        <AsyncShow />
      </template>
      <template #fallback>
        <h2>
          Loading...
        </h2>
      </template>
    </Suspense>
```





## 1.5 进阶

### 1.5.1  少见的vue钩子

```js
1.option中
--1.1 errorCaptured:在捕获了后代组件传递的错误时调用()
仅dev环境
--1.2 serverPrefetch：服务器上被渲染之前要完成的异步函数。（ssr可用）
```



### 1.5.2 vue3 nextTick源码（3.2.45）



nextTick优先是微任务

```
v2.0.0 - v2.4.4 微任务 导致vue的渲染处理可能夹在事件冒泡或者多个连续事件之间进行
v2.5.0 - v2.5.1 宏任务  导致动画以及页面状态切换的渲染上太慢了。
v2.5.2 - v2.5.20 微宏并行
v2.6.0 - v2.6.12 微任务
```



感觉比之前的简化了版本。把任务全部扔进任务队列中，也算是优化的一种方式

```ts
export function nextTick<T = void>(
  this: T,
  fn?: (this: T) => void
): Promise<void> {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}


nexttick的边界处理中主要是设置了一个mutationObserver和,如果不知道类型或者不支持类型会执行宏任务setImmediate和settimeout。这两个的区别主要是观察者不同


this.$nextTick(()=>{
    this.offsetTop ="dsad"
})
里面传入callback
```



### 1.5.3 $forceUpdate原理

```js
第一步：$forceUpdate: i => i.f || (i.f = () => queueJob(i.update)) -》关键在scheduler.ts这个文件里面
第二步：搜索索引包含当前正在运行的作业。queue.includes
第三步：调用queue厘米按的job queueFlush（当然里面最主要解决的是递归的嵌套-就是我们说的组件的job和watch）

里面不用写任何东西，调用起来我们就简单的

this.$forceUpdate();
```



## 1.6 项目进阶



### 1.6.1 动态侧边栏

原理是通过侧边栏的name来进行vue文件的引用

```js

const routeOptions = [
  {
    path:'/login',
    name:'login',
  }
]
const routes = routeOptions.map(route => {
  if (!route.component) {
    route = {
      ...route,
      component: () => import(`@/views/${route.name}.vue`)
    }
  }
  return route
})

```







## 1.8 vuex | pinia | redux



### 1.1.1  上手安装

```js
--1.上手安装
--1.1 vuex
import {useStore} from './store'
app.use(store)

--1.2 pinia（id，state，getters，action）
--1.2.1 shell安装
npm install pinia -S
--1.2.2  创建pinia实例
import { createPinia } from "pinia";
const pinia = createPinia()
app.use(pinia)


--1.2.4使用
useUserStore().nickname


--1.3 redux




```



### 1.1.2 使用

```js
//--------------------------------------

--2.使用
--2.1 pinia
// stores/todo.js
--2.1.1 
import { defineStore } from 'pinia';
const useUserStore = defineStore({
    persist: true
  // 1.命名空间
  id: 'user', 
  //2.必须是箭头函数然后返回一个对象
  state: (): any => ({
    nickname: 'user1111',
  }),
  // 3.计算属性,这里感觉更适合做获取器
  getters:{
    nicknameGetter():any {
      return '前缀---'+this.nickname
    }
  },
  // 4.同步异步操作都可以
  actions:{
    actionPinia () {
      console.log("这是action里面的操作")
    }
  }
});

//模块化可以这样
/*
import useCounterStore from './counter.js'
import useUserStore from './user.js'

export default function useStore(){
    return {
        user:useUserStore(),
        counter:useCounterStore()
    }
}

使用起来 const { counter } = useStore()
{{ counter.double }}
*/


--2.2 vuex 
import {createStore} from 'vuex'
const useStore = createStore({
  state: {
    todos: [
      { id: 1, title: '...', done: true }
    ]
  },
  getters: {
    doneTodos (state) {
      return state.todos.filter(todo => todo.done)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules:{user:{name || state  || getter || action || mutation || mudules}},
  gettter:getter//const getters = {sidebar: state => state.app.sidebar}
})

//模块化可以这样
 /*
    modules: {
    app,
    settings,
    user,
    menu
  }    
    */
```



### 1.1.3 pinia的 action

```js
Pinia.$onAction(({
  name, // action 名称
  store,
  args, // action 参数
  after,
  onError
}) => {
  // action 调用前钩子

  after((result) => {
    // action 调用后钩子
  })
  onError((error) => {
    // 出错时钩子，捕获到 action 内部抛出的 error
  })
})


```



### 1.1.4 mapState

```js
一个组件要获取多个 state 的时候，声明计算属性就会变得重复和冗余
const store = useStore()

computed: mapState([
   
    /*
    mapState({
       sCounter: state => state.name,
       ......
     })
    */
     // 映射 this.count 为 store.state.count
    'count'
  ])
```



### 1.1.5 pinia为什么比vuex好

```js
--1.ts的支持
--2.Pinia只有store的概念。官方的模块化概念去除，使用可以通过对象俩进行实现、
3.actions支持同步和异步
4.更加简单例如： dispatch的作用,专门用来触发action
5.持久化 npm i pinia-plugin-persist --save

import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)
之后再defineStore中
persist: {
        enabled: true
    }
```







## 1.9 css in js方案









## 1.10 vue脚手架







## 1.11  react脚手架







## 1.12表单方案



## 1.13 解决vue 的 seo + 首屏

```
这里我们使用了prerender-spa-plugin这个webpack插件，他的作用就是将我们指定的路由进行预渲染到html，进而解决首次加载白屏时间长问题，以及一定程度上解决seo问题。在vue-cli3.0中，我们的相关配置是被隐藏起来的，我们可以通过vue.config.js来将我们的配置合并到默认配置中。

预渲染也有它的缺点：那就是预渲染的页面内容可能与真实内容由一定出入(data中先直接写入数据先可以优化seo) 可以考虑采用骨架屏的方式来进行首屏加载的白屏过渡，但是这样就无法优化seo了
```


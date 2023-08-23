# 5.vue3

[[toc]]



## 5.？奇奇怪怪的报错

```js
--1.Type number trivially inferred from a number literal, remove type annotation  @typescript-eslint/no-inferrable-types?   
s:原因是：typescript 对代码做了类型推断 不用再进行指明number类型
s：解决方法是：@typescript-eslint/no-inferrable-types："off"

--2.元素隐式具有 “any“ 类型，因为类型为 “string“ 的表达式不能用于索引类型 “Object“。 在类型 “Object“ 上找不到具有类型为 “string“ 的参数的索引签名
s:tsconfig.json中compilerOptions里面新增忽略的代码，如下所示，添加后则不会报错："suppressImplicitAnyIndexErrors": true

注意 这玩意和strict：true冲突

--3.Cannot access ambient const enums when the '--isolatedModules' flag is provided.此配置开启后不允许采用常量枚举值作为属性key，同时要求类型导入导出必须明确
例如：export { TriggerOpTypes } 会报错
s："isolatedModules": true, 设置成false就可以了



4. 'name' is never reassigned. Use 'const' instead prefer-const 
eslinttrc.js中添加
rules: { 
    "prefer-const": "off"
  },
```







## 5.0 基础

### 5.0.1 axios封装

#### --1.src 下面新建文件夹 http。下面新建index.ts

```js
import axios from 'axios';
import { ElMessage } from 'element-plus'
// 创建HTTP实例
const $http = axios.create({
    baseURL:"https://c0738068-9ea6-4a45-9216-f2d95ca33bdb.bspapp.com",
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})
// 请求拦截
$http.interceptors.request.use(config=>{
    config.headers =  config.headers || {}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token') || ''
    }
    // console.log(config)
    return config
})
// 响应拦截
$http.interceptors.response.use(res=>{

    // const code:number = res.data.code
    // if(code!==200){
    //     ElMessage.error("数据的获取有错误")
    //     return Promise.reject(res.data)
    // }
    return res
},err=>{
    console.log(err);
})

export default $http

```

#### --2.src http同级新建api.ts

```ts
import $http from './index';

type loginData ={
    id:string
   
}

export const login = (id:loginData)=>{
    console.log(id)
    return $http({url:"/queryOrder?id="+id.id,method:"get",data:id})
}

```







### 5.0.2 生命周期

```js
// 知识点2：生命周期
// console.log("相当于create");

// onMounted(() => {
//   console.log("相当于mount，dom没挂");
// });
// onUpdated(() => {
//   console.log("相当于update，dom已经挂");
// });
// onUnmounted(() => {
//   console.log("相当于destory，用v-if可以触发");
// });
```





### 5.0.3 组件传参









### 5.0.4 路由封装

#### --1. router 下面新建 xx.ts文件

```ts
import { RouteRecordRaw } from 'vue-router'
//无论谁都可以访问的路由
const RoutesAll: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Route1',
    component: () => import("@/views/helloworld.vue")
  },
]
//指定人可以访问的路由
const RoutesToken: any = [
  {
    path: '/AxiosTest',
    name: 'AxiosTest',
    component: () => import("@/components/AxiosTest.vue"),
    meta: { role: 'admin' }
  }
]
export { RoutesToken, RoutesAll }
```



#### --2.index.ts

```ts
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { RoutesToken, RoutesAll} from './study'

// 过滤路由
let commonUser = 'admin'
let commonUserRoute: Array<RouteRecordRaw> = RoutesToken.filter(function (page:any) {
  // console.log(page)
  return commonUser.includes(page.meta.role)
})

//挂载上去
const router = createRouter({
  history: createWebHashHistory(),
  routes:RoutesAll,
  
})

//跟vue2不一样，vue2可以直接addroutes直接挂载所有路由
// vue3只有这样子慢慢 添加
RoutesToken.forEach((e:any)=>{
  router.addRoute(e)
})

// 路由守护
router.beforeEach((to,from,next)=>{
    
    // console.log("to")
    // console.log(to)
    //这里权限的逻辑就是不等于token 并且 值为login
    // if( to.path!=='/login'){
    //   next({path: '/login'})
    // }else{
    //   next()
    // }
    next()
  })
  
export default router

```





### 5.0.5 Element-plus

#### --1.npm install element-plus ，然后新建plugin/element.ts

```ts
import { App } from 'vue'
// 导入我们的element-plus的css文件
import 'element-plus/dist/index.css'
// 把我们需要使用的组件进行导入
import {
  ElButton,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
} from 'element-plus' // 需要的就导入
// 把我们要使用的组件名放入一个数组里面
const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink // 需要的就导入
]

export default function (app: App): void {
  // 循环我们的组件名数组进行全局注册
  for (const component of components) {
    app.component(component.name, component)
  }
}

```

#### --2.plugin/index.ts中

```ts
// 从vue 中导入APP类型
import { App } from 'vue'
// 导入我们们的组件注册声明文件
import registerElement from './element'
// 导出（暴露）我们的主接口方便main接口调用使用
export function globalRegister(app: App): void {
  // 使用use函数安装我们的registerElement
  app.use(registerElement)
}
```

#### --3. main.ts中

```ts
import { globalRegister } from '@/plugin/index'
import { createApp } from 'vue'
const app = createApp(App);
app.component('HelloWorld1',HelloWorld).use(router).use(globalRegister).mount('#app')
```









### 5.0.6  pinia的使用

#### --1. 安装

```shell
npm install pinia -S
```



#### --2. main.ts中

```ts
import {createPinia} from 'pinia'
const store=createPinia()

// 使用vuex
// import vuex from './store'
app.use(store)
```



#### --3. src/store下面新建modules文件夹和index.ts文件

store/index.ts

```ts
import useUserStore from './modules/user';
const useStore = () => ({
  user: useUserStore(),
});
export default useStore;

```



store/modules/user.ts

```ts
import { defineStore } from 'pinia';


const useUserStore = defineStore({
  // 第一个值是命名空间
  id: 'user',
  // 必须是箭头函数 然后返回一个对象
  state: (): any => ({
    token: 'token' || '',
    nickname: 'user1111',
    avatar: '',
    roles: [],
    perms: [],
  }),
  // 计算属性,这里感觉更适合做获取器
  getters:{
    nicknameGetter():any {
      return '前缀---'+this.nickname
    }
  },
  // 同步异步操作都可以
  actions:{
    actionPinia () {
      console.log(this.nickname)
      console.log("这是action里面的操作")
    }
  }


});
export default useUserStore;

```

#### --4. 使用

```js
import useStore from '@/store'
const { user } = useStore();
console.log(user.nickname)
user.actionPinia()
```









### 5.0.7 watch |  watchEffect |  compute

```ts
let message2 = ref<string>('')
watchEffect(() => {
	console.log('message', message.value);
	console.log('message2', message2.value);
})

watch(count,(newv,oldv)=>{
  console.log(oldv)
  console.log(newv)
})

watch 会明确监听某一个响应数据，
/*
watch 的第三个参数是一个可选的对象，支持以下选项：

immediate：在侦听器创建时立即触发回调。
deep：深度遍历，以便在深层级变更时触发回调。
flush：回调函数的触发时机。pre：默认，dom 更新前调用，post: dom 更新后调用，sync 同步调用。
onTrack / onTrigger：用于调试的钩子。在依赖收集和回调函数触发时被调用
*/


简单地说，watchwatch 功能更加强大，而 watchEffect 在某些场景下更加简洁。


let firstname = ref("");
let lastname = ref("");
const count = computed(() => {
  return firstname.value + "---------" + lastname.value;
});


```



### 5.0.8 类型断言

```js
// 类型断言as：这么写，行！const temp = this.$refs.drag as HTMLElement（断言这玩应绝壁是文档元素）
// 这么写，不完全行！const temp:any = this.$refs.drag（这玩应乐意是啥是啥）
// 非空断言!：变量!.xxxx  
```



### 5.0.9 插槽

```html
父组件：
<child :tochild="msg" @tofather="tofather">
      <template v-slot:header >  </template></child
>

子组件：
<template>
  <slot name="header" style="color: red;">插槽里面的值</slot>
  <div>子组件</div>
  <button @click="children">子组件的按钮</button>
</template>
```





### 5.0.10 ref 

```
step1 : 组件上面
:ref="ganttContainer"

step2 ： script 里面

const ganttContainerRef = ref<any>(null);
const ganttContainer = (el) => {
  ganttContainerRef.value = el;
};



```









## 5.1 小技巧



```js
--1. 智能提示
vetur扩展插件导致  vscode 报错
vue3使用建议用Volar来替换vetur
--2.差异
与vue2的区别是根目录的index.html。里面是src/main.ts
vue2的index.html是public中的
--3.vue-cli 创造版本的一些选项？
--3.1 Use class-style component syntax? (Y/n) n
即原本是：home = new Vue()创建vue实例
使用装饰器后：class home extends Vue{}
--3.2 Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? (Y/n) y
使用Babel与TypeScript一起用于自动检测的填充? yes
--3.3 Pick additional lint features: (Press <space> to select, <a> to toggle all, <i> to invert selection)

(*) Lint on save（保存就检查代码）
( ) Lint and fix on commit（fix和commit时候检查代码）
```







## 5.2 vite 优化



### 2.2.1 eslint

#### shell安装

```shell

npm install --save-dev eslint eslint-plugin-vue

npm install eslint --save-dev
npx eslint --init
```



#### eslintrc.js写入

```js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "parser": "vue-eslint-parser",
    "extends": [
        // "eslint:recommended",
        "plugin:vue/vue3-essential",
        // "plugin:@typescript-eslint/recommended"
    ],
    "parserOptions": {
        // "ecmaVersion": "latest",
        "parser": "@typescript-eslint/parser",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'vue/multi-word-component-names': "off",
        "no-unused-vars":1, //没被使用
    }
}


```

### 2.2.2 自动注入 | xx.d.ts

自动导入composition [api](https://so.csdn.net/so/search?q=api&spm=1001.2101.3001.7020) 和 生成全局typescript说明



```shell
npm i -D unplugin-auto-import
npm i vite-plugin-compression -D
```



 vite.config.ts

```js
import AutoImport from "unplugin-auto-import/vite"
export default defineConfig({
  plugins: [
    ...
     AutoImport ({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    })
  ]
})

```

会生成xx.d.ts

```ts
// Generated by 'unplugin-auto-import'
export {}
declare global {
  const EffectScope: typeof import('vue')['EffectScope']
  const computed: typeof import('vue')['computed']
  const createApp: typeof import('vue')['createApp']
  const customRef: typeof import('vue')['customRef']
  const defineAsyncComponent: typeof import('vue')['defineAsyncComponent']
  const defineComponent: typeof import('vue')['defineComponent']
  const effectScope: typeof import('vue')['effectScope']
  const getCurrentInstance: typeof import('vue')['getCurrentInstance']
  const getCurrentScope: typeof import('vue')['getCurrentScope']
  const h: typeof import('vue')['h']
  const inject: typeof import('vue')['inject']
  const isProxy: typeof import('vue')['isProxy']
  const isReactive: typeof import('vue')['isReactive']
  const isReadonly: typeof import('vue')['isReadonly']
  const isRef: typeof import('vue')['isRef']
  const markRaw: typeof import('vue')['markRaw']
  const nextTick: typeof import('vue')['nextTick']
  const onActivated: typeof import('vue')['onActivated']
  const onBeforeMount: typeof import('vue')['onBeforeMount']
  const onBeforeUnmount: typeof import('vue')['onBeforeUnmount']
  const onBeforeUpdate: typeof import('vue')['onBeforeUpdate']
  const onDeactivated: typeof import('vue')['onDeactivated']
  const onErrorCaptured: typeof import('vue')['onErrorCaptured']
  const onMounted: typeof import('vue')['onMounted']
  const onRenderTracked: typeof import('vue')['onRenderTracked']
  const onRenderTriggered: typeof import('vue')['onRenderTriggered']
  const onScopeDispose: typeof import('vue')['onScopeDispose']
  const onServerPrefetch: typeof import('vue')['onServerPrefetch']
  const onUnmounted: typeof import('vue')['onUnmounted']
  const onUpdated: typeof import('vue')['onUpdated']
  const provide: typeof import('vue')['provide']
  const reactive: typeof import('vue')['reactive']
  const readonly: typeof import('vue')['readonly']
  const ref: typeof import('vue')['ref']
  const resolveComponent: typeof import('vue')['resolveComponent']
  const shallowReactive: typeof import('vue')['shallowReactive']
  const shallowReadonly: typeof import('vue')['shallowReadonly']
  const shallowRef: typeof import('vue')['shallowRef']
  const toRaw: typeof import('vue')['toRaw']
  const toRef: typeof import('vue')['toRef']
  const toRefs: typeof import('vue')['toRefs']
  const triggerRef: typeof import('vue')['triggerRef']
  const unref: typeof import('vue')['unref']
  const useAttrs: typeof import('vue')['useAttrs']
  const useCssModule: typeof import('vue')['useCssModule']
  const useCssVars: typeof import('vue')['useCssVars']
  const useRoute: typeof import('vue-router')['useRoute']
  const useRouter: typeof import('vue-router')['useRouter']
  const useSlots: typeof import('vue')['useSlots']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
}

```









### 2.2.3  vite 2 配置环境

#### step1    根目录中配置环境文件

.env.dev中写入

```
NODE_ENV = "development"
VITE_BASE_URL='http://localhost:8088/'
```

.env.pro中写入

```
NODE_ENV = "production"
VITE_BASE_URL='http://localhost:8089/'
```



启动就可以在package.json

```
"vite": " vite --mode dev ",
```





#### step2: vite.config.ts中

```js
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite"
import viteCompression from 'vite-plugin-compression';

const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

// let URL_RSP = '';//路径
// let URL_IM = '';//路径

console.log(import.meta, "环境")

// https://vitejs.dev/config/
export default ({ mode }) => {
  //默认会读取我们的env文件 --mode是dev那么就会去到 .env.dev的文件
  const env = loadEnv(mode, process.cwd());   // 获取.env文件里定义的环境变量
  console.log("环境", env)
  if (env.VITE_USER_NODE_ENV == "production") {
    // 生产环境
    console.log("----------生产环境----------")
    // URL_RSP = proEnv.URL_RSP;
    // URL_IM = proEnv.URL_IM;
  } else if (env.VITE_USER_NODE_ENV === "development") {
    // 测试环境
    console.log("----------开发环境----------")
    // URL_RSP = testEnv.URL_RSP;
    // URL_IM = testEnv.URL_IM;
  } else {
    // 开发环境
    console.log("----------测试环境----------")
    // URL_RSP = devEnv.URL_RSP;
    // URL_IM = devEnv.URL_IM;
  }
  return defineConfig({

    // envPrefix:"VITE",
    plugins: [vue(), AutoImport({
      imports: ["vue", "vue-router"], // 自动导入vue和vue-router相关函数
      dts: "src/auto-import.d.ts" // 生成 `auto-import.d.ts` 全局声明
    }), viteCompression({
      //生成压缩包gz
      verbose: true, // 输出压缩成功
      disable: false, // 是否禁用
      threshold: 1, // 体积大于阈值会被压缩，单位是b
      algorithm: 'gzip', // 压缩算法
      ext: '.gz',// 生成的压缩包后缀
    }),
    ],
    //viteconfig 和 tsconfig中都设置 设置路径
    resolve: {
      alias: {
        '@': '/src/',
        '@core': '/src/core/',
      }
    },
    //生产路径的基本路径
    base: './',
    // 反向代理
    server: {
      //开始热更新
      hmr: true,
      port: 8080,
      host: "0.0.0.0",
      // 是否自动在浏览器打开
      open: true,
      // 是否开启 https
      https: false,
      proxy: {
        '/api': {
          target: 'https://blog.csdn.net/weixin_45292658',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
    build: {
      //浏览器兼容性  "esnext"|"modules"
      target: "modules",
      //指定输出路径
      outDir: "dist",
      //生成静态资源的存放路径
      assetsDir: "assets",
      //小于此阈值的导入或引用资源将内联为 base64 编码，以避免额外的 http 请求。设置为 0 可以完全禁用此项
      assetsInlineLimit: 4096,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      //构建后是否生成 source map 文件
      sourcemap: false,
      //自定义底层的 Rollup 打包配置
      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: '[ext]/[name]-[hash].[ext]'
        }
      },
      //@rollup/plugin-commonjs 插件的选项
      commonjsOptions: {

      },

      //当设置为 true，构建后将会生成 manifest.json 文件
      manifest: false,
      // 设置为 false 可以禁用最小化混淆，
      // 或是用来指定使用哪种混淆器
      // boolean | 'terser' | 'esbuild'
      minify: "terser", //terser 构建后文件体积更小
      //传递给 Terser 的更多 minify 选项。
      // 清空console.log
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      },
      //设置为 false 来禁用将构建后的文件写入磁盘
      write: true,
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      //启用/禁用 brotli 压缩大小报告
      brotliSize: true,
      //chunk 大小警告的限制
      chunkSizeWarningLimit: 500
    }

  })

}
```









### 2.2.4 element-plus导入

```
npm i vite-plugin-style-import@2.0 vite-plugin-components -D
npm i consola -D
```








## 5.3 细节

### 5.3.1 .d.ts文件

```js
--1.通过declare声明的类型或者变量或者模块，在tsconfig.json的include包含的文件范围内，都可以直接引用而不用去import或者import type相应的变量或者类型。
tsconfig再这里https://www.tslang.cn/docs/handbook/tsconfig-json.html。
可以自动提示。但是只能在ts文件中智能提示和自动引入，vue文件会报错
--2.新建src/type/xx.d.ts文件
// 1.定义变量
declare let a :string;
// 2.方法的声明最好直接在vue里面定义
declare function b(id:number)  
// 3.
declare type Asd ={
  id:number,
  sadasdasd:string
}

// 这玩意用于 JQuery 之类的全局类
declare namespace API {
  function get(url: string, settings?: any): void;
}
```











### 5.3.2 vue3 | tsconfig.json 

```ts
{
  
  "paths": {
    "@/*": ["./src/*"]  // 这里需要配置
  },
  "include": ["./src/**/*.ts", "./src/**/*.d.ts", "./src/**/*.tsx", "src/**/*.vue"],
  "exclude": ["./node_modules/**/*"],
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    },
    // 1.编译成哪个版本的js 
    "target": "esnext",
    // // 2.指定模板生成的形式
    "module": "esnext",
    // // 3.决定如何处理模块
    "moduleResolution": "node",
    // "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    // 编译过程中需要引入的库文件的列表
    "lib": ["esnext", "dom"],
    // 忽略所有的声明文件（ *.d.ts）的类型检查。
    "skipLibCheck": true,
    "suppressImplicitAnyIndexErrors": true
  },
}

```





### 5.3.3 .eslintrc.js

```ts
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    // "@vue/prettier",
    "@vue/prettier/@typescript-eslint",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 0 = off, 1 = warn, 2 = error   error 会自己报错
    // 解决了不写类型的问题
    "@typescript-eslint/no-inferrable-types": "off",
    // 只用了一次会报错的问题
    "prefer-const": "off",
    //.d.ts导入的问题
    "no-undef":"off",
    // 解决了vue.config.js必须要用require的问题
    '@typescript-eslint/no-var-requires': 0
  },
  
};

```







### 5.3.4  .





## 5.4 自定义指令

### 5.4.0 基本

```js
vue3的自定义指令周期变成了 本身周期的周期
--1.(vue2:mounted)bind:只调⽤⼀次，指令第⼀次绑定到元素时调⽤，⽤这个钩⼦函数可以定义⼀个绑定时执⾏⼀次的初始化动作。
--2. inserted:被绑定元素插⼊⽗节点时调⽤（⽗节点存在即可调⽤，不必存在于document中）。
--3. (vue2:updated)update:被绑定于元素所在的模板更新时调⽤，⽽⽆论绑定值是否变化。通过⽐较更新前后的绑定值，可以忽略不必要的模板更新。
--4. componentUpdated:被绑定元素所在模板完成⼀次更新周期时调⽤。
--5. unbind:只调⽤⼀次，指令与元素解绑时调⽤。
```







### 5.4.1 权限

#### 5.4.1.1 src/directive/hasButton.ts



```js
export const hasPermission = {
    install(Vue:any) {
        //自定义指令v-has：
        Vue.directive('has', {
            mounted(el:any, binding:any, vnode:any) {
                if (!checkPermission(binding.value)) {
                    // let tooltipNode = vnode.children.find((childrenCmpt:any) => childrenCmpt.component?.type.name == 'ElTooltip')
                    // tooltipNode.component.props.disabled = false
                    console.log()
                    vnode.el.style.cssText=`display:none`
                }
            },
        });
        //权限检查方法
        function checkPermission(value:any) {
            let isExist = false;
            let userlogin = JSON.parse(localStorage.getItem("userlogin") || "[]");
            userlogin = {
                hasPermission:["edit","add","del"]
            }
            let buttonArr = userlogin.hasPermission
            //判断是否按钮有权限
            if (buttonArr.includes(value)) {
                isExist = true;
            }
            return isExist;
        }
    }
};
export default hasPermission;




```

#### 5.4.1.2 src/main.ts

```ts
import permission from './directive/permission/hasButton'
app.use(permission)
```

#### 5.4.1.2 src/test.vue

```vue
<span v-has='"del"'>
          <el-tooltip placement="top" content="无权访问,请联系管理员" type="tooltip" disabled>
            <span>
              <el-button type="primary" >删除</el-button>
            </span>
          </el-tooltip>
        </span>
```






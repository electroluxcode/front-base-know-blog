# 5.vue3

[[toc]]

https://cn.vuejs.org/guide/built-ins/teleport.html

## 5.？奇奇怪怪的报错

```js


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

#### 1. 安装

```shell
npm install pinia -S
```



#### 2. main.ts中

```ts
import {createPinia} from 'pinia'
const store=createPinia()

// 使用vuex
// import vuex from './store'
app.use(store)
```



#### 3. src/store下面新建modules文件夹和index.ts文件

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

#### 4. 使用

```js
import useStore from '@/store'
const { user } = useStore();
console.log(user.nickname)
user.actionPinia()
```





#### 5. 项目中的基础使用

针对这个项目。我们可以构建基础的文件

> stores/BIScreen/BIScreen.ts

```ts
import { defineStore } from 'pinia';

export const useMapStore = defineStore('MapStatus', {
  state: () => {
    return {
        data:{
            src:"ht"
        }
    };
  },
  getters:{
    coordsGetter():any {
      return this.data
    }
  },
  actions: {
    setCoords(newCoords) {
      this.data = newCoords;
    },
  },
});

```



- `id`:这里的 `MapStatus` 保证不重复即可

- `state`:数据层

- `getters`: 对数据层的数据有能力做两次包装(这个项目中不用这个)

  ```ts
  import { useMapStore } from "@/stores/BIScreen/BIScreen";
  const MapStatus = useMapStore();
  // 这样可以直接访问数据
  MapStatus.coordsGetter
  ```

  



##### 1.1 共享数据

这里讲一下数据取出的几种方式

###### 1.1.1  不保留响应式

```ts
import { useMapStore } from "@/stores/BIScreen/BIScreen";
const MapStatus = useMapStore();
// 这样可以直接访问数据
MapStatus.data
```

###### 1.1.2 保留响应式

```ts
import { useMapStore } from "@/stores/BIScreen/BIScreen";
import { storeToRefs } from "pinia";
const MapStatus = useMapStore();
const { data } = storeToRefs(MapStatus);
data.value
```



##### 1.2 改变数据



通过 action 实现

```ts
import { useMapStore } from "@/stores/BIScreen/BIScreen";
const MapStatus = useMapStore();
setTimeout(() => {
  MapStatus.setCoords("我变化了");
}, 6000);
```





##### 1.3 监听数据改变

```ts
import { useMapStore } from "@/stores/BIScreen/BIScreen";
const MapStatus = useMapStore();
const subscribe = MapStatus.$subscribe(
  (mutation, state) => {
    console.log("变化:",state);
  },
  //   detached值为 true 时，即使所在组件被卸载，订阅依然在生效
  { detached: false }
);
```









### 5.0.7 watch |  watchEffect |  compute

- watchEffect 能够自动收集你的依赖。但是他是同步收集依赖，这一点会徒增心智负担
- watch 能够手动收集依赖

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



### 5.0.9 vmodel

- vue3 原理是 update：model-value  +   :model-value‘

  内部的value 绑定给 model-value 。监听 update:modelValue 事件

  假如是 v-model:title="bookTitle" 那么 子组件 就需要 update:emit('update:title', $event.target.value) 这样子，后面的值可以是数组，前面的那个值也可以是  v-model:title1 v-model:title2这样子

  ```js
  <input
    :model-value="searchText"
    @input="searchText = $event.target.value"
  />
  
  使用起来
  父： <Child v-model="message"/> 
  子
  
  const props = defineProps([
    "modelValue", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
  ]);
  
  const emit = defineEmits(['update:modelValue'])
  emit('update:modelValue', event.target.value)
  ```

- vue2 的原理是

  ```ts
  value + input 事件 
  ```

  







、

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

- vue3的自定义指令周期变成了 本身周期的周期
- created 元素初始化的时候
- beforeMount 指令绑定到元素后调用 只调用一次
- mounted 元素插入父级dom调用
- beforeUpdate 元素被更新之前调用
- update 这个周期方法被移除 改用updated
- beforeUnmount 在元素被移除前调用
- unmounted 指令被移除后调用 只调用一次

vue2 

- (vue2:mounted)bind:只调⽤⼀次，指令第⼀次绑定到元素时调⽤，⽤这个钩⼦函数可以定义⼀个绑定时执⾏⼀次的初始化动作。
- inserted:被绑定元素插⼊⽗节点时调⽤（⽗节点存在即可调⽤，不必存在于document中）
-  (vue2:updated)update:被绑定于元素所在的模板更新时调⽤，⽽⽆论绑定值是否变化。通过⽐较更新前后的绑定值，可以忽略不必要的模板更新
-  componentUpdated:被绑定元素所在模板完成⼀次更新周期时调⽤
-  unbind:只调⽤⼀次，指令与元素解绑时调⽤。





### 5.4.1 封装示例



#### 5.4.1.1  业务文件

src/directive/hasButton.ts

```js
import type {  Directive } from 'vue';

function checkPermission(value: string) {
    let isExist = false;
    let userlogin = JSON.parse(localStorage.getItem("userlogin") || "[]");
    userlogin = {
        hasPermission: ["edit", "add", "del"]
    }
    let buttonArr = userlogin.hasPermission
    //判断是否按钮有权限
    if (buttonArr.includes(value)) {
        isExist = true;
    }
    return isExist;
}

export const hasPermission: Directive = {
    created(el: any, binding: any) {
        console.log("进入权限判断")
        console.log("sadasdsadasd", el, binding.value)
        if (!checkPermission(binding.value)) {
            console.log("没有这个的权限")
            el.style.cssText = `display:none`
        }
    }
};
export function setupPermission(app: any) {
    app.directive('has', hasPermission);
}
```

- 简单来说就是 在`生命周期`中注册方法，然后暴露一个带着app传参的` function`出去(app在之中需要 调用 `app.directive('has', hasPermission);`)。

  



#### 5.4.1.2 主文件引入

src/main.ts

```ts
import permission from './directive/permission/hasButton'
app.use(permission)
```

#### 5.4.1.3  调用

```vue
<template>
  <div v-has="'del'">
    <Child >
        <template v-slot:test="slotName"> 
          {{ slotName.sctest }}
        </template>
    </Child>
  </div>
  <div v-has="'de3l'">
      我是de3l
  </div>
</template>
<script setup lang="ts">
import Child from "./components/children.vue";
</script>
```









## 5.5  slot

### 5.5.0 默认插槽

- 父组件 在  children 的 temple 元素中 `#default`

```html


父组件：
<template>
  <div>
    <Child>
        <template #default> 
            这是我要展示的数据ddddd
        </template>
    </Child>
  </div>
</template>

<script setup lang="ts">
import Child from "./components/children.vue";
</script>

子组件：
<template>
    <div >
       <div>下面是展示的数据</div>
       <slot></slot>
    </div>
</template>
```





### 5.5.1 子组件默认

就是父传递给子的时候，子组件有一个默认的内容 。类似于这样子

```html
<slot>xxxxx </slot>
```





### 5.5.2 具名插槽

- 父组件在 children 的 temple 元素中 v-slot:`你的name`
- 子组件中 slot 的 元素中 需要给一个 name 属性 位 `你的name`
- `vue3`必须把`v-slot`写在`template`标签中,vue2 什么标签都能够写入

```html
父组件：
<child :tochild="msg" @tofather="tofather">
      <template v-slot:header >  </template>
</child>

子组件：
<template>
  <slot name="header" style="color: red;">插槽里面的值</slot>
  <div>子组件</div>
  <button @click="children">子组件的按钮</button>
</template>
```



### 5.5.3  动态插槽

- 父组件 在children 的 temple 元素中 #[xxxx] : 
- 子组件不用变

```vue
父
<template>
  <div>
    <Child>
        <template #[slotName]> 
            这是我要展示的数据ddddd
        </template>
    </Child>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue"
import Child from "./components/children.vue";
let slotName = ref("test")
</script>

子
<template>
    <div >
       <div>下面是展示的数据</div>
       <slot name="test"></slot>
    </div>
</template>

<script setup lang="ts" >
</script>

<style scoped>
</style>

```



### 5.5.4 作用域插槽

`插槽内容`是无法访问子组件的数据的，这种方式能够访问

- 父组件中 ：在 具名插槽的基础上面 给一个 `=`  然后就可以在 temple 用双括号 使用 子组件下面的 属性了 。vue2 中  slot-scope="你的属性也可以" 
- 子组件中：slot上面可以写入输出的属性

```html
父组件
<template>
  <div>
    <Child>
        <template v-slot:test="slotName"> 
          {{ slotName.sctest }}
        </template>
    </Child>
  </div>
</template>
<script setup lang="ts">
import Child from "./components/children.vue";
</script>

子组件
<template>
    <div >
       <div>下面是展示的数据</div>
       <slot name="test" sctest="我是sctest的数据"></slot>
    </div>
</template>
<script setup lang="ts" >
</script>
<style scoped>
</style>
```



## 5.6 mixin 

不推荐使用，因为会导致不清晰的数据来源 







## 5.7 vmodel



### 5.7.1 基础(单个 model)

我们先要知道 vmodel 有两种大情况

- 原生组件:  这个组件 被解析之后  变成 `:value` + `@input`
- 如果是 vue 组件 会变成 `:modelValue` + `update:modelValue`

首先我们要明白我们 如果直接写vmodel，如下面代码

```vue
父组件

<template>
    <div>
        这是vmodel 的示例------{{ message }}
        <child v-model="message"></child>
    </div>
</template>

<script setup lang="ts">
import {ref, reactive} from "vue"

let message = ref<any>("我是父组件的数据-111")
import child from "./component/children.vue"
</script>

子组件

<template>
    <div>
        我是 vmodel 的 children------{{ props }}


    </div>
</template>

<script setup lang="ts">

const props = defineProps([
  "modelValue", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
]);

const emit = defineEmits(['update:modelValue'])
setTimeout(() => {
    emit('update:modelValue', "我是子组件回传的数据")
}, 2000);


</script>

<style scoped>

</style>
```

- prop 中会显示 

  ```ts
  { "modelValue": "我是子组件回传的数据" }
  ```

  也就是说 我们在 写 v-model = "xx"  其实等于 

  ```ts
  :modelValue="xx"
  @update:modelValue="newValue => xx = newValue"
  ```

  

### 5.7.2 多个(多model)

区别主要在于

- **语法**:**父组件** 需要 `v-model:你自己的model名字="xxx"` 。**子组件**`defineProps`里面的数据就不需要 model 了 直接 是 

  ```ts
  const props = defineProps([
    "test", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
    "test1",
  ]);
  ```

  然后是更新的方法就是 

  ```ts
  const emit = defineEmits(['update:test'])
  setTimeout(() => {
      emit('update:test', "我是子组件回传的数据")
  }, 2000);
  ```



完整

```vue
父组件

<template>
    <div>
        这是vmodel 的示例------{{ message }}
        <child v-model:test="message" v-model:test1="message1"></child>
    </div>
</template>

<script setup lang="ts">
import child from "./component/children.vue"
import {ref, reactive} from "vue"
let message = ref<any>("我是父组件的数据-000")
let message1 = ref<any>("我是父组件的数据-111")

</script>


子组件
<template>
    <div>
        我是 vmodel 的 children------{{ props }}
    </div>
</template>

<script setup lang="ts">

const props = defineProps([
  "test", // 接收父组件使用 v-model 传进来的值，必须用 modelValue 这个名字来接收
  "test1",
]);



const emit = defineEmits(['update:test'])
setTimeout(() => {
    emit('update:test', "我是子组件回传的数据")
}, 2000);


</script>

<style scoped>

</style>
```





### 5.7.3  vmodel 修饰符

- 这里主要看 .lazy 修饰符号， 不加上.lazy 的话，那么 input 每一次进行 输入 都会触发双向绑定，如果添加上去的话，那么 在input 失去焦点 又或者是 点击enter 的时候就会触发 



**关于自定义修饰符号**

- 传参的 子组件那里。类似于 `.capitalize` 这样子 ，可以通过 value.modelModifiers.capitalize 访问











## 5.8  provide/inject

就是 provide/inject 的东西而已

```js
父组件 
import { provide } from "vue";
import { TopParamType,DefaultProjectData } from "@/type/Param";

let Project = ref<TopParamType>(DefaultProjectData);
provide("Project", Project);
    

子组件
import { inject, watch } from "vue";
import { TopParamType, DefaultProjectData } from "@/type/Param";
let InjectParam = inject("Project", DefaultProjectData);


watch(
  InjectParam,
  (newv) => {
    // temp = HandleWatchData(newv,"soilPressure")
    // if (pageInstance.refs.echart) {
    //   (pageInstance.refs.echart as any).handelSyncData(SumCurveConfig(temp));
    // }
  },
  { immediate: true, deep: true }
);



// 修改父
let InjectParamUpdate = inject("ProjectUpdate",DefaultProjectData)  as any
setTimeout(() => {
  InjectParamUpdate("ds33ds")
}, 2200);
```













## 5.9 透传 

- inheritAttrs 选项为 false 可以禁用  属性透传
- 访问透传属性可以 通过 this.$attr 来拿到。想要指定的 组件 实现 绑定，可以 v-bind="$attrs"









## 5.10 component



### 5.10.1 函数式组件 



#### 5.10.1.1 tsconfig.json 中开启

```ts
"jsx": "preserve"
```



```ts
暴露东西出去就好了 emit doSearch , 然后外部接收
```



#### 5.10.1.2  写入一个js

```ts

import { createApp } from "vue";
let log = (data) => {
    console.log("你终于点log了")
    
}
const MessageBox = {
    props:{
        msg:{
            type:String,
            required:true
        },
        close:{
            type:Function,
            required:true
        }
    },
    render(ctx){
        const {$props,$emit} = ctx;
        console.log("props",$props)
        return <div>
            --{$props}--
            <Button onclick={()=>{$props.close()}}>这里是按钮</Button>
        </div>
    }
}


function ShowComponent(){
    // 挂载到div 下面
    const div = document.createElement("div");
    document.body.appendChild(div);
    let app = createApp(MessageBox,{
        msg:"测试",
        close(){
            // app.unmount(div);
            div.remove()
        },
        onclick(){
            console.log("见鬼")
        }
    })
    app.mount(div)
    // const app = 
}

export {ShowComponent}
```



css 可以用 @styils/vue 来做



### 5.10.2 基本结构

#### 5.10.2.1 父

```vue
<template>
  <div>
    我是父组件
    <children :visible="visible" :ref="(el) => FormSet(el, 'd')">
      <template v-slot:test ></template>
    </children>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps, reactive, defineExpose } from "vue";
import children from "./children.vue";
let visible = true;
let FileUploadFormRef = ref<any>({});
const FormSet = (el, type: string) => {
    FileUploadFormRef.value[type] = el;
};
onMounted(() => {
  console.log(FileUploadFormRef.value)  
})
</script>

<style scoped></style>

```



#### 5.10.2.2 子

```vue
<template>
    <div>
        我是子组件--{{ temp.visible }}
        <slot name="test"></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, watch , onMounted ,defineProps,reactive,defineExpose} from 'vue'
let test = "3434"
interface Props {
    visible: boolean;
    data:any
}
let temp = withDefaults(defineProps<Props>(), {
    visible: false,
    data: () => {
      return {
        data: [{ name: 'xxx.mp4' }],
      };
    },
});
defineExpose({
    visible:test
});
</script>

<style scoped>

</style>
```



#### 5.10.2.3 component 



- is 属性 可以放置 需要渲染的 组件









## 5.11 keep-alive



- ​    `<KeepAlive>` 默认会缓存内部的所有组件实例，但我们可以通过 `include` 和 exclude.定义，特别注意的是 `<KeepAlive include="a,b">` 像是这种写法 需要指定name ，在setup中，不需要显式的指定 name
- 被缓存的 生命周期是  [`activated`](https://cn.vuejs.org/api/options-lifecycle.html#activated) 和 [`deactivated`](https://cn.vuejs.org/api/options-lifecycle.html#deactivated) .`activated` 在组件挂载时也会调用.并且 `deactivated` 在组件卸载时也会调用。











## 5.12 Teleport

`<Teleport>` 是一个内置组件，它可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去

```vue
<template>
  <div class="tele">
    <Teleport to="body">
      <te></te>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import te from "./teleport.vue";
</script>

<style scoped>
.tele {
  background: red;
}
</style>

```



### 5.13.1 disabled="isMobile"

禁用掉这个状态

## 5.13  v-memo | v-once

- **`v-memo` 不能用在 `v-for` 内部。确保两者都绑定在同一个元素上**
- `v-memo` 传入空依赖数组 (`v-memo="[]"`) 将与 `v-once` 效果相同
-  v-once 仅渲染元素和组件一次







## 5.14 this 下面

因为在 setup 语法中 是在 create 阶段 ，所以不能使用 this 

```ts
getCurrentInstance
```



### 5.14.1 ref

可以直接用 

```vue
<template>
  <div>
    我是父组件
    <!-- <children :visible="visible" :ref="(el) => FormSet(el, 'd')">
      <template v-slot:test ></template>
    </children> -->
    <children :visible="visible" ref="FileUploadFormRef">
      <template v-slot:test ></template>
    </children>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps, reactive, defineExpose } from "vue";
import children from "./children.vue";
let visible = true;
import { getCurrentInstance } from 'vue'
console.log("我是this:",getCurrentInstance())
onMounted(() => { 
    // 这样子可以直接用
  console.log("this:",getCurrentInstance().refs.FileUploadFormRef)
})

</script>

<style scoped></style>

```



### 5.14.2 attr 

可以拿到透传的 字段



### 5.14.5 $forceUpdate |  nextTick

-  nextTick：等待下一次 DOM 更新刷新的工具方法。

- $forceUpdate：强制组件刷新



## 5.15 Transition



- 由 `v-if` 所触发的切换
- 由 `v-show` 所触发的切换
- 由特殊元素 `<component>` 切换的动态组件
- 改变特殊的 `key` 属性



### 5.15.1 name 

传入 name 属性 例如 

````html
<Transition name="fade">
  ...
</Transition>
````



那么 css 中 就有 

```css
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
```





## 5.16  异步  | Suspense

直接在 顶部来一个 await 就是异步组件

### 5.16.1  子组件

```vue
<template>
  <div>
      加载完毕了
  </div>
</template>

<script setup lang="ts">

let sleep = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(20)
        }, 2000);
    })
}
await sleep()

</script>

<style scoped></style>

```



### 5.16.2  父组件

**套一层Suspense**

```vue
<template>
    <div>
      <Suspense>
        <!-- 具有深层异步依赖的组件 -->
        <async2 />
  
        <!-- 在 #fallback 插槽中显示 “正在加载中” -->
        <template #fallback> Loading... </template>
      </Suspense>
    </div>
  </template>
  
  <script setup lang="ts">
  import async2 from "./async.vue";
  </script>
  
  <style scoped></style>
  
```





## 5.17 ref 组件实例



### 5.17.1 多ref



```vue
<template>
  <div>
    我是父组件
  <children :visible="visible" :ref="(el) => FormSet(el, 'd')">
      <template v-slot:test ></template>
    </children> 
  
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps, reactive, defineExpose } from "vue";
import children from "./children.vue";
let visible = true;
let FileUploadFormRef = ref<any>({});
const FormSet = (el, type: string) => {
    FileUploadFormRef.value[type] = el;
};
import { getCurrentInstance } from 'vue'
console.log("我是this:",getCurrentInstance())
onMounted(() => { 
  console.log("this:",getCurrentInstance().refs)
})

</script>

<style scoped></style>

```



 

### 5.17.2 单ref

```vue
<template>
  <div>
    我是父组件
    <!-- <children :visible="visible" :ref="(el) => FormSet(el, 'd')">
      <template v-slot:test ></template>
    </children> -->
    <children :visible="visible" ref="FileUploadFormRef">
      <template v-slot:test ></template>
    </children>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineProps, reactive, defineExpose } from "vue";
import children from "./children.vue";
let visible = true;
import { getCurrentInstance } from 'vue'
console.log("我是this:",getCurrentInstance())
onMounted(() => { 
    // 这样子可以直接用
  console.log("this:",getCurrentInstance().refs.FileUploadFormRef)
})

</script>

<style scoped></style>

```


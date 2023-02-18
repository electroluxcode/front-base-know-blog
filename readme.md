个人前端知识点博客：用来面试用的

style={{background:'red'}} 类似于这种不能直接写进入不然会报错

2023/2/14 添加ts和react的学习

2023/2/14 添加xhr方法，添加锚点导航。添加fragment和v8的一些知识

2023/2/03 整理代码面试题+添加滚动贴合（scroll-snap-type），锚点跳转，animate示例和容器查询

2023/2/01 添加cvte 面试的题目和代码输出题的总结（作用域链）

2023/2/01 添加v8 内存原理的学习

2023/1/31 添加tc39错误处理 原理 pwa 的start url要能访问

2023/1/30 添加js pwa 和 react 原理系列的学习 和算法在 寒假的学习

2023/1/13 添加lru的学习 和 sendbeacon的学习

2023/1/7 添加算法的学习 和 vuex | redux | pinia的异同

2022/12/25 添加算法的学习和react的hook示例

2022/12/23 添加vue2/3自定义指令（权限+水印）。react基本配置+hook

2022/12/14 postcss-env，babel7前后比较，loader实操。| webpack plugin的10个生命周期和3种引用方式代码的编写（compiler和他的assets和source）

2022/12/13 深入了解webpack loader | plugin机制 | 加强了正则（零宽断言等能力）

2022/12/12 添加 vue3 组件学习 | pinia | axios 封装 | 动态路由 | ts类型深入 | .d.ts文件解析

2022/12/09 添加 geo 示例 | webpack版本 对比  | vue-cli版本 对比 | webpackchunkname和terear不生效的原因 | 分包策略实操 require.ensure 真他妈好用

2022/12/07 添加自己写的babel-plugin插件，添加css工程化和js工程化和webpack/vue-cli一些兼容性的bug。

2022/12/05 ssr渲染实操(中间件 | axios | 插件 | 组件 | 常见的坑 | 路由 | 自动注册 )

2022/12/01 seo优化学习（spider+robot+pr+闪电绿萝+meta+反向seo）+添加大厂观察实操（cvte+拼多多）

2022/11/30 添加学习大厂实操（字节），meta属性示例，seo优化东东西

2022/11/29 自定义滚动条+dom元素变动 js的学习

2022/11/28 数组concat，filter之类的一些操作

2022/11/27 性能安全和webpack原理coding spliting的学习





参考链接：https://zhuanlan.zhihu.com/p/484734960?utm_id=0

注意一下() 好像不能够在文件名中出现，如果想要显示（）就只能在正文的一级标题中写入（）

侧边栏展开有问题一般是mode没有设置成 hash

step1:
```
npm install 安装依赖

npm run dev 启动

npm run build 打包

git add .

git commit -m "git commmit 提交"

git push origin master -f


```

step2 : 

gitee的服务里面点击gitpage。选择部署分支和部署目录，然后点击启动：

部署目录，选择docs/.vuepress/dist文件夹，刚刚我们执行打包命令生成的。


step3: 关于打包黑屏的问题我们可以这样解决（一般不用这样）
```
node_modules\@vuepress\core\lib\client 下的 app.js 
mode: 'history',改成hash


然后 .vuepresss/config.js中base: "./",

```

step4: 开启gitee
```
部署分支：master，
部署目录：docs/.vuepress/dist

```


step5：改变默认默认的vuepress-theme-reco 的 404 样式
```
node_modules\\vuepress-theme-reco\\layouts\\404.vue

```

step6：然后我们把刚才的变化打包

```
npm install patch-package@6.4.7 --save-dev
npx patch-package @vuepress   //这行代码diff比较并没有比较出不同的地方 ，见鬼
npx patch-package vuepress-theme-reco

package.json中添加 "postinstall": "patch-package"




```

step7：注意一下打包的路径问题，如果你跟我一样分了文件夹来存储你的makedown文档。那么你的config.js中就要写入当前的git仓库名字。这样打包才会正常(这个base没有这个操作)

例

```js
docs\.vuepress\config.js 中

base: "/front-supper-know-blog/",   //重要 npm run dev的时候这个关掉 。 build的时候再把他打开
```


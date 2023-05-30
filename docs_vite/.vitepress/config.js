import { defineConfig } from "vitepress";
import { pagefindPlugin, chineseSearchOptimize } from "vitepress-plugin-pagefind";

export default defineConfig({


  // options for markdown-it-table-of-contents
  toc: { includeLevel: [2,2,49] },
  includeLevel:[1,9] ,
   
  outDir: "../docs",
  // 相对路径打包
  // base: './',
  base: "/front-base-know-blog/",
  title: "Electrolux_blog",
  cleanUrls: true,
  lang: "en-US",
  description: "hello world",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "https://cdn.jsdelivr.net/npm/electroluxasset@1.0.8/image/svg/book.svg" }]],
  lastUpdated: true,
  themeConfig: {
    outlineTitle: "目录",
    // lastUpdatedText: 'Updated Date',
    i18nRouting: true,
    logo: "https://cdn.jsdelivr.net/npm/electroluxasset@1.0.8/image/svg/book.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端基础", link: "/know/know/1html" },
      { text: "前端工程化", link: "/supper/supper/1代码优化" },
      { text: "Python", link: "/python/flask.md" },
      { text: "Java", link: "/java/java.md" },
      { text: "项目", link: "/project/javadump分析.md" },
      
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com/Electrolux" }],
    footer: {
      message: "MIT License.",
      copyright: "Copyright © 2023～present Electrolux",
    },

    sidebar: {
      "/know/": [
        {
          text: "前端基础",
          collapsed: false,
          items: [
            { text: "html(浏览器)", link: "/know/know/1html" },
            { text: "js基础(1)", link: "/know/know/2javascript基础" },
            { text: "js基础(2)", link: "/know/know/3javascript基础" },
            { text: "js基础(3) | 手写题", link: "/know/know/4javascript手写题" },
            {
              text: "js基础(3) | 代码输出",
              link: "/know/know/4javascript代码输出题",
            },
            { text: "js基础(4) | es6", link: "/know/know/5javascript-es6" },
            { text: "js基础(5)", link: "/know/know/9javascript基础" },
            { text: "TypeScript", link: "/know/know/6ts" },
            { text: "CSS", link: "/know/know/7css" },
            { text: "BUG", link: "/know/know/8bug" },

          ],
        },
        {
          text: "计算机基础",
          collapsed: false,
          items: [
            { text: "计算机网络", link: "/know/计算机基础/1计算机网络" },
            //     "",
            //     "",
            //     "/know/框架/3.ssr.md",
            //     "/know/框架/4.微前端.md",
            //     "/know/框架/6.nginx.md",
            //     "/know/框架/7.python.md",
          ],
        },
        {
          text: "框架 | 工具",
          collapsed: false,
          items: [
            { text: "vue", link: "/know/框架/1vue" },
            { text: "react", link: "/know/框架/2react" },
            { text: "ssr", link: "/know/框架/3ssr" },
            { text: "微前端", link: "/know/框架/4微前端" },
            { text: "vue3", link: "/know/框架/5vue3" },
            { text: "nginx", link: "/know/框架/6nginx" },
            { text: "python", link: "/know/框架/7python" },
            { text: "ffmpeg", link: "/know/框架/8ffmpeg" },
            { text: "shell", link: "/know/框架/9shell" },
            { text: "aframe", link: "/know/框架/10aframe" },
            { text: "逆向数据crawl", link: "/know/框架/11逆向数据crawl" },
            { text: "threejs", link: "/know/框架/12threejs" },
            { text: "13electron", link: "/know/框架/13electron" },
            { text: "逆向数据crawl", link: "/know/框架/11逆向数据crawl" },
          ],
        },
        {
          text: "优化 | 工程",

          collapsed: false,
          items: [
            { text: "性能优化和安全", link: "/know/优化/1性能优化和安全" },
            { text: "webpack", link: "/know/优化/2webpack" },
            { text: "算法", link: "/know/优化/3算法" },
            { text: "性能优化", link: "/know/优化/4性能优化" },
            { text: "组件库构造", link: "/know/优化/5组件库构造" },
            { text: "webrtc", link: "/know/优化/6webrtc" },
            { text: "tensorFlow", link: "/know/优化/7tensorFlow" },
          ],
        },

        
        // {
        //   text: '反馈',
        //   items: [
        //     { text: "progress 进度条", link: "/know/progress" },
        //     { text: "popconfirm 确认弹出框", link: "/know/popconfirm" },
        //     { text: "message 提示信息", link: "/know/优化/" },
        //     { text: "dialog 弹窗", link: "/know/dialog" },
        //   ]
        // }
      ],
      "/java/": [{
        text: "java",
          collapsed: false,
          items: [
            { text: "jvm", link: "/java/java" },
            { text: "springboot", link: "/java/base" },
      ]}],
      "/python/": [{
        text: "python 基础",
          collapsed: false,
          items: [
            { text: "服务器", link: "/python/flask" },
      ]}],

      "/project/": [{
        text: "项目文档",
          collapsed: false,
          items: [
            { text: "java dump", link: "/project/javadump分析" },
      ]}],
      "/supper/": [
        {
          text: "代码高级",
          collapsed: false,
          items: [
            { text: "代码优化 | 设计模式", link: "/supper/supper/1代码优化" },
            { text: "设计模式与js", link: "/supper/supper/2实用算法" },
            { text: "性能优化", link: "/supper/supper/3性能优化" },
            { text: "UI设计", link: "/supper/supper/4UI设计" },
            // { text: "设计模式与js", link: "/supper/2设计模式与js" }
            // { text: "设计模式与js", link: "/supper/2设计模式与js" }
          ],
        },
        {
          text: "工程化",
          collapsed: false,
          items: [
            { text: "工程化基础", link: "/supper/工程化/1工程化基础" },
            { text: "webpack的配置", link: "/supper/工程化/2webpack的配置" },
            { text: "自动化脚本", link: "/supper/工程化/3关于一些自动化脚本" },
            { text: "docker 部署实操", link: "/supper/工程化/4docker 部署实操" },
            { text: "patch-package", link: "/supper/工程化/5给包打补丁" },
            { text: "gitee流水线", link: "/supper/工程化/6gitee流水线" },
           
          ],
        },
        {
          text: "工具基础",
          collapsed: false,
          items: [
            { text: "Sourcetree的使用", link: "/supper/工具基础/1Sourcetree的使用" },
            { text: "用gitee连接ssh,linux服务器", link: "/supper/工具基础/2用gitee连接ssh,linux服务器" },
            { text: "github图床", link: "/supper/工具基础/3github图床" },
            { text: "git的基本使用", link: "/supper/工具基础/4git的基本使用" },
            { text: "ps切图", link: "/supper/工具基础/5ps切图" },
            { text: "codepen", link: "/supper/工具基础/6codepen" },
            { text: "icon实操 | svg原理", link: "/supper/工具基础/7Icon实操" },
            { text: "GraphQl", link: "/supper/工具基础/8GraphQl" },
            { text: "快速mock", link: "/supper/工具基础/9快速mock" },
            { text: "脚手架", link: "/supper/工具基础/10脚手架" },
            { text: "figma", link: "/supper/工具基础/11figma" },
            { text: "nvm", link: "/supper/工具基础/12nvm" },
            { text: "苹果", link: "/supper/工具基础/13mac的使用" },
          ],
        },
        {
          text: "个人封装",
          collapsed: false,
          items: [
            { text: "个人封装", link: "/supper/个人封装/1个人发包模板" },
            
          ],
        },
        {
          text: "前端库",
          collapsed: false,
          items: [
            { text: "vueify", link: "/supper/前端库/1vueify" },
            { text: "anime.js", link: "/supper/前端库/2anime.js" },
            { text: "js-cookie", link: "/supper/前端库/3js-cookie" },
          ],
        },
        {
          text: "功能",
          collapsed: false,
          items: [
            { text: "小功能汇总1", link: "/supper/功能/1小功能汇总" },
            { text: "小功能汇总2", link: "/supper/功能/2小功能汇总" },
            { text: "小功能汇总3", link: "/supper/功能/3小功能汇总" },
            { text: "ffmpeg-rmtp监控", link: "/supper/功能/4ffmpeg-rmtp监控" },
            { text: "微信支付", link: "/supper/功能/5微信支付" },
            { text: "v-model组件封装", link: "/supper/功能/6v-model组件封装" },
            { text: "深度学习实操", link: "/supper/功能/7深度学习实操" },
            { text: "前端上传下载", link: "/supper/功能/8前端上传下载" },
            { text: "监控停留时间", link: "/supper/功能/9监控停留时间" },
            { text: "数据大屏自适应", link: "/supper/功能/10数据大屏自适应" },
            { text: "拖拽元素", link: "/supper/功能/11拖拽元素" },
            { text: "vue-element-admin", link: "/supper/功能/12vue-element-admin" },
     
          ],
        },
      ],
    },
  },
  // srcExclude: '../../know',
  vite: {
    plugins: [
      pagefindPlugin({
        customSearchQuery: chineseSearchOptimize
      })
    ],
    publicDir: "../public",
    // optimizeDeps: {
    //   entries: '!../../know'
    // },
    build: {
      // outDir: 'aaa',
      // sourcemap: true,
      assetsDir: "public",
    },
    server: {
      host: true,
      // port: 3000,
      // open: true,
      proxy: {
        // '/so': {
        //   target: 'http://139.159.245.209:5000', // 代理接口
        //   changeOrigin: true,
        //   rewrite: (path) => path.replace(/^\/so/, '')
        // }
      },
    },
  },
  vue: {
    template: {
      compilerOptions: {
        // isCustomElement: (tag) => tag.includes('webzen-')
      },
    },
  },
});

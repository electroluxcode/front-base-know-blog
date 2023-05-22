import { defineConfig } from "vitepress";
import { pagefindPlugin, chineseSearchOptimize } from "vitepress-plugin-pagefind";

export default defineConfig({
  outDir: "../docs",
  // 相对路径打包
  // base: './',
  base: "/front-base-know-blog/",
  title: "Electrolux_blog",
  cleanUrls: true,
  lang: "en-US",
  description: "hello world",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: "/sword.svg" }]],
  lastUpdated: true,
  themeConfig: {
    outlineTitle: "目录",
    // lastUpdatedText: 'Updated Date',
    i18nRouting: true,
    logo: "/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "基础", link: "/know/1html" },
      { text: "高级", link: "/supper/基本/index" },
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
            { text: "html(浏览器)", link: "/know/1html" },
            { text: "js基础(1)", link: "/know/2javascript基础" },
            { text: "js基础(2)", link: "/know/3javascript基础" },
            { text: "js基础(3) | 手写题", link: "/know/4javascript手写题" },
            {
              text: "js基础(3) | 代码输出",
              link: "/know/4javascript代码输出题",
            },
            { text: "js基础(4) | es6", link: "/know/5javascript-es6" },
            { text: "TypeScript", link: "/know/6ts" },
            { text: "CSS", link: "/know/7css" },
            { text: "BUG", link: "/know/8bug" },
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
            { text: "ssr", link: "/know/计算机基础/3ssr" },
            { text: "微前端", link: "/know/计算机基础/4微前端" },
            { text: "vue3", link: "/know/计算机基础/5vue3" },
            { text: "nginx", link: "/know/计算机基础/6nginx" },
            { text: "python", link: "/know/计算机基础/7python" },
            { text: "ffmpeg", link: "/know/计算机基础/8ffmpeg" },
            { text: "shell", link: "/know/计算机基础/9shell" },
            { text: "aframe", link: "/know/计算机基础/10aframe" },
            { text: "逆向数据crawl", link: "/know/计算机基础/11逆向数据crawl" },
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
      // "/supper/": [
      //   {
      //     text: "通用",
      //     items: [{ text: "icon", link: "/supper/基本/index" }],
      //   },
      // ],
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

module.exports = {
  base: "./", //build的时候开启
  title: "Electrolux博客",
  description: "",
  theme: 'reco',
  markdown: {
    lineNumbers: true,
  },
  footer: "footer: MIT Licensed | Copyright © 2022-present Electrolux",
  // 配置侧边栏
  themeConfig: {
    sidebarDepth: 4,
    nav: [ // 添加导航栏
      // { text: 'html', link: '/know/1.html.md' },

      // { text: 'js基础', link: '/know/2.javascript基础.md' },
      // { text: 'css', link: '/know/5.css.md' },
      { text: '计算机网络', link: '/know/八股/1.计算机网络.md' },
      {
        text: '常用',
        items: [
          { text: '设计模式 | 算法', link: '/know/7.算法.md', },
          { text: '性能优化', link: "/know/10.性能优化.md" }
        ]
      },
      
    ],
    
    sidebar: [
     
      {
        title: '基础',
        collapsable: false,
        children: [
          // '/know/1.html.md',
          // '/know/2.0javascript基础.md',
          // '/know/2.1.javascript基础.md',
          // '/know/2.2.ts.md',
          // '/know/2.9.javascript代码输出题.md',
          // '/know/3.javascript-es6.md',
          // '/know/4.javascript-手写题.md',
          // '/know/5.css.md',
          '/know/6.bug.md',
          
        ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      // {
      //   title: '八股',
      //   collapsable: false,
      //   children: [
      //     '/know/八股/1.计算机网络.md',
      //     '/know/八股/2.Git.md',
      //   ],
      //   initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      // },
      // {
      //   title: '框架 | 工具',
      //   collapsable: false,
      //   children: [
      //     "/know/框架/1.vue.md",
      //     "/know/框架/2.react.md",
      //     "/know/框架/3.ssr.md",
      //     "/know/框架/4.微前端.md",
      //     "/know/框架/6.nginx.md",
      //     "/know/框架/7.python.md",
      //   ],
      //   initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      // },
      // {
      //   title: '优化 | 工程',
      //   collapsable: false,
      //   children: [
      //     "/know/优化/1.性能优化和安全.md",
      //     "/know/优化/2.webpack.md",
      //     "/know/优化/3.算法.md",
      //     "/know/优化/4.性能优化.md",
      //     "/know/优化/5.组件库构造.md",
      //     "/know/优化/6.webrtc.md",
      //     "/know/优化/7.tensorFlow.md"
      //   ],
      //   initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      // },
    ]
  },

};



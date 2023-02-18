module.exports = {
  base: "/front-base-know-blog/", //build的时候开启
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
      { text: 'html', link: '/know/1.html.md' },

      { text: 'js基础', link: '/know/2.javascript基础.md' },
      { text: 'css', link: '/know/5.css.md' },
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
        children: [
          '/know/1.html.md',
          '/know/2.0javascript基础.md',
          '/know/2.1.javascript基础.md',
          '/know/2.2.ts.md',
          '/know/2.9.javascript代码输出题.md',
          '/know/3.javascript-es6.md',
          '/know/4.javascript-手写题.md',
          '/know/5.css.md',
          '/know/6.webpack.md',
          '/know/7.算法.md',
          "/know/8.vue.md",
          "/know/9.react.md",
          "/know/10.性能优化.md",
          "/know/11.组件库构造.md",
          "/know/12.ssr.md",
          "/know/13.微前端.md",
          "/know/14.vue3.md"
        ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      {
        title: '八股',
        collapsable: false,
        children: [
          '/know/八股/1.计算机网络.md',
          '/know/八股/2.Git.md',
          '/know/八股/3.性能优化和安全.md',

        ],
        initialOpenGroupIndex: 1 // 可选的, 默认值是 0
      },
      
    ]
  },

};



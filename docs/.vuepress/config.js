module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vuepress-studyNote/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    themeConfig: {
      logo: './logo.png',
    },
    nav:[ // 导航栏配置
      // {text: '前端基础', link: '/accumulate/' },
      // {text: '算法题库', link: '/algorithm/'},
      // {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: [
      {
        title: 'JS', 
        children:[
          {
            title: '基础', 
            path: '../JS/基础知识.md',
          },
          {
            title: '常用方法', 
            path: '../JS/常用方法.md',
          },
          {
            title: 'JS-Web', 
            path: '../JS/JS-Web-API.md',
          },
        ]
      },
      {
        title: 'Webpack', 
        path: '../Webpack.md',
      },
      {
        title: '网络原理', 
        path: '../网络原理.md',
      },
      {
        title: '算法', 
        children:[
          {
            title: '算法总结', 
            path: '../算法/算法总结.md',
          },
          {
            title: '字符串', 
            path: '../算法/字符串.md',
          },
          {
            title: '数组', 
            path: '../算法/数组.md',
          },
          {
            title: '链表', 
            path: '../算法/链表.md',
          },
          {
            title: '栈', 
            path: '../算法/栈.md',
          },
          {
            title: '动态规划', 
            path: '../算法/动态规划.md',
          },
          {
            title: '排序', 
            path: '../算法/排序.md',
          },
          {
            title: '最短路径', 
            path: '../算法/最短路径.md',
          },
          {
            title: '广度优先', 
            path: '../算法/广度优先.md',
          },
          {
            title: '牛客总结', 
            path: '../算法/牛客题库总结.md',
          },
        ]
      },
      {
        title: 'React', 
        // path: '../NodeJs/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children:[
          {
            title: '基本使用', 
            path: '../React/基本使用.md',
          },
          {
            title: 'React事件', 
            path: '../React/React事件.md',
          },
          {
            title: 'Redux', 
            path: '../React/Redux.md',
          },
          {
            title: 'Router', 
            path: '../React/React-Router.md',
          },
          {
            title: '高级特性', 
            path: '../React/高级特性.md',
          },
        ]
      },
      {
        title: 'Vue', 
        children: [
          {
            title: '基础', 
            path: '../Vue/基础.md',
          },
          {
            title: '高级特性', 
            path: '../Vue/高级特性.md',
          },
          {
            title: '原理', 
            path: '../Vue/原理.md',
          },
          {
            title: 'Vue3', 
            path: '../Vue/vue3.md',
          },
        ]
      },
      {
        title: 'NodeJs', 
        children: [
          {
            title: '基础概念', 
            path: '../NodeJs/ch01-基础概念.md',
          },
          {
            title: '搭建后台服务', 
            path: '../NodeJs/ch02-搭建后端服务.md',
          },
          {
            title: '数据存储',
            path: '../NodeJs/ch03-数据存储.md',
          },
          {
            title: '登陆',
            path: '../NodeJs/ch04-登陆.md',
          },
          {
            title: '日志',
            path: '../NodeJs/ch05-日志.md',
          },
          {
            title: '安全',
            path: '../NodeJs/ch06-安全.md',
          },
          {
            title: 'express',
            path: '../NodeJs/ch07-express.md',
          },
        ]
      },
    ] 
  },
  plugins: ['@vuepress/back-to-top']
}
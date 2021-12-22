module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: './logo.png' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/vuepress-studyNote', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  themeConfig: {
    themeConfig: {
      logo: './logo.png',
    },
    nav:[ // 导航栏配置
      {text: '前端基础', link: '/accumulate/' },
      {text: '算法题库', link: '/algorithm/'},
      {text: '微博', link: 'https://baidu.com'}      
    ],
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    sidebar: [
      {
        title: 'React', 
        // path: '../NodeJs/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        // collapsable: false, // 可选的, 默认值是 true,
        // sidebarDepth: 1,    // 可选的, 默认值是 1
        children:[
          {
            title: 'JSX基本使用', 
            path: '../React/ch01-JSX基本使用.md',
          },
          {
            title: '事件', 
            path: '../React/ch02-事件.md',
          },
          {
            title: '组件', 
            path: '../React/ch04-组件.md',
          },
          {
            title: 'setState', 
            path: '../React/ch05-setState.md',
          },
          {
            title: '生命周期', 
            path: '../React/生命周期.md',
          },
          {
            title: '高级特性', 
            path: '../React/高级特性.md',
          },
          {
            title: 'Redux', 
            path: '../React/Redux.md',
          },
          {
            title: 'React-router', 
            path: '../React/React-Router.md',
          },
        ]
      },
      {
        title: 'Vue', 
        children: [
          {
            title: '基础概念', 
            path: '../Vue/ch01.md',
          },
          {
            title: '组件使用', 
            path: '../Vue/组件使用.md',
          },
          {
            title: '高级特性', 
            path: '../Vue/高级特性.md',
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
      {
        title: 'Group 2',
        children: [ /* ... */ ],
        initialOpenGroupIndex: -1 // 可选的, 默认值是 0
      }
    ] 
  }
}
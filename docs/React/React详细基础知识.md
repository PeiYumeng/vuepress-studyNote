#### 基础
React是用于构建界面的js库，不用自己操作dom => 是一个将数据渲染为html的js开源库    
原生js直接操作DOM浏览器会进行大量的重绘重排，并且没有组件化复用率低      
React特点：组件化、声明式编码（只是表达一下，react自己做）、RN、虚拟DOM+Diff   
React.render的时候，相当于通过React.createElement生成虚拟DOM，虚拟Dom比真实的属性要少一些，本质就是Object    
- JSX语法规范
1. 定义虚拟DOM时不要写引号
2. 标签中混入JS表达式要用{}
3. 样式的类名制定不要用class用className
4. 内联样式要style={{key:value}}
5. 根标签只能有一个
6. 标签首字母，如果是小写开头转为html同名元素，若无则报错，组件为大写字母开头，大写组件没有定义报错没有引用


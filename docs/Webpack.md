1. 概述
webpack为前端打包构建工具，通过loader转换文件，通过plugin插件扩展webpack功能    
2. 构建过程
①载入 Webpack 核心模块，创建 Compiler 对象；    
②使用 Compiler 对象开始编译整个项目；    
③从入口文件开始，解析模块依赖，形成依赖关系树AST；   
④递归依赖树，将每个模块交给对应的 Loader 处理；   
⑤合并 Loader 处理完的结果，将打包结果输出到 dist 目录    
3. 自定义实现plugin
首先创建一个class，之后使用apply调用，再根据webpack提供的各时期的钩子编写功能     
```js
class RemoveCommentsPlugin {   //清楚打包后文件中的注释
  apply (compiler) { //配置信息
    compiler.hooks.emit.tap('RemoveCommentsPlugin', compilation => {
      // compilation => 可以理解为此次打包的上下文
      for (const name in compilation.assets) {
        if (name.endsWith('.js')) {
          const contents = compilation.assets[name].source()
          const noComments = contents.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComments,
            size: () => noComments.length
          }
        }
      }
    })
  }
}
```
4. 排除依赖包
如果项目中使用React之类的依赖，可以使用CDN引入，在webpack中使用externals排除依赖包    
5. 处理样式
【loader的执行顺序是从后往前的】先识别兼容、再解析为css、再插入到页面中
```js
module:{
module.exports = {
    Plugins:[require(‘autoprefixer’)]   //兼容
}
rules:[
    {
        test:/\.css$/,
        loader:['style-loader','css-loader','postcss-loader']
    }，
    {
        test:/\.less$/,
        loader:['style-loader','css-loader’,'less-loader']
    }
]
```
6. 拆分配置和merge
一般对webpack的配置先定义common一个公共的配置，再定义一个dev的配置，再定义一个线上的配置    
const { smart }  = require(‘web pack-merge’)    
然后在dev或prod的配置文件中需要使用smart引入公共的配置文件    
module.exports = smart(webpackCommonConf,{…})    
7. 启动本地服务
在dev环境下安装webpack-dev-server
```js
devServer:{
    port:8080,
    progress :true, //显示打包的进度条
    contentbase:distPath, //根目录,启动的时候基于哪个目录访问文件
    open:true,    //自动打开浏览器
    compress:true，    //启动gzip压缩
    //设置代理【跨域请求其他接口】
    proxy:{
        //可以将本地 /api/xxx代理到localhost:3000/api/xxx
        ‘api’:’http://localhost:3000',
        ‘api2’:{
            target:’http://localhost:3000’,
            pathRewriter:{
                ‘api2’:''
            }
        }
    }
}
```
备注：
webpack-dev-server是一个小型的node.js Express服务器,它使用webpack-dev-middleware中间件来为通过webpack打包生成的资源文件提供Web服务。它还有一个通过Socket.IO连接着webpack-dev-server服务器的小型运行时程序。webpack-dev-server发送关于编译状态的消息到客户端，客户端根据消息作出响应   
即：为资源文件提供web服务   
- 支持两种模式的刷新：iframe模式和inline模式——代码发生改动的时候iframe会重新加载   
- 支持模块热替换（前端代码变动的时候无需刷新整个页面，只替换变化部分）    
9. 抽离公共代码🔔
不同入口的文件引用相同的模块，可以把公共模块抽离出来单独打包再引用    
第三方模块最好单独打包，如果和业务代码一起打包，可能导致只改了一点点业务代码打包文件的hash值变了重新加载第三方模块，就会慢    
```js
optimization: {
    // 压缩 css
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    // 分割代码块
    splitChunks: {
        chunks: 'all',
        /**
         * initial 入口chunk，对于异步导入的文件不处理
            async 异步chunk，只对异步导入的文件处理
            all 全部chunk
          */

        // 缓存分组
        cacheGroups: {
            // 第三方模块
            vendor: {
                name: 'vendor', // chunk 名称
                priority: 1, // 权限更高，优先抽离，重要！！！
                test: /node_modules/,
                minSize: 0,  // 大小限制
                minChunks: 1  // 最少复用过几次
            },

            // 公共的模块
            common: {
                name: 'common', // chunk 名称
                priority: 0, // 优先级
                minSize: 0,  // 公共模块的大小限制
                minChunks: 2  // 公共模块最少复用过几次
            }
        }
    }
}
```
10. 优化
```js
// 忽略 moment 下的 /locale 目录
new webpack.IgnorePlugin(/\.\/locale/, /moment/),

// happyPack 开启多进程打包
new HappyPack({
    // 用唯一的标识符 id 来代表当前的 HappyPack 是用来处理一类特定的文件
    id: 'babel',
    // 如何处理 .js 文件，用法和 Loader 配置中一样
    loaders: ['babel-loader?cacheDirectory']
}),

// 使用 ParallelUglifyPlugin 并行压缩输出的 JS 代码
new ParallelUglifyPlugin({
    // 传递给 UglifyJS 的参数
    // （还是使用 UglifyJS 压缩，只不过帮助开启了多进程）
    uglifyJS: {
        output: {
            beautify: false, // 最紧凑的输出
            comments: false, // 删除所有的注释
        },
        compress: {
            // 删除所有的 `console` 语句，可以兼容ie浏览器
            drop_console: true,
            // 内嵌定义了但是只用到一次的变量
            collapse_vars: true,
            // 提取出出现多次但是没有定义成变量去引用的静态值
            reduce_vars: true,
        }
    }
})
```
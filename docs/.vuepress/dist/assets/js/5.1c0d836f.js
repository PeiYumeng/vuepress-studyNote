(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{408:function(t,s,e){t.exports=e.p+"assets/img/image-20211217092550541.458b342b.png"},409:function(t,s,e){t.exports=e.p+"assets/img/image-20211217092926104.5b0899a4.png"},410:function(t,s,e){t.exports=e.p+"assets/img/image-20211217093200424.49886ece.png"},411:function(t,s,e){t.exports=e.p+"assets/img/image-20211217093353629.165c7d71.png"},412:function(t,s,e){t.exports=e.p+"assets/img/image-20211217111643615.2fa532ac.png"},451:function(t,s,e){"use strict";e.r(s);var a=e(54),o=Object(a.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ol",[a("li",[t._v("概述")])]),t._v(" "),a("ul",[a("li",[t._v("访问日志【最重要】")]),t._v(" "),a("li",[t._v("自定义日志（包括自定义事件、错误记录等）")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("文件操作——基本Api")])]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:e(408),alt:"image-20211217092550541"}}),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("管道")])]),t._v(" "),a("p",[t._v("IO操作本身很慢，按基本文件操作会导致大文件占用内存太大")]),t._v(" "),a("p",[t._v("管道把接收的数据和输出的地方连接起来，接收一点传出去一点")]),t._v(" "),a("p",[t._v("标准输入输出：process.stdin.pipe(process.stdout)")]),t._v(" "),a("p",[t._v("node接口里面的参数req.res本身就封装了流的特性，可以直接使用pipe管道连接")]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:e(409),alt:"image-20211217092926104"}}),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("node对文件流stream操作")])]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:e(410),alt:"image-20211217093200424"}}),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:e(411),alt:"image-20211217093353629"}}),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[t._v("写日志")])]),t._v(" "),a("p",[t._v("1⃣️创建写文件的流")]),t._v(" "),a("p",[t._v("2⃣️写入内容")]),t._v(" "),a("p",[t._v("3⃣️可以在调接口的位置引用封装好的方法")]),t._v(" "),a("img",{staticStyle:{zoom:"60%"},attrs:{src:e(412),alt:"image-20211217111643615"}}),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[t._v("拆分日志")])]),t._v(" "),a("p",[t._v("实现方式：linux的crontab命令执行定时任务")]),t._v(" "),a("p",[t._v("设置定时任务格式，分钟 小时 日期 月份 commond\t可以用*代替")]),t._v(" "),a("p",[t._v("将日志文件拷贝并重命名为带日期的日志文件名称，然后清空内容继续积累日志")]),t._v(" "),a("p",[t._v("执行文件copy.sh（开头标志一下）【shell脚本】")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('#!/bin/sh\ncd /Users/wfp/Project/video-tutorial/node-tutorial/code-demo/blog-1/logs\ncp access.log $(date +%Y-%m-%d).access.log\necho "" > access.log\n')])])]),a("ol",{attrs:{start:"7"}},[a("li",[t._v("日志分析")])]),t._v(" "),a("p",[t._v("使用nodejs的readline(基于stream效率高)一行行分析日志，因为是按行存储的")])])}),[],!1,null,null,null);s.default=o.exports}}]);
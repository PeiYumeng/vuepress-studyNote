#### 函数组件默认没有 state

1. 不可变值
   不能通过 this.state 直接改变值，需要什么时候要改的时候什么时候使用 setState,并且不能影响之前的值
   conca 等对 tthis.state 操作可以返回一个需要的结果，但是不会对原来的数据有影响变化

#### 其他操作需要先生成一份备份再进行操作

push 会提前对 state 的值进行改变

```js
// 不可变值（函数式编程，纯函数） - 数组
const list5Copy = this.state.list5.slice();
list5Copy.splice(2, 0, 'a'); // 中间插入/删除
this.setState({
    list1: this.state.list1.concat(100), // 追加
    list2: [...this.state.list2, 100], // 追加
    list3: this.state.list3.slice(0, 3), // 截取
    list4: this.state.list4.filter(item => item > 100), // 筛选
    list5: list5Copy, // 其他操作
});
// 注意，不能直接对 this.state.list 进行 push pop splice 等，这样违反不可变值

// 不可变值 - 对象
this.setState({
    obj1: Object.assign({}, this.state.obj1, { a: 100 }),
    obj2: { ...this.state.obj2, a: 100 },
});
// 注意，不能直接对 this.state.obj 进行属性设置，这样违反不可变值
```

2. 可能是异步更新
   setState 之后是异步渲染页面，setState 之后再去拿结果是之前的结果
   可以在回调函数中拿最新的值

```js
this.setState(
    {
        count: this.state.count + 1,
    },
    () => {
        // 联想 Vue $nextTick - DOM
        console.log('count by callback', this.state.count); // 回调函数中可以拿到最新的 state
    }
);
console.log('count', this.state.count); // 异步的，拿不到最新值
```

在 setTimeout 或自定义 DOM 事件中是同步的

```js
bodyClickHandler = () => {
    this.setState({
        count: this.state.count + 1
    })
    console.log('count in body event', this.state.count)
}
componentDidMount() {
    // 自己定义的 DOM 事件，setState 是同步的
    document.body.addEventListener('click', this.bodyClickHandler)
}

setTimeout(() => {
  this.setState({
    count: this.state.count + 1
  })
  console.log('count in setTimeout', this.state.count)
}, 0)
```

componentWillUnmout 中需要及时销毁自定义 DOM 事件 3. 可能会被合并

```js
// 传入对象，会被合并（类似 Object.assign ）。执行结果只一次 +1
this.setState({
    count: this.state.count + 1,
});
this.setState({
    count: this.state.count + 1,
});
this.setState({
    count: this.state.count + 1,
});

// 传入函数，不会被合并。执行结果是 +3
this.setState((prevState, props) => {
    return {
        count: prevState.count + 1,
    };
});
this.setState((prevState, props) => {
    return {
        count: prevState.count + 1,
    };
});
this.setState((prevState, props) => {
    return {
        count: prevState.count + 1,
    };
});
```

异步更新，当时的 state 的值还都没更新
如果传入函数是不会执行合并的（函数是一个个对象本身就不能合并；值一样的就可以合并）

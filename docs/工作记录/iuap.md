# 跳转问题：再次点击超链接无法刷新打开节点数据

💻具体问题：如果一个节点已经打开，再次通过其他节点的超链接跳转，无法再次查询数据

📝节点：异常数据查询

💪解决思路：

A第一次跳转加载B节点，查询接口写在B的ComponentDidMount里，再次跳转url数据带过去但是不走这个生命周期，所以没有再次查数据。==> 写在ComponentWillReceiveProps里

跳转节点后，点击详情再返回list页面，没有缓存之前查询状态 ==> 使用history.go(-1)返回上一页面状态

🎉收获点：

1. 路由组件的props有history\loaction\match，节点跳转时由于props.loaction.search改变，所以会进入ComponentWillReceiveProps生命周期里。如果是自身组件更新不会进入该生命周期。
2. 如果需要返回上一页的状态，可以使用history.go(-1)。如果用replace跳转，则之前页面通过url的查询状态丢失
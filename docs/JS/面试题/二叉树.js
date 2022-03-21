const tree = {
  value:"value",
  left:null,
  right:null
}
//先序遍历:根 左 右
function preorder(root){
  if(!root) return;
  console.log(root.val) //访问
  preorder(root.left)
  preorder(root.right)
}
function preorder(root){
  if(!root) return
  let stack = [root]
  while(stack.length){
    let n = stack.pop()
    console.log(n.val)
    if(n.right) stack.push(n.right)
    if(n.left) stack.push(n.left)
  }
}
//中序遍历：左 根 右
function inorder(root){
  if(!root) return
  inorder(root.left)
  console.log(root.valur)
  inorder(root.right)
}
function inorder(root){
  if(!root) return
  let stack = []
  let p = root
  while(stack.length || p){
    while(p){
      stack.push(p)
      p = p.left
    }
    const n = stack.pop()
    console.log(n.value)
    p = n.right
  }
}
//后序遍历：左 右 根 
function postorder(root){
  if(!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
function postorder(root){
  if(!root) return
  let outputStack = []
  let stack = [root]
  while(stack.length){
    const n = stack.pop()
    outputStack.push(n)
    if(n.left) stack.push(n.left)
    if(n.right) stack.push(n.right)
  }
  while(outputStack.length){
    const n = outputStack.pop()
    console.log(n.value)
  }
}
//应用
const Tree = ()=>{
  const dfs =(n)=>(
    <p classname="treeeNode" title={n.title} key={n.key}>
      {n.title}
      <br/>
      {n.children.map(dfs)}
    </p>
  )
  return <p>{data.map(dfs)}</p>
}
//react组件  treeNode p设置左边距
// dfs = (root) =>(
//   <p className='treeNode' key={root.key}>
//     {root.title}
//     <br/>
//     {root.children.map(element => {
//       return this.dfs(element)
//     })}
//   </p> 
// )
// render(){
//   let {data} = this.state;
//   return (
//     <div>
//       {data.map(this.dfs)}
//     </div>
//   )
// }
//广度优先遍历
const bfs = (root) =>{
  const q = [root]
  while(q.length){
    const n = q.shift()
    console.log(n.value)
    n.children.array.forEach(child => {
      q.push(child)
    });
  }
}
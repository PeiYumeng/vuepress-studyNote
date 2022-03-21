class MyPromise{
  state = 'pending'
  value = undefined //成功的值
  reason = undefined //失败的值
  resolveCallbacks = [] //成功的回调
  rejectCallbacks = []  //失败的回调
  constructor(fn){
    //promise接受一个函数，fn中参数为resolve rejected，执行这两个函数的时候会传入函数
    const resolveHandler = (value) =>{
      if(this.state === 'pending'){
        this.state = 'fulfilled'
        this.value = value
        this.resolveCallbacks.forEach(fn=>fn(value))
      }
    }
    const rejectHandler = (reason) =>{
      if(this.state === 'pending'){
        this.state = 'rejected'
        this.value = this.value
        this.rejectCallbacks.forEach(fn=>fn(value))
      }
    }
    fn(resolveHandler,rejectHandler) // 执行fn的时候决定执行哪个函数
  }
  then(fn1,fn2){
    fn1 = typeof fn1 === 'function' ? fn1 : (v)  => v   //防止传入一个空函数导致链式不下去
    fn2 = typeof fn2 === 'function' ? fn2 : (e)  => e
    if(this.state === 'pending'){
      const p1 = new MyPromise((resolve,reject) => {
          this.resolveCallbacks.push(()=>{
            resolve(fn1(this.value))
          })
          this.rejectCallbacks.push(()=>{
            reject(fn2(this.value))
          })
      })
      return p1 
   }
   if(this.state === 'fulfilled'){
    //每次都会返回一个新的promise
    const p1 = new MyPromise((resolve,reject) => {
        try{
            //执行fn1成功的回调（计算值的）再调用resolve
            const newValue = fn1(this.value)
            resolve(newValue)
        }catch(err){
            reject(err)
        }
    })
    return p1 
    }
    if(this.state === 'rejected'){
        const p1 = new MyPromise((resolve,reject) => {
            try{
                const newReason = fn1(this.value)
                reject(newReason)
            }catch(err){
                reject(err)
            }
        })
        return p1 
    }
  }
}
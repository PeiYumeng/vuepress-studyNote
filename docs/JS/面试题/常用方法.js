//防抖
function debounce(fn,delay = 500){
  let timer = null
  return function(){
    if(timer){
      clearTimeout(timer)
    }else{
      timer = setTimeout(()=>{
        fn.apply(this,arguments)
        timer = null
      },delay)
    }
  }
}
//节流
function thro(fn,delay){
  let timer = null
  return function(){
    if(timer){
      return
    }else{
      timer = setTimeout(()=>{
        fn.apply(this,arguments)
        timer = null
      },delay)
    }
  }
}
//深拷贝
function deepClone(obj){
  if(typeof obj !== 'object'|| obj == null){
    return obj
  }
  let result = obj instanceof Array ? [] : {}
  for(let key in obj){
    if(obj.hasOwnProperty(key)){
      result[key] = deepClone(obj[key])
    }
  }
  return result
} 
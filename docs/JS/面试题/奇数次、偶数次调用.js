function isNumber(){
  let count = 0
  return function(){
    count++
    if(count %2 == 0){
      return '偶数'
    }else{
      return '奇数'
    }
  }
}
const fn = isNumber()
fn()
fn()
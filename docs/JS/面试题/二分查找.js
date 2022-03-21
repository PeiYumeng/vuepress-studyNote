function binarySearch(arr,item){
  let low = 0;
  let high = arr.length - 1;
  while(low<=high){
    const mid = Math.floor((low+high)/2);
    const element = arr[mid];
    if(element<item){
        low=mid+1;
    }else if(element>item){
        high=mid-1;
    }else {
        return mid;
    }
  }
  return -1;
}
console.log(binarySearch([1,2,3,4,5,6],3))
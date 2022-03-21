let testArray = [3, 1, 2, 5, 6, 4];
let quickSort = (array) => {   //就看这个吧
    if (array.length == 1) return array;
    let leftArray = [];
    let rightArray = [];
    let baseDigit = array[0];
    array.forEach(element => {
        if (element < baseDigit) {
            leftArray.push(element);
        } else if (element > baseDigit) {
            rightArray.push(element);
        }
    });
    return quickSort(leftArray).concat(baseDigit, quickSort(rightArray))
};
quickSort(testArray);

// 某乎的方法
let moHu = (arr, begin, end) => {
  //递归出口
      if (begin >= end)
          return;
      var l = begin; // 左指针
      var r = end; //右指针
      var temp = arr[begin]; //基准数，这里取数组第一个数
      //左右指针相遇的时候退出扫描循环
      while (l < r) {
          //右指针从右向左扫描，碰到第一个小于基准数的时候停住
          while (l < r && arr[r] >= temp)
              r--;
          //左指针从左向右扫描，碰到第一个大于基准数的时候停住
          while (l < r && arr[l] <= temp)
              l++;
          //交换左右指针所停位置的数
          [arr[l], arr[r]] = [arr[r], arr[l]];
      }
      //最后交换基准数与指针相遇位置的数
      [arr[begin], arr[l]] = [arr[l], arr[begin]];
      //递归处理左右数组
      moHu(arr, begin, l - 1);
      moHu(arr, l + 1, end);
  };

function quickSort(arr,begin,end){
  if(begin >= end) return
  var left = begin
  var right = end
  var temp = arr[left]
  while(left < right){
    while(left <right && arr[right] >= temp){
      right--
    }
    while(left<right && arr[left] <= temp){
      left++
    }
    [arr[l], arr[r]] = [arr[r], arr[l]];
  }
  //最后交换基准数与指针相遇位置的数
  [arr[begin], arr[l]] = [arr[l], arr[begin]];
  quickSort(arr,begin,left-1)
  quickSort(arr,left+1,end)
}
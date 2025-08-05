// quick sort using recursion

let arr = [15, 6, 3, 17, 12];

function quickSort(arr) {
  let pivot = arr[arr.length - 1];
  if (arr.length <= 1) {
    return arr;
  }
  let rightArr = [];
  let leftArr = [];''
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
        leftArr.push(arr[i])
    }else{
        rightArr.push(arr[i])
    }
  }
  return [...quickSort(leftArr),pivot,...quickSort(rightArr)]
}
console.log(quickSort(arr));

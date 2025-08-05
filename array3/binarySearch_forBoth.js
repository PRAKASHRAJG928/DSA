// Binary search for both order

// let arr = [2,4,6,8,10,15,20,25]
let arr = [23, 20, 19, 27, 15, 10, 8, 6, 3];

function binarySearch(arr, target) {
  let isAssending = false;
  if (arr[0] < arr[arr.length - 1]) {
    isAssending = true;
  }
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (target > arr[mid]) {
      if (isAssending) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (isAssending) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  return -1;
}
console.log(binarySearch(arr, 20));

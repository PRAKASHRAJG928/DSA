// Binary search for decending order

let arr = [20, 19, 27, 15, 10, 8, 6, 3];
function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (target < arr[mid]) {
      start = mid+1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, 3));

//  function to return the array after rotating the array by k times in clock-wise direction.

let arr = [1, 2, 3, 4, 5];
function rotatingArray(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    let ele = arr.pop();
    arr.unshift(ele);
  }
  return arr;
}
console.log(rotatingArray(arr, 3));

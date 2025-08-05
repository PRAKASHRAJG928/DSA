//  function to return the array after shifting the elements clockwise

// let arr = [1, 2, 3, 4, 5];

// function rotatingArray(arr) {
//   let ele = arr[arr.length - 1];
//   for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
//   }
//   arr[0] = ele;
//   return arr;
// }
// console.log(rotatingArray(arr));

let arr = [1, 2, 3, 4, 5];
function rotatingArray(arr, k) {
  k = k % arr.length;
  console.log(k);
  for (let i = 0; i < k; i++) {
    let ele = arr[arr.length - 1];
    for (let j = arr.length - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = ele;
  }
  return arr;
}
console.log(rotatingArray(arr, 3));

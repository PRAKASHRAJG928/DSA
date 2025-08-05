//
let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function printArrEle(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (i % 2 == 0) {
        console.log(arr[i][j]);
      } else {
        console.log(arr[i][arr[i].length - 1 - j]);
      }
    }
  }
}
printArrEle(arr)
// console.log(printArrEle(arr));

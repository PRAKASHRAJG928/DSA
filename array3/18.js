// transpose of a non square matrix
let arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];

//o/p  
// [ [ 1, 3, 5 ], [ 2, 4, 6 ] ]

function arrTranspose(arr) {
  let row = arr.length;
  let col = arr[0].length;
  let newArr = new Array(col).fill(0);
  let res = newArr.map((ele) => new Array(row).fill(0));
//   console.log(res)
  for (let i = 0; i < arr[0].length; i++) {
    for (let j = 0; j < arr.length; j++) {
      res[i][j] = arr[j][i];
    }
  }
  return res;
}
console.log(arrTranspose(arr));

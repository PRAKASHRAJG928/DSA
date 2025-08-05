// rotate the matrix by 90 degree clockwie

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotate90Deg(arr) {
  let m = arr.length;
  let n = arr[0].length;
  let newArr = new Array(m).fill(0);
  let res = newArr.map((ele) => new Array(n).fill(0));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      res[j][arr.length - 1 - i] = arr[i][j];  // for 90 deg
    //   res[arr.length - 1 - j][i] = arr[i][j]; // for -90 deg
    }
  } 
  return res;
}
console.log(rotate90Deg(arr));


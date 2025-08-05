// function to return the sum of elements in a column wise.

let arr = [
  [1, 2, 3, 1],
  [4, 5, 6, 1],
  [7, 8, 9, 1],
];
function sumOfEachEleInCol(arr) {
  let res = [];
  for (let i = 0; i < arr[0].length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum = sum + arr[j][i];
    }
    res.push(sum);
  }
  return res;
}
console.log(sumOfEachEleInCol(arr));


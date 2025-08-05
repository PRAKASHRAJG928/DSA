// function to return the sum of elements in a row wise.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function sumOfEachEleInRow(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[j][i];
    }
    res.push(sum);
  }
  return res;
}
console.log(sumOfEachEleInRow(arr));

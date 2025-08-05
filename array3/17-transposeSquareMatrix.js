// function to transpose a given square matrix

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function transposeOfMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}
console.log(transposeOfMatrix(arr));

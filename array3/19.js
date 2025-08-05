// addition of two matrix

let arr1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let arr2 = [
  [5, 6, 7],
  [8, 10,11],
];

function additionOfMatrix(arr1, arr2) {
  let m1 = arr1.length;
  let n1 = arr1[0].length;
  let m2 = arr2.length;
  let n2 = arr2[0].length;
  if (m1 !== m2 || n1 !== n2) {
    return -1;
  } else {
    let newArr = new Array(m1).fill(0);
    let res = newArr.map((ele) => new Array(n1).fill(0));

    for (let i = 0; i < res.length; i++) {
      for (let j = 0; j < res[i].length; j++) {
        res[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
    return res;
  }
}
console.log(additionOfMatrix(arr1, arr2));

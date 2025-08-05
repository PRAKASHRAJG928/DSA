// function to return the sum of all the elements of the 2D array

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function sumOfArrEle(arr) {
    let sum = 0;
    let res=[]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      sum = sum + arr[i][j]
    }
    
  }
  return sum
}
console.log(sumOfArrEle(arr));

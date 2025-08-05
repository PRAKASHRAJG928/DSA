//  function to print the running sum of the elements of an array

let arr = [2, 3, 7, 10, 1];

function runningSum(arr) {
  let sum = 0;
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    console.log(sum);
  }
}
runningSum(arr);


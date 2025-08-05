// function toreturn sum of all the elements of an array

let arr = [1, 2, 3, 4, 5];
function sumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(sumOfArr(arr));

// function to check if the array is palendrome or not

let arr = [1, 4, 2, 4, 1];

function isArrayPalendrome(arr) {
  for (let i = 0; i < Math.floor(arr.length/2); i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
console.log(isArrayPalendrome(arr));

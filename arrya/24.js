// function to reverse the given array elements.

let arr = [1, 2, 3, 4, 5];

function reverseArr(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i <= j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++
    j--
  }
  return arr;
}
let rev = reverseArr(arr);
console.log(arr)

console.log(arr==rev)
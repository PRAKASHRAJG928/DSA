// function to return the biggest element in an array

let arr = [1, 3, 4, 6, 2];

function biggestEle(arr) {
  let biggest = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > biggest) {
      biggest = arr[i];
    }
  }
  return biggest;
}
console.log(biggestEle(arr));

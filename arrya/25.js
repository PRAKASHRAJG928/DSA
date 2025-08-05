// function to swap the adjacent elements of an array.
let arr = [5, 3, 7, 9, 12];

function adjacentSwap(arr) {
  for (let i = 0; i < arr.length-1; i+=2) {
      
      let temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
  }
  return arr;
}
console.log(adjacentSwap(arr));

// Bubblesort Decending.

let arr = [10,3,40,20,4,17];
function bubbleSortDecending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];    
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortDecending(arr));

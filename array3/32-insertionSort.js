// Insertion sort

let arr = [3, 5, 1, 6, 2];
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let n = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > n) {
      arr[j + 1] = arr[j];
      j--
    }
    arr[j + 1] = n;
  }
  return arr;
}
console.log(insertionSort(arr));

// Linear search

let arr = [1, 3, 4, 2, 5, 5];

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(arr, 5));

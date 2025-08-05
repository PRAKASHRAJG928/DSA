// Given a array , element, and index, write a function to insert the element at the given index.

let arr = [1, 2, 3, 4, 5];

function insertElementAtGivenIndex(arr, index, ele) {
  if (index < 0 || index > arr.length) {
    return "invalide index";
  }
  for (let i = arr.length - 1; i >= index; i--) {
    arr[i + 1] = arr[i];
    // arr[i] = ele;
  }
    arr[index] = ele;
  return arr;
}
console.log(insertElementAtGivenIndex(arr, 5, 10));


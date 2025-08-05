// given a array , index, remove the element at the given index.

let arr = [1, 2, 3, 4, 5];

function removeElement(arr, index) {
  if (index < 0 || index > arr.length - 1) {
    return "invalide index";
  }
  let temp;
  for (let i = index; i < arr.length - 1; i++) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log(temp);
  arr.pop();
  return arr;
}
console.log(removeElement(arr, 1));

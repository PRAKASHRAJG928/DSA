// function to return the middle element in an array.

let arr = [1, 4, 2, 4, 5, 6, 7, 8];

function middleElement(arr) {
  let slow = 0;
  let fast = 0;
  while (fast < arr.length) {
    slow = slow + 1;
    fast = fast + 2;
  }
  return arr[slow-1];
}
console.log(middleElement(arr));

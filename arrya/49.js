// function to return the length of a string which is maxium in the given array of words.

// let arr = ["flower", "flow", "floor", "flew"];
// function maxLengthOfWord() {
//   let max = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > max) {
//       max = arr[i].length;
//     }
//   }
//   return max;
// }
// console.log(maxLengthOfWord(arr));

let arr = ["flower", "flow", "floor", "flew"];
function maxLengthOfWord() {
  let max = -Infinity;
  let ele;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      ele = arr[i];
    }
  }
  return ele;
}
console.log(maxLengthOfWord(arr));

// function to return the first non repeating element in an array

let arr = [2,2,4,5,6];

function firstNonRepeatingEle(arr) {
  let ref = [];
  for (let i = 0; i < arr.length; i++) {
    if (ref.includes(arr[i])) {
      continue;
    } else {
      ref.push(arr[i]);
      let count = 1;

      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count == 1) {
        return arr[i];
      }
    }
  }
  return -1
}
console.log(firstNonRepeatingEle(arr));

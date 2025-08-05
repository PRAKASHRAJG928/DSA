// function to return the max accurance of an element in a array

let arr = [0, 2, 1, 3, 1, 5];

function maxAccuranceOfElement(arr) {
  let ref = [];
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (ref.includes(arr[i])) {
      continue;
    } else {
      ref.push(arr[i]);
      let count = 1;
      for (let j = i + 1; j < arr.langth; j++) {
        if (arr[i] == arr[j]) {
          count++;
        }
      }
      if (count > max) {
        max = count;
      }
    }
  }
  return max;
}
console.log(maxAccuranceOfElement(arr));
// maxAccuranceOfElement(arr);

//function to return the max frequency in a array
let arr = [1, 2, 1, 2, 2, 6, 8, 8, 8];

function maxfrequencyEle() {
  let obj = {};
  let max = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
    }
  }

  return max;
}
console.log(maxfrequencyEle(arr));

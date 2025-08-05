//function to return the max accured frequency element in a array.

// let arr = [1, 2, 1, 2, 2, 6, 8, 8, 8];

// function maxfrequencyEle() {
//   let obj = {};
//   let max = -Infinity;
//   let res;
//   for (let i = 0; i < arr.length; i++) {
//     if (obj[arr[i]]) {
//       obj[arr[i]] = obj[arr[i]] + 1;
//     } else {
//       obj[arr[i]] = 1;
//     }
//     if (obj[arr[i]] > max) {
//       res = arr[i];
//       max = obj[arr[i]];
//     }
//   }

//   return res;
// }
// console.log(maxfrequencyEle(arr));


//! OR

let arr = [1, 2, 1, 2, 2, 6, 8, 8, 8];

function maxfrequencyEle() {
  let obj = {};
  let max = -Infinity;
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  for (let key in obj) {
    if (obj[key] > max) {
      res = key;
      max = obj[key];
    }
  }

  return res;
}
console.log(maxfrequencyEle(arr));



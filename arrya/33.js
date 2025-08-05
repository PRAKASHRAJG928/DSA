//function to return the frequency of all the elemennts in a array
let arr = [1, 2, 1, 2, 2, 6, 8, 8, 8];

function firstNonRepEle() {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}
console.log(firstNonRepEle(arr));

// function to return the running max element in a array

let arr = [1, 7, 5, 6, 10, 12, 4];
// let arr = [2, 3, 7, 10, 1];
function runningMaxEle(arr) {
  let max = -Infinity;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    res.push(max);
  }
  return res
}
console.log(runningMaxEle(arr))
let arr = ["hi","jspiders", "hallo", "welcome", "jspiders"];

function lengthOfStrInArr(arr) {
  let max1 = -Infinity;
  let max2;
  let res1;
  let res2;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max1) {
      max2 = max1;
      max1 = arr[i].length;
      res2 = res1;
      res1 = arr[i];
    }
    // if (arr[max2] < max1 && arr[max2] > arr[i]) {
    //   max2 = arr[i];
    // }
    if (arr[i].length > max2) {
      max2 = arr[i].length;
    }
  }
  return max1;
}
console.log(lengthOfStrInArr(arr));

// function to retun 2 random ele where the 2 random ele is minimum

let arr = [3, 6, 7, 11, 3, 2];

function twominEle(arr) {
  let min = -Infinity;
  let min2;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > min) {
        min2=min
        min = arr[i];
      }
  }
  return [min,min2]
}
console.log(twominEle(arr));

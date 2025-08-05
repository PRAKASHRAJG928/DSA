// function to retun 2 random ele where the 2 random ele is maximum

let arr = [3, 6, 7, 11, 3, 2, 8];

function twoMaxEle(arr) {
  let max = -Infinity;
  let max2;

  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max2=max
        max = arr[i];
      }else if(arr[i]>max2 && arr[i] < max){
        max2=arr[i]
      }
  }
  return [max,max2]
}
console.log(twoMaxEle(arr));

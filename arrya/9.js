// function to return the second max element in a array
let arr = [15,17,16,75,33,75];
function max2Ele(arr) {
  let max1 = -Infinity;
  let max2;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 =max1
      max1 = arr[i]
    }
    else if(arr[i]>max2 && arr[i]!=max1){
        max2 = arr[i]
    }
  }
  return max2;
}
console.log(max2Ele(arr))


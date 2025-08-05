// function to return the second min element in a array
let arr = [15,17,16,75,33,75];
function min2Ele(arr) {
  let min1= Infinity;
  let min2;

  for (let i = 0; i < arr.length; i++) {
 if(arr[i]<min1){
    min2= min1
    min1=arr[i]
 }
 else if(arr[i]<min2 && arr[i]>min1)
    min2= arr[i]
  }
  return min2;
}
console.log(min2Ele(arr))



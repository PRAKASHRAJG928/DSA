// function to return the sum of minimun element and maximum element in a given array

let arr = [7, 3, -2, 8, 2];

function smallestEle(arr) {
  let max = -Infinity;
  let min = +Infinity;

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>max){
        max=arr[i]
    }
    if(arr[i]<min){
        min=arr[i]
    }
  }
 return min+max
}
console.log(smallestEle(arr))
// smallestEle(arr)

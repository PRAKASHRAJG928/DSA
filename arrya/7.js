// function to return the smallest element in an array

let arr = [1, 3, 4, 6, 2];

function smallestEle(arr) {
  let smallest = +Infinity;
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<smallest){
        smallest=arr[i]
    }
  }
  return smallest
}
console.log(smallestEle(arr))
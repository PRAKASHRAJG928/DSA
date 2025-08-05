// function to return the min sum of the 2 random element in an array

let arr = [3, 6, 7, 11, 3, 2];

function minSumRandomEle(arr) {
  let min = Infinity;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        sum = arr[i]+arr[j]
        if(sum<min){
            min = sum
        }
    }
  }
  return min
}
console.log(minSumRandomEle(arr));

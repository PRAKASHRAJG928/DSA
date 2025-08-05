// function to return the running minimum element in a array

// let arr = [1, 7, 5, 6, 10, 12, 4];
let arr = [2, 3, 7, 10, 1];

function runningMinEle(arr) {
  let min = Infinity;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<min){
        min= arr[i]
    }
    res.push(min)
  }
  return res
}
console.log(runningMinEle(arr));

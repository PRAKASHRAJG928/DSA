// function to return the maximum adjacent sum of an elements in a array

let arr=[5,-7,-3,4,1]

// function adjacentSumMax(arr){
//     let sum = -Infinity
//     for(let i= 0; i<arr.length-1;i++){
//        newSum = arr[i]+arr[i+1] 
//        if(newSum>sum){
//         sum=newSum
//        }
//     }
//     return sum
// }
// console.log(adjacentSumMax(arr))


function adjacentSumMin(arr){
    let min = Infinity
    for(let i= 0; i<arr.length-1;i++){
      let sum = arr[i]+arr[i+1] 
       if(sum<min){
        min=sum
       }
    }
    return min
}
console.log(adjacentSumMin(arr))
// function to check if the given array is strictly increasing or decreasing order or not


let arr=[1,2,3,4,5,6,6]
function isIncreasingOrder(arr){
    for(let i = 0; i<arr.length-1;i++){
        if((arr[i] >= arr[i+1])){
            return false
        }
    }
    return true
}
console.log(isIncreasingOrder(arr))



// let arr=[5,4,3,2,1]
// function isDrecresingOrder(arr){
//     for(let i = 0; i<arr.length-1;i++){
//         if((arr[i] <= arr[i+1])){
//             return false
//         }
//     }
//     return true
// }
// console.log(isDrecresingOrder(arr))
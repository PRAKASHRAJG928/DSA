// function to check if the given array is in increasing order or not

let arr=[5,7,10,15]
function isIncreasingOrder(arr){

    for(let i = 0; i<arr.length-1;i++){
        if((arr[i] > arr[i+1])){
            return false
        }
    }
    return true
}

console.log(isIncreasingOrder(arr))
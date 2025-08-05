// function to check if the given array is in decreasing order or not

let arr=[5,40,3,2,1]
function isDecreasingOrder(arr){
    for(let i = 0; i<arr.length-1;i++){
        if((arr[i] < arr[i+1])){
            return false
        }
    }
    return true
}

console.log(isDecreasingOrder(arr))

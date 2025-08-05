// function to return a index at which ascending order of a element breakes

let arr=[1,2,3,4,2,5]
function indexOfBreakelement(arr){

    for(let i = 0; i<arr.length;i++){
        if((arr[i] > arr[i+1])){
            return i+1
        }
    }
    return (arr.length-1)
}

console.log(indexOfBreakelement(arr))


//  function to return the first repeating element in a array

let arr = [2,4,20,12,5,12]

function firstRepeatingEle(){
    for(let i = 0;i<arr.length;i++){
        for(let j= i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                return arr[i]
            }
        }
    }
    return -1
}
console.log(firstRepeatingEle(arr))




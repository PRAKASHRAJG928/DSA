// ! given an arrray remove duplicates
let arr = [1,2,1,1,2,3]

function removeDuplicates(arr) {

    for (let i = 0; i < arr.length; i++) {
     
        for (let j = i + 1; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                for(let k=j;k<arr.length-1;k++){
                    let temp = arr[k]
                    arr[k] = arr[k+1]
                    arr[k+1] = temp;
                }
                arr.pop()
                j--;
            }
        }
    }
    return arr;
}

console.log(removeDuplicates(arr))
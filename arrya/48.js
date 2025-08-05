// given an array of strings return the common prefix from all the strings.
let arr = ["flower", "flow", "floor", "flew"];

function commonPrefix(arr){
    let res =''
    for(let i=0;i<arr[0].length;i++){
        for(let j=1;j<arr.length;j++){
            if(arr[0][i]!==arr[j][i]){
                return res               
            }
        }
        res = res+ arr[0][i]
    }
    return res
}
console.log(commonPrefix(arr))
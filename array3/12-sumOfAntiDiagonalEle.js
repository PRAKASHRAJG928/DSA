// anti diagonal elements

let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]

function sumOfAntiDiagonalEle(arr){
    let sum=0
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            if(i+j==arr.length-1){
                console.log(arr[i][j])
                sum = sum + arr[i][j]
            }
        }
    }
    return sum
}
console.log(sumOfAntiDiagonalEle(arr))
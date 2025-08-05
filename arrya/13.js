// function to return the elements of maximum sum of 2 adjacent elements

let arr= [-5,7,-3,4,-1]

function maxAdjacentElements(arr){
    let e1
    let e2
    let max=-Infinity
    for(let i=0;i<arr.length-1;i++){
        let sum = arr[i]+arr[i+1]
        if(sum>max){
            max=sum
            e1=arr[i]
            e2=arr[i+1]

        }
    }
    return [e1,e2]
}
console.log(maxAdjacentElements(arr))





// function minAdjacentElements(arr){
//     let e1
//     let e2
//     let min=Infinity
//     for(let i=0;i<arr.length-1;i++){
//         let sum = arr[i]+arr[i+1]
//         if(sum<min){
//             min=sum
//             e1=arr[i]
//             e2=arr[i+1]
//         }
//     }
//     return [e1,e2]
// }
// console.log(minAdjacentElements(arr))
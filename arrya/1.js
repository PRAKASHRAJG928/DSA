//  program to print all the elements or an array. forward and backword direction


let arr=[1,2,3,4,5]

// for(let i =0; i<arr.length;i++){
//     console.log(arr[i])
// }
let newArr=[]
for(let i=arr.length-1; i>=0;i--){
    newArr.push(arr[i])
}
console.log(newArr)
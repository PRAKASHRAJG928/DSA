// function to concat 2 array alternatively and return the resultant array.

let arr1 = [1,0,9]
let arr2 = [2,10]

function concatAlternativeEleOfArr(arr1,arr2){
    let res=[]
    let i=0
    let j=0
   while(i<arr1.length || j<arr2.length){
    if(arr1[i]!==undefined){
        res.push(arr1[i])
    }
    if(arr2[j]!==undefined){
        res.push(arr2[j])
    }
    i++;
    j++;
   }
return res
}
console.log(concatAlternativeEleOfArr(arr1,arr2))
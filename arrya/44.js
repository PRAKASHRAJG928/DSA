// given 2 array return the common elements in form or array.

let arr1=[1,2,1,3,5,3]
let arr2=[1,3,5,7,1]

function commonEle(arr1,arr2){
    let res=[]
    let obj =firstNonRepEle(arr1)
    for(let i =0;i<arr2.length;i++){
        if((!obj[arr2[i]]) && !res.includes(arr2[i])){
            res.push(arr2[i])
        }
    }
    return res
}
console.log(commonEle(arr1,arr2))


function firstNonRepEle(arr) { 
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

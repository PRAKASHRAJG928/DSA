// given an multi dimentional array reverse the elements of each row and return that array.

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function reverseArr(arr){
    let i=0
    let j=arr.length-1
    while(i<=j){
        let temp =arr[i]
        arr[i]=arr[j]
        arr[j]=temp
        i++
        j--
    }
    console.log(arr)
}

function reverseTheEle(arr) {
 for(let i=0;i<arr.length;i++){
    reverseArr(arr[i])
 }
  return arr
}
console.log(reverseTheEle(arr));

// function to return the sum of even indexed elements

let arr = [1, -2, -3, 4, 5];
function sumOfEvenIndexedEle(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
   if(i%2 ==0){
    sum =sum + arr[i]
   }
}
  return sum
}
 console.log(sumOfEvenIndexedEle(arr));

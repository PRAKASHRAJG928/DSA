// function to retun the sum of odd numbers

let arr = [1, 2, 3, 4, 5];
function sumOfOddNumbers(arr) {
  let odd = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      odd = odd + arr[i];
    }
  }
  return odd
}
console.log(sumOfOddNumbers(arr))










// function to retun the sum of even numbers

// let arr = [1, 2, 3, 4, 5];
// function sumOfEvenNumbers(arr) {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even = even + arr[i];
//     } else {
//       odd = odd + arr[i];
//     }
//   }
//   return [even, odd];
// }
// let [even, odd] = sumOfEvenNumbers(arr);

// console.log(`even sum: ${even} , odd sum: ${odd}`);

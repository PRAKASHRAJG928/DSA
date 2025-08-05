// function to return the fibonachi elements in form of array

// function fibonachi(n) {
//   let first = 0;
//   let second = 1;
//   let arr = [first, second];
//   for (let i = 0; i < n-2; i++) {
//     sum = first + second;
//     arr.push(sum);
//     first = second;
//     second = sum;
//   }
//   return arr
// }
// console.log(fibonachi(6));

function tibonachi(n) {
  let first = 0;
  let second = 1;
  let third = 1;
  let arr = [first, second, third];
  for (let i = 3; i < n; i++) {
    sum = first + second + third;
    arr.push(sum);
    first = second;
    second = third;
    third = sum;
  }
  return arr;
}
console.log(tibonachi(6));

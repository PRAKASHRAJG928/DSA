// function to return the indexes of the 2 adjacent elements whose sum is equal to the given target
// let arr = [5, 7, 4, 3, 6];
// let target = 9;

// function indexesOfTwoAdjacentEle(arr, target) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] + arr[i + 1] == target) {
//       return [i, i + 1];
//     }
//   }
//   return -1;
// }
// console.log(indexesOfTwoAdjacentEle(arr, target));


let arr = [5, 7, 4, 3, 6];
let target = 9;

function elementsOfTwoAdjacentEle(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + arr[i + 1] == target) {
      return [arr[i], arr[i + 1]];
    }
  }
  return -1;
}
console.log(elementsOfTwoAdjacentEle(arr, target));
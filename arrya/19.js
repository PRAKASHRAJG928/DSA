// function to return the 2 ele of an array where sum of those 2 ele is equal to the target.

let arr = [3, 5, 7, 11, 3, 2];

function twoEleAumEqualToTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let sum = arr[i] + arr[j];
      if (sum == target) {
        return { Element1: arr[i], Element2: arr[j], index1:i, index2:j};
      }
    }
  }
  return -1;
}
console.log(twoEleAumEqualToTarget(arr, 13))


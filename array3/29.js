// given 2 arrays in assending order merge the 2 sorted array in such a way that resultant array is alsosorted.

let arr1 = [5, 12, 13, 17];
let arr2 = [1, 3, 7, 19];

function sort2ArrayByCombiningThem(arr1, arr2) {
  let resArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      resArr.push(arr1[i]);
      i++;
    } else {
      resArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    resArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    resArr.push(arr2[j]);
    j++;
  }

  return resArr;
}

console.log(sort2ArrayByCombiningThem(arr1, arr2));

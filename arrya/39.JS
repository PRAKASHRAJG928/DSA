//  function to return the array after shifting the elements anticlockwise
let arr = [1, 2, 3, 4, 5];

function antiClickShift(arr, k) {
  k = k % arr.length;
  for (let i = 0; i < k; i++) {
    let ele = arr[0];
    for (j = 0; j < arr.length-1 ; j++) {
      arr[j] = arr[j+1];
    }
    arr[arr.length-1]=ele
  }
  return arr
}
console.log(antiClickShift(arr, 3));

// k=1 =>[ 2, 3, 4, 5, 1 ]
// function to return true if there are 3 consiquitive odd numbers in an array else false.

let arr = [1, 2, 3, 5, 9 ,4, 5];

function threeConsicutive(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
        let i1 = arr[i]
        let i2 = arr[i+1]
        let i3 = arr[i+2]
      return [true,i1,i2,i3];
    }
  }
  return false;
}
console.log(threeConsicutive(arr));
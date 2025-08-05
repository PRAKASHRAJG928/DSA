// function to print the sum of elements of the pascle triangle for a given depth n

function sumOfDepthOfGivenPascleTriangle(n) {
  let pascal = [[1], [1, 1]];
  for (let i = 2; i < n; i++) {
    let row = [1];
    let prev = pascal[i - 1];
    for (let j = 0; j < prev.length - 1; j++) {
      let sum = prev[j] + prev[j + 1];
      row.push(sum);
    }
    row.push(1);
    pascal.push(row);
  }
  let arr = pascal[n - 1];
  let sum = arr.reduce((acc, next) => acc + next);

  //   let finalSum = 0;
  //   for (let k = 0; k < pascal[n - 1].length; k++) {
  //     finalSum = finalSum + pascal[n - 1][k];
  //   }

  return sum;
}

console.log(sumOfDepthOfGivenPascleTriangle(4));

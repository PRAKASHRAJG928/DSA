// function to return the greatest common divisor of 2 numbers.

function lcm(a,b) {
  let lcm = (a * b) / gcd(a, b);
  return lcm;
}
console.log(lcm(28,35));

function gcd(num1, num2) {
  let arr1 = divisorArr(num1);
  let arr2 = divisorArr(num2);
  let common = commonEle(arr1, arr2);

  let max = -Infinity;
  for (let i = 0; i < common.length; i++) {
    if (common[i] > max) {
      max = common[i];
    }
  }
  return max;
}
// console.log(gcd(28, 35));

function divisorArr(val) {
  let res = [];
  for (let i = 1; i <= val; i++) {
    if (val % i == 0) {
      res.push(i);
    }
  }
  return res;
}

function commonEle(arr1, arr2) {
  let res = [];
  let obj = firstNonRepEle(arr1);
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]] && !res.includes(arr2[i])) {
      res.push(arr2[i]);
    }
  }
  return res;
}

function firstNonRepEle(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}

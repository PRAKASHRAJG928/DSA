// function to return the difference btw the product and sum of all the elements

let arr = [1, 2, 3,4];
function differenceBtwProductAndSum(arr) {
  let sum = 0;
  let product=1
  for (let i = 0; i <arr.length; i++) {
    sum = sum + arr[i];
    product=product* arr[i]
     
  }
  return product-sum;
}

console.log(differenceBtwProductAndSum(arr));

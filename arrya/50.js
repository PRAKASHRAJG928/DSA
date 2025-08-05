// given an array of denomination representing the available denomination inn an atm, and a targetted amount. wirte a logic to retun a minimum number of notes from the available demonimation.

let arr = [10, 20, 100, 500, 2000];
let target = 1750;
function denomination(arr, target) {
  if (target % 10 == 0) {
    let total = 0;
    let i = arr.length - 1;
  } else {
    console.log("invalid");
  }
}
console.log(denomination(arr, target));

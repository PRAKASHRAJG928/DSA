// function to return the valid length of parenthesis

let str = "{()}{[]()[]}{";

function isValidParanthesis(str) {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
//   let max = -Infinity;
  let stack = [];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "(" || str[i] == "{") {
      let closing = obj[str[i]];
      stack.push(closing);
      count = count + 1;
    } else {
      let ele = stack.pop();
    }
  }
  return count
//   if (stack.length) {
//     return false;
//   } else {
//     return true;
//   }
}
console.log(isValidParanthesis(str));

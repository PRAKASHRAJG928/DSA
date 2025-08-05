// check if combination of paranthesis is valid or not.

let str = "{()[]}";

function isValidParanthesis(str) {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "{" || str[i] == "(" || str[i] == "{") {
      let closing = obj[str[i]];
      stack.push(closing);
    } else {
      let ele = stack.pop();
      if (ele !== str[i]) {
        return false;
      }
    }
  }
  if (stack.length) {
    return false;
  } else {
    return true;
  }
}
console.log(isValidParanthesis(str));

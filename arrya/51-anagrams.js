// function to group the anagrams in a given array of words.
let arr = ["peal", "abc", "leap", "cba", "xyz", "leaf", "feal"];

// function groupAnagrams(arr){
//     let map = {}
//     for(let i=0;i<arr.length;i++){
//         let sorted = arr[i].split('').sort().join('')
//         if(map[sorted]){
//             map[sorted].push(arr[i])
//         }else{
//             map[sorted] = [arr[i]]
//         }
//     }
//     return Object.values(map)
// }
// console.log(groupAnagrams(arr))

function groupAnagrams(arr) {
  let obj = {};
  arr = arr.map((ele) => ele.toLowerCase());
  let res = arr.map((ele) => ele.split("").sort().join(""));
  for (let i = 0; i < res.length; i++) {
    if(obj[res[i]]){
      let previous = obj[res[i]]
      previous.push(arr[i])
      obj[res[i]]=previous
    }
    else{
      obj[res[i]]=arr[i]
    }
  }
  return Object.values(obj)
}
console.log(groupAnagrams(arr))
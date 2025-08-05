// ! function to return the group of anagrams present in an array

let arr = ['peal','abc','xyz','bca','cba','leap','leaf','feal','yxz']

function groupAnagrams(arr){
    let res = arr.map((ele)=>ele.split("").sort().join())

    let obj = {}
    for(let i=0;i<res.length;i++){
        if(obj[res[i]]){
            let prev = obj[res[i]]
            prev.push(arr[i])
            obj[res[i]] = prev
        }else{
            obj[res[i]] = [arr[i]]
        }
    }
    return Object.values(obj)
}

console.log(groupAnagrams(arr))
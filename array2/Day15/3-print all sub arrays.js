// ! write a function to print all the sub arrays of a given array

let arr = ["a", "b", "c", "d", "e", "f"];

function subArray(arr){
 let res =[]
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            res.push((arr.slice(i,j+1)))
        }
    }
    return res;
}

console.log(subArray(arr))


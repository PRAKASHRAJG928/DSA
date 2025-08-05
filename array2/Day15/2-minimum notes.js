// ! find the minimum notes for reaching the given target amount 
let target = 15330
let denominations = [5,10,20,50,100,200,500,2000]

function minimumNotes(arr,target){
    let obj ={}
    for(let i=arr.length-1;i>=0;i--){
        while(target >= arr[i]){
            target-=arr[i]
            if(obj[arr[i]]){
                obj[arr[i]]+=1
            }else{
                obj[arr[i]] = 1
            }
        }
        if(target ==0){
            break;
        }
    }
    if(target>0){
        return `Invalid Target`
    }else{
        return obj;
    }
}

console.log(minimumNotes(denominations,target))

let  numberOfNotes = minimumNotes(denominations,target)
let sum=0
for(key in  numberOfNotes){
    sum+=numberOfNotes[key]
}

console.log(`Number of  notes : ${sum}`)
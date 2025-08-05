// ? write a function to return the no of digit in given number


function numOfDIgit(n){
    let count = 0;
    do{
        count++;
        n=Math.floor(n/10)
    }
    while (n>0)
    return count;
}
console.log(numOfDIgit(12345));






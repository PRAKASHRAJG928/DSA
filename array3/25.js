// function to retrurn the ele of pascale triangle at a given depth n

function eleOfPascleTriangle(n){
    let pascal = [[1],[1,1]]
    for(let i=2;i<n;i++){
        let row=[1]
        let prev = pascal[i-1]
        for(let j=0;j<prev.length-1;j++){
            let sum = prev[j]+prev[j+1]
            row.push(sum)
        }
        row.push(1)
        pascal.push(row)
    }   
    return pascal[n-1]
}
console.log(eleOfPascleTriangle(4))
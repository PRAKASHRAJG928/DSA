// function to print pascle triangle

function pascalTriangle(n){
    let pascal = [[1],[1,1]]
    for(let i =2;i<n;i++){
        let row=[1]
        let prew = pascal[i-1]
        for(let j=0;j<prew.length-1;j++){
            let sum =prew[j]+ prew[j+1]
            row.push(sum)
        
        }
        row.push(1)
        pascal.push(row)
    }
    return pascal
}
console.log(pascalTriangle(4))
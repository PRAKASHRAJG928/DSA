// ? write the function to print only even digit to given number 
// let n =1234

function number(n){
    do{
        let rem = n%10;
        if (rem%2==0){
        console.log(rem);
        }
        n=Math.floor(n/10)
    }while (n>0)
    
    }
 
number(1234)



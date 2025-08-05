class car{
    constructor(model,color,price){
        this.model =model
        this.color =color
        this.price =price
    }
    printDetails(){
        console.log(`model of the car is ${this.model}, color of the car is ${this.color}, price of the car is ${this.price},`)
    }
}

let c1 = new car('xyz','red',1000)
console.log(c1)
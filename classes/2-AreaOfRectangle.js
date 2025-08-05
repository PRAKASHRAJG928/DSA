// write a class called rectangle which is having 2 properties, w and breadth, create the metheds to return area and perimeter

class Rectangle {
  constructor(w, b) {
    this.w = w;
    this.b = b;
  }
  printArea(){
    return this.w * this.b
  }
  printPerimeter(){
    return 2*(this.w + this.b)
  }
}

let r1 = new Rectangle(2,4)
console.log(r1)
console.log(r1.printArea())
console.log(r1.printPerimeter())
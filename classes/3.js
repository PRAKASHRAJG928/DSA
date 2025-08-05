// write a class called Point which is having the cordinates x,y. create a method to calculate the distance from origin and as well as given cordenates.

class Point {
  constructor(x, y,) {
    this.x = x;
    this.y = y;
 
  }
  distanceFromOrigin(){
    return Math.sqrt(this.x**2 + this.y**2)
  }
  distanceFromgivenCordinates(a,b){
    return Math.sqrt((a-this.x)**2 + (b-this.y)**2)
  }
}

let p1 = new Point(2,4)
console.log(p1.distanceFromOrigin())
console.log(p1.distanceFromgivenCordinates(5,4))



// polymorfism
// methods behaving differently when called in inheritance.
// getters and seters in Inneritance are used when we have private variabes
// inheritance

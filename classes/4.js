// 🔷 OOP Concepts in JavaScript:
// - Encapsulation
// - Inheritance
// - Getters and Setters
// - Polymorphism (method overriding)- same method name, different behavior

// Class A: The base class
class A {
  #name = "abc"; // Private field (only accessible inside the class)
  // Getter: allows us to access the private #name outside the class
  get name() {
    return this.#name;
  }
  // Setter: allows us to update the private #name from outside
  set name(a) {
    this.#name = a;
  }
  // Method to demonstrate polymorphism
  demo() {
    console.log("I am calling from class A");
  }
}

class B extends A {  // Class B: Inherits from class A
   age = 20; // Public property

  // Overriding the demo() method from class A
  // This is polymorphism: same method name, different behavior
  demo() {
    console.log("I am calling from class B");
  }
}

class C extends B {
  // Class C: Inherits from class B (multi-level inheritance)
  marks = 90; // Public property

  // Again overriding the demo() method to show polymorphism
  demo() {
    console.log("I am calling from class C");
  }
}

// ✅ Create an object of class C
let obj = new C();

// Accessing the private field #name using getter (from class A)
console.log("Name (from getter):", obj.name); // Output: abc

// Updating the private field #name using setter (from class A)
obj.name = "John";
console.log("Updated Name (from setter):", obj.name); // Output: John

// Accessing other properties from class B and C
console.log("Age (from class B):", obj.age); // Output: 20
console.log("Marks (from class C):", obj.marks); // Output: 90

// Calling the demo() for polymorphism
obj.demo(); // Output: I am calling from class C

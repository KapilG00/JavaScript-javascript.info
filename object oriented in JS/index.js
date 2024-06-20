/*
  OOPS -> Object Oriented Programming.

  In OOPS language prime focus is Object (creation, manipulation, destruction)

  In scripting language (JS) the prime focus is Functions. 

  JS is a FUNCTIONAL Language.
  JS has LEss support of OOPS.


  // Main thing is OOPS and FUNCTIONAL are paradigms (WAY OF LIFE)

  // Main aim of any program (software) is to create Objects and handle them.
  // Objects can be created through OOPS and FUNCTIONAL programming.

  // OOPS: 

  1. Object 
  2. Class 
  3. Inheritance
  4. Polymorphism 
  5. Abstraction 
  6. Encapsulation 
*/

// --------------- Different ways to create object in JavaScript -------------------

// WAY-1: Using simple object literal syntax.

const person1 = {
  name: "Person 1",
  age: 25,
  // Methods
  canWalk: function () {
    console.log("hello I can walk " + this.name);
  },
};

console.log("person 1:", person1);

const person2 = {
  name: "Person 2",
  age: 27,
  // Methods
  canWalk: function () {
    console.log("hello I can walk " + this.name);
  },
};

console.log("person 2:", person2);

// WAY-2: Using class syntax.
// NOTE: Classes in JS are just syntactical sugar. Behind the scenes JS uses constructor functions only.

class Person {
  // OPTIONAL HERE
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.country = "India";
  }

  // METHODS
  canWalk() {
    console.log("hello I can walk" + this.name);
  }
}

const person3 = new Person("Person 3", 27);
console.log("person 3:", person3);

const person4 = new Person("Person 4", 21);
console.log("person 4:", person4);

const person5 = new Person("Person 5", 32);
console.log("person 5:", person5);

const person6 = new Person("Person 6", 24);
console.log("person 6:", person6);

/*
    Comparing person1 (Normal object) vs person3 (class object).
    Only difference is the method canWalk() otherwise EVERYTHING else is same.
  
    canWAlk method -> OWN method/property in person1.
    canWAlk method -> NOT OWN method/property in person3.
*/

// WAY-3: Constructor functions.
// NOTE: Before "class" keyword i.e. (BEFORE ES6) we had constructor functions.

function PersonFunction(name, age) {
  this.name = name;
  this.age = age;
  this.country = "Mumbai";

  this.canWalk = function () {
    console.log("hello I can walk " + this.name);
  };
}

const person7 = new PersonFunction("Person 7", 29);
console.log("person 7:", person7);
const person8 = new PersonFunction("Person 8", 22);
console.log("person 8:", person8);

person5.canWalk();

/*
  Having look at Constructor Function and Classes.
  we can conclude EVERYTHING is same except the methods.

  Methods in constructor function -> Own methods. 
  Methods in class -> Not own methods.
*/

// Now here is the question: Which approach of object creation is better?
// Constructor Function Vs Class Vs Normal Objects?

// Answer:

// Check for the constructor function methods.
const constructorFunctionCanWalkResult = person7.canWalk === person8.canWalk;
console.log(
  "constructorFunctionCanWalkResult:",
  constructorFunctionCanWalkResult
); // false

// Check for the class methods.
const classCanWalkResult1 = person3.canWalk === person4.canWalk;
const classCanWalkResult2 = person5.canWalk === person6.canWalk;

console.log("classCanWalkResults", classCanWalkResult1, classCanWalkResult2); // true true

/*
  In "constructor function" if you create 10000 object then we will have 10000 copies of "canWalk" method also.
  But in "class" if you create 10000 object then we will have 1 copy of "canWalk" method only. 

  Thats IT, CLASSES WON !!!!
*/

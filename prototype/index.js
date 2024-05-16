// 1.
function printSomething() {
    console.log("xaxaxaxaxa");
}

printSomething.val = 322;

printSomething();
console.log(printSomething.val);
console.log(printSomething.prototype);

// 2.
function createUser(name, age) {
    this.name = name
    this.age = age
}

createUser.prototype.updateAge = function () {
    this.age += 2
}

createUser.prototype.printUserDetails = function() {
    console.log(`User's name is ${this.name} and his/her age is ${this.age}`);
}

// We dont use this.
// const user1 = createUser("kapil", 27);
// const user2 = createUser("aniket", 26);

// user1.updateAge();           // It leads to TypeError: Cannot read properties of undefined (reading 'updateAge')
// user1.printUserDetails();    // It leads to TypeError: Cannot read properties of undefined (reading 'printUserDetails')

// To fix above issue we use "new" keyword.
const user1 = new createUser("kapil", 27);
const user2 = new createUser("aniket", 26);

console.log(createUser.prototype);

user1.updateAge();
user1.printUserDetails();

/*
Here what happens behind the scenes when we use "new" keyword.

1. A new object is created: The "new" keyword initiates the creation of a new JS object.
2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
      This means that it has access to properties and methods defined on the constructor's prototype.
3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
      If no explicit return value is specified from the constructor, JS assumes "this" the newly created object, to be the intended return value.
4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (Object, Array, Function),
   the newly created object is returned.
*/

// ---------------- RULES PRECEDENCE ----------------------

/*
  When 2 rules are fighting then the precedence rule comes into play

  new >>>>> explicit binding > implicit binding > default binding.

*/

function Person(name) {
    this.name = name;
    this.sayHello = function() {
      console.log(`Hello, I'm ${this.name}`);
    };
}
  
const person1 = new Person("asd");
const person2 = {
    name: "xaxa"
};

person1.sayHello.call(person2); // Output: Hello, I'm Bob

// This is an example of 'implicit' binding and 'new' fighting, in which 'new' will win according to precedence rule. 
let obj = {
    name: "kapil",
    func: function() {
        this.std = 12,
        console.log(this.name);
    }
}

const object = new obj.func();
console.log(object); 

// -------------------x-x-x-x-x-x-x-x-x--------------------------

// 1.
// const animal = {
//     eats: true
// };

// function Animal(type) {
//     this.type = type;
// }

// function Rabbit(name) {
//     this.name = name;
// }
// console.log("rabbit.prototype:", Rabbit.prototype);
// Rabbit.prototype = animal;
// Rabbit.prototype.constructor = 
// console.log(Rabbit.prototype);
// let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal
// console.log("after:", rabbit);
// console.log(rabbit.eats); // true
  
//
// Parent constructor function
function Animal(name) {
    this.name = name;
}
  
// Adding a method to the parent prototype
Animal.prototype.getName = function() {
    return this.name;
};

// Child constructor function inheriting from Animal
function Dog(name, breed) {
    // Call the parent constructor function with the child's context
    Animal.call(this, name);
    this.breed = breed;
}

const animal = new Animal("Generic Animal");
console.log("animal_obj:", animal);

// Setting up inheritance
console.log("proto_animal:", Animal.prototype);

const dog = new Dog("Buddy", "Labrador");
console.log("dog_obj:", dog);
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// Adding a method to the child prototype
// Dog.prototype.getBreed = function() {
//     return this.breed;
// };

// // Creating instances of parent and child
// // const animal = new Animal("Generic Animal");
// const dog = new Dog("Buddy", "Labrador");

// // console.log(animal.getName()); // Output: Generic Animal
// console.log(dog.getName());    // Output: Buddy
// console.log(dog.getBreed());


let obj11 = Object.create(null);
console.log(obj11); // -> not found

let obj12 = {}
console.log(obj12); // Object -> null
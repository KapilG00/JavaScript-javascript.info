// 1.
function User(name, age) {
    this.name = name
    this.age = age

    return this  // we dont need to return "this" if we are using "new" keyword.
}

const user = User("kapil", 28);
console.log(user);

const user2 = User("shubham", 26);

const user3 = new User("aniket", 28);
console.log(user3);

const user4 = new User("anirudh", 28);
console.log(user4);

const user5 = new User("shreyas", 28);
console.log(user5.constructor);

// 2. Implementing inheritance using constructor function.
function Animal(name) {
    console.log("this in animal:", this);
    this.name = name;
}

// Animal.prototype.sayName = function() {
//     console.log("My name is " + this.name);
// };

console.log("animal proto:", Animal.prototype);

animal = new Animal("anmia1")
console.log("animal:", animal);

function Dog(name, breed) {
    console.log("this in dog:", this);
    Animal.call(this, name); // Call the parent constructor with the current context -> {}
    this.breed = breed;
}

// Dog.prototype = Object.create(Animal.prototype); // Set Dog's prototype to an instance of Animal.
// Dog.prototype.constructor = Dog; // Set the constructor property back to Dog.

// console.log("dog proto before:", Dog.prototype);

// Dog.prototype.bark = function() {
//     console.log("Woof!");
// };

console.log("dog proto after:", Dog.prototype);

const myDog = new Dog("Max", "Labrador");
console.log("dog:", myDog);
// myDog.sayName(); // Output: My name is Max
// myDog.bark();    // Output: Woof!

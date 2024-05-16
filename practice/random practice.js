// 1.
// const num = [1, 2, 3];
// console.log(num["0"]);
// console.log(num[0]);
// console.log();

// // 2.
async function check() {
    await Promise.resolve(console.log(1));
    console.log(2);
}
console.log(3);
check();
console.log(4);


// // 3.
// console.log();
// const obj = {
//     "1": "a",
//     1: "b",
//     [1]: "c"
// };
// console.log(obj["1"]);

// 4.
// f(); // ReferenceError: f is not defined.
// {
//     // f(); // ReferenceError: Cannot access 'f' before initialization.
//     const f = () => {
//         console.log("asd");
//     }
//     f(); // This will work.
// }
// f(); // ReferenceError: f is not defined.


// // f(); // TypeError: f is not a function.
// {
//     // f(); // This will work.
//     function f() {
//         console.log("asd");
//     }
//     f(); // This will work.
// }

// // f(); // This will work.

// ------------------------------------ x-x-x-x-x-x-x-x-x ----------------------------------------------

// 1.
const myUser = {
    name: "sharon",
    age: 27,
    printAge: function () {
        console.log(this.age);
    },
    printName: function () {
        console.log(this.name);
    }
}

console.dir(myUser)
console.log(myUser.__proto__); // it doesn't return "myUser" prototype.
console.log("myUser:", myUser);
myUser.printAge();
myUser.printName();

// 2. Before ES6 (i.e. before "class" keyword) we had constructor functions.
function User1(name, age) {
    this.name = name;
    this.age = age;

    this.printAge = function () {
        console.log(this.age);
    }

    this.printName = function () {
        console.log(this.name);
    }
}

const user1 = new User1("kapil", 28);
console.log(User1.prototype.__proto__);
console.log("user1", user1);
user1.printAge();
user1.printName();

// 3.
class User2 {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printAge() {
        console.log(this.age);
    }

    printName() {
        console.log(this.name);
    }
}

user2 = new User2("utkarsh", 27);
console.log("user2:", user2);
user2.printAge();
user2.printName();

//
function sum(num1, num2) {
    "use strict";
    console.log("before args:", arguments);
    // num1 = 11;
    // num2 = 22;
    arguments[0] = 11;
    arguments[1] = 22;
    console.log("after args:", arguments);
    // return arguments[0] + arguments[1];
    return num1 + num2;
}
console.log("sum is:", sum(1, 3));

//
const res1 = [] + {};
console.log("res1:", res1);

const res2 = {} + [];
console.log("res2:", res2);
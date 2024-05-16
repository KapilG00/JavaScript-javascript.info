// 1.
let a = 10;
{
    // console.log(a);  // It gives ReferenceError. Since "a" is in Temporal Dead Zone.
    let a = 20;
    console.log(a);
}
console.log(a);

// 2.
console.log("b3:", b);
{
    var b = 30;
    {
        // console.log(b);  // It gives ReferenceError. Since "b" is in Temporal Dead Zone.
        let b = 40;  
        console.log("b1:", b);
    }
    b = 20;
    console.log("b2:", b);
}
console.log("b4:", b);

// 3.
if ([]) {
    console.log("hello");
} else {
    console.log("bye");
}

// 4.
console.log(1 !== true);
console.log(1 != true);
console.log(NaN !== NaN);

// 5. Short circuit evaluation.

// for logical OR (||).
// if left operand is truthy then return LHS without evaluating RHS.
// if left operand is falsy then return RHS. Both LHS and RHS will get evaluated.

// for logical AND (&&).
// if left operand is truthy then return RHS. Both LHS and RHS will get evaluated.
// if left operand is falsy then return LHS without evaluating RHS.

// for nullish coalescing (??).
// if left operand is null or undefined then return RHS. Both LHS and RHS will get evaluated.
// if left operand is not null or undefined then return LHS without evaluating RHS.

// List of falsy values in JS.
// 0, -0, 0, NaN, false, null, undefined.

// Rest of the values are truthy values in JS.

function left() {
    console.log("left");
    return false;
}

function right() {
    console.log("right");
    return false;
}

left() || right();
// left() && right();
// left() ?? right();

// 6.
greet("John");

var greet = (name) => {
    console.log("Good day", name);
}

function greet(name) {
    console.log("Hello", name);
}

greet("John");

// 7.
function manipulateArray(arr) {
    arr.push(5);
    arr = [1];
    return arr;
}

let list = [1,2,3,4];
manipulateArray(list);
console.log("list1:", list);

list = manipulateArray(list);
console.log("list2:", list);

// 8.
const user1 = {
    username: "val-thor",
    followers: 0
};

const user2 = user1;
user2.followers = user1.followers++;

console.log(user1.followers);
console.log(user2.followers);

// let z = 1;
// z++;
// console.log("z is:", z);

// 9.
let c = new Number("1");
let d  = Number("1");
console.log(c, typeof c);
console.log(d, typeof d);

// 10.
const greeting = "hello";
greeting.length = 10;          // Strings are immutable in JS.
console.log(greeting.length);
console.log(greeting);

// 11.
function counter() {
    let count = 0;
    return () => {
        return ++count;
    };
}

let ct = counter();
console.log(ct());
console.log(ct());
console.log(ct());
console.log(ct());

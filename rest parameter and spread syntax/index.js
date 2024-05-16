// Rest parameters.

// Here, 1 gets passed to "a" and 2 gets passed to "b", rest of the arguments are ignored.
function sum(a, b) {
  return a + b;
}

console.log(sum(1, 2, 3, 4, 5));

// To gather all arguments into array args we use "..." syntax to use rest operator:
function sumAll(...args) {
  // args is the name for the array.
  let sum = 0;

  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1)); // 1
console.log(sumAll(1, 2)); // 3
console.log(sumAll(1, 2, 3)); // 6

// Here, "Julius" gets passed to firstName parameter, "Caesar" gets passed to lastName parameter
// and rest of the arguments gets passed to titles parameter.
function showName(firstName, lastName, ...titles) {
  console.log(firstName + " " + lastName); // Julius Caesar

  // the rest go into titles array
  // i.e. titles = ["Consul", "Imperator"]
  console.log(titles[0]); // Consul
  console.log(titles[1]); // Imperator
  console.log(titles.length); // 2
}

showName("Julius", "Caesar", "Consul", "Imperator");

// NOTE: The rest parameters must be at the end.
//       The rest parameters gather all remaining arguments, so the following does not make sense and causes an error:

// function f(arg1, ...rest, arg2) {
//     // It leads to error.
// }

// "arguments" variable.
// There is also a special array-like object named "arguments" that contains all arguments by their index.
// arguments is both array-like and iterable, it’s not an array.
// It does not support array methods, so we can’t call arguments.map(...)
function showName() {
  console.log(arguments.length);
  console.log(arguments[0]);
  console.log(arguments[1]);

  // it's iterable
  // for(let arg of arguments) console.log(arg);
}

// shows: 2, Julius, Caesar
showName("Julius", "Caesar");

// shows: 1, Ilya, undefined (no second argument)
showName("Ilya");

// NOTE: Arrow functions do not have "arguments"
//       If we access the arguments object from an arrow function, it takes them from the outer “normal” function.

function f() {
  const showArg = () => console.log(arguments[0]);
  showArg();
}

f(1); // 1
// As we remember, arrow functions don’t have their own this. Now we know they don’t have the special "arguments" object either.

// Spread syntax.
// spread (...) syntax turns array into a list of arguments.

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// Spread syntax can be used to merge arrays.
let arr3 = [3, 5, 1];
let arr4 = [8, 9, 15];

let merged = [0, ...arr3, 2, ...arr4];

console.log(merged);

// Spread syntax to turn the string into array of characters.
let str = "Hello";

console.log([...str]);

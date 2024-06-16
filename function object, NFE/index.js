// Function object, NFE

/*
Every value in JavaScript has a type.
A good way to imagine functions is as callable “action objects”.
We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.
*/

// ---------------------------------- 1. The “name” property -----------------------------------

/*
1.1 Function objects contain some useable properties.
1.2 For instance, a function’s name is accessible as the “name” property.
*/

function sayHi1() {
  console.log("Hi");
}

console.log(sayHi1.name); // sayHi1

// 1.3 It also assigns the correct name to a function even if it’s created without one,
//     and then immediately assigned.
let sayHi2 = function () {
  console.log("Hi");
};

console.log(sayHi2.name); // sayHi2

// 1.4 It also works if the assignment is done via a default value.
//     Here, the default value is "sayHi3".
function f(sayHi3 = function () {}) {
  console.log(sayHi3.name); // sayHi3
}

f();

/*
1.5 In the specification, this feature is called a “contextual name”.
1.6 If the function does not provide one, then in an assignment it is figured out from the context.
*/

// 1.7 Object methods have names too.
let user = {
  sayHi4() {
    // ...
  },

  sayBye: function () {
    // ...
  },
};

console.log(user.sayHi4.name); // sayHi4
console.log(user.sayBye.name); // sayBye

/*
1.8 There’s no magic though. There are cases when there’s no way to figure out the right "name".
1.9 In that case, the "name" property is empty.
*/

// Function created inside array.
let arr = [function () {}];

console.log(arr[0].name); // <empty string>
// The engine has no way to set up the right name, so there is none.

// ------------------------------------ 2. The “length” property ---------------------------------------

// There is another built-in property “length” that returns the number of function parameters.
function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2  // Here we can see that rest parameters are not counted.

// ----------------------------------- 3. Named Function Expression ------------------------------------

// 3.1 Named Function Expression, or NFE, is a term for Function Expressions that have a name.

//
let sayHi5 = function (who) {
  console.log(`Hello, ${who}`);
};

//
let sayHi6 = function func(who) {
  console.log(`Hello, ${who}`);
};

/*
3.2 Did we achieve anything here? What’s the purpose of that additional "func" name?
3.3 First let’s note, that we still have a Function Expression.
    Adding the name "func" after function did not make it a Function Declaration,
    because it is still created as a part of an assignment expression.
3.4 Adding such a name also did not break anything.
3.5 The function is still available as sayHi():
*/

/*
3.6 There are two special things about the name "func", that are the reasons for it:

    3.6.1 It allows the function to reference itself internally.
    3.6.2 It is not visible outside of the function.
*/

// 3.7 For instance, the function "sayHi" below calls itself again with "Guest" if no who is provided.

let sayHi7 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // use "func" to re-call itself
  }
};

sayHi7(); // Hello, Guest

// But this won't work:
// func(); // Error, "func" is not defined (not visible outside of the function)

/*
3.8 Why do we use "func"? Maybe just use "sayHi" for the nested call?
3.9 Actually, in most cases we can.
*/

let sayHi8 = function (who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    sayHi8("Guest");
  }
};

/*
3.10 The problem with that code is that "sayHi" may change in the outer code.
3.11 If the function gets assigned to another variable instead, the code will start to give errors.
*/

let sayHi9 = function (who) {
  console.log("inside sayHi9");
  if (who) {
    console.log("inside if");
    console.log(`Hello, ${who}`);
  } else {
    console.log("inside else");
    sayHi9("Guest"); // Error: "sayHi" is not a function
  }
};

let welcome1 = sayHi9;
sayHi9 = null;

welcome1(); // Error, the nested sayHi call doesn't work any more!

/*
3.12 That happens because the function takes sayHi from its outer lexical environment.
     There’s no local sayHi, so the outer variable is used. And at the moment of the call that outer sayHi is null.
3.13 The optional name which we can put into the Function Expression is meant to solve exactly these kinds of problems.
*/

// Fixed code.
let sayHi10 = function func(who) {
  if (who) {
    console.log(`Hello, ${who}`);
  } else {
    func("Guest"); // Now all fine
  }
};

let welcome2 = sayHi10;
sayHi10 = null;

welcome2(); // Hello, Guest (nested call works)

/*
3.14 Now it works, because the name "func" is function-local. It is not taken from outside (and not visible there).
     The specification guarantees that it will always reference the current function.

3.15 The outer code still has its variable "sayHi" or "welcome". And "func" is an “internal function name”,
     the way for the function to can call itself reliably.
*/

/*
NOTE: 1.There’s no such thing for Function Declaration.
      2.The “internal name” feature described here is only available for Function Expressions,
        not for Function Declarations. For Function Declarations, there is no syntax for adding an “internal” name.
      3.Sometimes, when we need a reliable internal name, it’s the reason to rewrite a Function Declaration to Named Function Expression form.
*/

// Function statement aka Function declaration.
function a() {
    console.log("function statement/function declaration");
}
a();

// Function expression.
// Here, function behaves like a value.
var b = function () {
    console.log("function expression");
}
b();

// Anonymous function.
// It leads to SyntaxError: Function statements require a function name.
// These type of functions do not have their own identity.
// function () {
//     console.log("anonymous function");
// }

// Named function expression.
var d = function c() {
    console.log("named function expression");
    console.log(c);  // This will work.
}
d();
// c(); // It leads to ReferenceError: c is not defined.
// Because 'c' is present inside local memory space and not in global memory space and we are calling 'c' in global memory space at line no. 27.

// First class functions.
// 1.
var e = function (func) {
    console.log("first class function example 1");
    func();
}

e(function () {
    console.log("passing function as an argument example 1.")
});

// 2.
var f = function (func) {
    console.log("first class function example 2");
    func();
}

function g() {
    console.log("passing function as an argument example 2.")
}

f(g);

// 3.
var h = function () {
    console.log("first class function example 3");
    return function () {
        console.log("returning function from another function.")
    };
}
var func = h();
func();
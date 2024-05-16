// let and const declarations are hoisted.

// This will not work and it gives a ReferenceError: cannot access 'a' before initialization.
// console.log(a);
// let a = 10;

// This will not work and it gives a ReferenceError: cannot access 'b' before initialization.
// console.log(b);
// const b = 10;

// This will work, because of hoisting and it is present inside global object i.e. 'window'.
console.log(b);
var b = 10;

// It gives SyntaxError as we cannot re-declare same 'let' variable with 'let' variable. It doesn't even executes line no 8.
// console.log("syntax error")
// let c = 20;
// let c = 30;

// It gives SyntaxError as we cannot re-declare same 'let' variable with 'var' variable. It doesn't even executes line no 13.
// console.log("syntax error")
// let d = 40;
// var d = 50;

// It gives SyntaxError as we cannot re-declare same 'let' variable with 'const' variable. It doesn't even executes line no 18.
// console.log("syntax error")
// let e = 60;
// const e = 70;

// It gives SyntaxError as we cannot re-declare same 'const' variable with 'const' variable. It doesn't even executes line no 23.
// console.log("syntax error")
// const f = 80;
// const f = 90;

// It gives SyntaxError as we cannot re-declare same 'const' variable with 'let' variable. It doesn't even executes line no 28.
// console.log("syntax error")
// const g = 100;
// let g = 110;

// It gives SyntaxError as we cannot re-declare same 'const' variable with 'var' variable. It doesn't even executes line no 33.
// console.log("syntax error")
// const h = 120;
// var h = 130;

// It will work in case of both variable of type 'var'.
console.log("It works!!")
var i = 140;
var i = 150;

// It gives SyntaxError as we cannot re-declare same 'var' variable with 'let' variable. It doesn't even executes line no 43.
// console.log("syntax error")
// var j = 160;
// let j = 170;

// It gives SyntaxError as we cannot re-declare same 'var' variable with 'const' variable. It doesn't even executes line no 48.
// console.log("syntax error")
// var k = 180;
// const k = 190;

// This will work.
var l;
l = 200;

// This will work.
let m;
m = 210;

// This will not work.
// const n;
// n = 220;

// This will work.
const o = 230;

// This will not work and throws a TypeError: Assignment to constant variable.
// const p = 240;
// p = 250;

// This will work.
let q = 240;
q = 250;

// This will work.
var r = 260;
r = 270;
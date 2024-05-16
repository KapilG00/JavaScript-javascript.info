// Number.

let num = 10;
// 1.
let strNum = String(num);
console.log(strNum); // "10"
console.log(typeof strNum); // string
console.log();

// 2.
let boolNum = Boolean(num);
console.log(boolNum); // true
console.log(typeof boolNum); // boolean
console.log();

// String.

let str = "asd";
// 1.
let numStr = Number(str);
console.log(numStr); // NaN
console.log(typeof numStr); // number
console.log();

// 2.
let boolStr = Boolean(str);
console.log(boolStr); // true
console.log(typeof boolStr); // boolean
console.log();

// Boolean.

let bool = true;
// 1.
let numBool = Number(bool);
console.log(numBool); // 1
console.log(typeof numBool); // number
console.log();

let strBool = String(bool);
console.log(strBool); // "true"
console.log(typeof strBool); // string
console.log();

// undefined. (It is a reserved keyword by JS)

let ud = undefined;
// 1.
let numUd = Number(ud);
console.log(numUd); // NaN
console.log(typeof numUd); // number
console.log();

// 2.
let strUd = String(ud);
console.log(strUd); // "undefined"
console.log(typeof strUd); // string
console.log();

// 3.
let boolUd = Boolean(ud);
console.log(boolUd); // false
console.log(typeof boolUd); // boolean
console.log();

// null.

let nl = null;
// 1.
let numNl = Number(nl);
console.log(numNl); // 0
console.log(typeof numNl); // number
console.log();

// 2.
let strNl = String(nl);
console.log(strNl); // "null"
console.log(typeof strNl); // string
console.log();

// 3.
let boolNl = Boolean(nl);
console.log(boolNl); // false
console.log(typeof boolNl); // boolean
console.log();

// NaN.

let na = NaN;
// 1.
let numNa = Number(na);
console.log(numNa); // NaN
console.log(typeof numNa); // number
console.log();

// 2.
let strNa = String(na);
console.log(strNa); // "NaN"
console.log(typeof strNa); // string
console.log();

// 3.
let boolNa = Boolean(na);
console.log(boolNa); // false
console.log(typeof boolNa); // boolean
console.log();

console.log(19 % 3);
console.log(10 == 3);
console.log(10 !== "10");
console.log(2 < "10");
console.log("5" > 2);
console.log((false && true) || false);
console.log();

let val = null;
console.log(val, typeof val);

// Terms: “unary”, “binary”, “operand”.

// unary operator: An operator is unary if it has a single operand.
let x1 = 322;
x1 = -x1;
console.log(x1); // -322

// binary operator: An operator is binary if it has two operands.
let x2 = 1;
let y1 = 3;
console.log(y1 - x2); // 2

// String concatenation with binary "+".
let s = "my" + "string";
console.log(s); // "mystring"

// Note: If any of the operands is a string, then the other one is converted to a string too.
console.log("1" + 2); // "12"
console.log(2 + "1"); // "21"

console.log(2 + 2 + "1"); // "41" not "221"

console.log("1" + 2 + 2); // "122" and not "14"

// The binary "+" is the only operator that supports strings in such a way.
// Other arithmetic operators work only with numbers and always convert their operands to numbers.
console.log(6 - "2"); // 4, converts '2' to a number.
console.log("6" / "2"); // 3, converts both operands to numbers.

// Numeric conversion, unary "+".
// The unary plus or, in other words, the plus operator "+" applied to a single value, doesn’t do anything to numbers.
// But if the operand is not a number, the unary plus converts it into a number.
let x3 = 1;
console.log(+x3); // 1

let y2 = -2;
console.log(+y2); // -2

// Converts non-numbers.
// It actually does the same thing as Number(...), but is shorter.
console.log(+true); // 1
console.log(+""); // 0
console.log(+[]); // 0
console.log(+{}); // NaN
console.log(+function () {}); // NaN

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus.
console.log(+apples + +oranges); // 2 + 3

// Operator precedence.
// If an expression has more than one operator,
// the execution order is defined by their precedence, or, in other words, the default priority order of operators.

// There are many operators in JavaScript. Every operator has a corresponding precedence number.
// The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.

// Assignment.
// "=" -> precedence number is 2.

const x4 = 2 * 2 + 1;
console.log(x4); // 5

// Assignment = returns a value.
// All operators in JavaScript return a value. That’s obvious for + and -, but also true for =.
// The call x = value writes the value into x and then returns it.
let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log(a); // 3
console.log(c); // 0

// Chaining assignments.
let a1, b1, c1;

a1 = b1 = c1 = 2 + 2;

console.log(a1); // 4
console.log(b1); // 4
console.log(c1); // 4

// Modify-in-place.
let n1 = 2;
n1 = n1 + 5;
n1 = n1 * 2;
console.log(n1); // 14

let n2 = 2;
n2 += 5; // now n2 = 7 (same as n2= n2 + 5)
n2 *= 2; // now n2 = 14 (same as n2 = n2 * 2)
console.log(n2); // 14

// Increment/decrement.
let counter1 = 2;
counter1++; // works the same as counter = counter + 1, but is shorter
console.log(counter1); // 3

let counter2 = 2;
counter2--; // works the same as counter = counter - 1, but is shorter
console.log(counter2); // 1

// NOTE: Increment/decrement can only be applied to variables. Trying to use it on a value like 5++ will give an error.

let counter3 = 1;
let val1 = ++counter3; // (*)
console.log(val1); // 2

let counter4 = 1;
let val2 = counter4++; // (*) changed ++counter to counter++
console.log(val2); // 1

// Increment/decrement among other operators
// The operators ++/-- can be used inside expressions as well. Their precedence is higher than most other arithmetical operations.

let counter5 = 1;
console.log(2 * ++counter5); // 4

let counter6 = 1;
console.log(2 * counter6++); // 2

// Comma.
// The comma operator allows us to evaluate several expressions, dividing them with a comma ",".
// Each of them is evaluated but only the result of the last one is returned.
let a2 = (1 + 2, 3 + 4);
console.log(a2); // 7

// Nullish coalescing operator '??'

// 1.
// The nullish coalescing operator is written as two question marks ??.
// As it treats null and undefined similarly, we’ll use a special term here, in this article.
// For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

// The result of a ?? b is:
// if a is defined, then a,
// if a isn’t defined, then b.

// In other words, ?? returns the first argument if it’s not null/undefined. Otherwise, the second one.

// The common use case for ?? is to provide a default value.

let user;
console.log(user ?? "Anonymous");

let firstName1 = null;
let lastName1 = null;
let nickName1 = "Supercoder1";

// shows the first defined value:
console.log(firstName1 ?? lastName1 ?? nickName1 ?? "Anonymous"); // Supercoder1

// 2. Comparison with ||
let firstName2 = null;
let lastName2 = null;
let nickName2 = "Supercoder2";

// shows the first truthy value:
console.log(firstName2 || lastName2 || nickName2 || "Anonymous"); // Supercoder2

// The important difference between them is that:
// || returns the first truthy value.
// ?? returns the first defined value.

// Precedence.
// The precedence of the ?? operator is the same as ||.

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);
console.log(area); // 5000

// Using ?? with && or ||
// Due to safety reasons, JavaScript forbids using ?? together with && and || operators,
// unless the precedence is explicitly specified with parentheses.

// let x = 1 && 2 ?? 3; // Syntax error

// Use explicit parentheses to work around it:

let x = (1 && 2) ?? 3; // Works
console.log(x); // 2

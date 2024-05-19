// String comparison.

// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.
// In other words, strings are compared letter-by-letter.

console.log("Z" > "A"); // true
console.log("Glow" > "Glee"); // true
console.log("Bee" > "Be"); // true

// Algorithm for string comparison:

// 1. Compare the first character of both strings.
// 2. If the first character from the first string is greater (or less) than the other string’s,
//    then the first string is greater (or less) than the second. We’re done.
// 3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// 4. Repeat until the end of either string.
// 5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.

// Comparison of different types.

// JavaScript converts the values to numbers.
console.log("2" > 1); // true, string '2' becomes a number 2.
console.log("01" == 1); // true, string '01' becomes a number 1.

// For boolean values, true becomes 1 and false becomes 0.
console.log(true == 1); // true
console.log(false == 0); // true

// A funny consequence.
let a = 0;
console.log(Boolean(a)); // false

let b = "0";
console.log(Boolean(b)); // true

console.log(a == b); // true

// Strict equality.

// A regular equality check "==" has a problem. It cannot differentiate 0 from false.
console.log(0 == false); // true

// The same thing happens with an empty string
console.log("" == false); // true

console.log(0 === false); // false, because the types are different.

// Comparison with null and undefined.

// For a strict equality check ===
console.log(null === undefined); // false

// For a non-strict check ==
console.log(null == undefined); // true

// For maths and other comparisons <, >, <=, >=
// null/undefined are converted to numbers: null becomes 0, while undefined becomes NaN.

// Strange result: null vs 0.
console.log(null > 0); // (1) false
console.log(null == 0); // (2) false
console.log(null >= 0); // (3) true

// Mathematically, that’s strange. The last result states that "null is greater than or equal to zero",
// so in one of the comparisons above it must be true, but they are both false.

// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0. That’s why (3) null >= 0 is true and (1) null > 0 is false.

// On the other hand, the equality check == for undefined and null is defined such that, without any conversions,
// they equal each other and don’t equal anything else. That’s why (2) null == 0 is false.

// An incomparable undefined.

// The value undefined shouldn’t be compared to other values.
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // false (3)

// We get these results because:
// Comparisons (1) and (2) return false because undefined gets converted to NaN and NaN is a
// special numeric value which returns false for all comparisons.
// The equality check (3) returns false because undefined only equals null, undefined, and no other value.

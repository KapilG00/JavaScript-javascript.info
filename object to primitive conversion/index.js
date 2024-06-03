// Object to primitive conversion.

/*
1. What happens when objects are added obj1 + obj2, subtracted obj1 - obj2 or printed using alert(obj)?
2. In case of such operations, objects are auto-converted to primitives,
   and then the operation is carried out over these primitives and results in a primitive value.
3. That’s an important limitation: the result of obj1 + obj2 (or another math operation) can’t be another object!

We’ll see how an object converts to primitive and how to customize it.

We have two purposes:

1. It will allow us to understand what’s going on in case of coding mistakes,
   when such an operation happened accidentally.
2. There are exceptions, where such operations are possible and look good.
   E.g. subtracting or comparing dates (Date objects).
*/

// ---------------------- 1. Conversion rules. --------------------------

/*
1.1 There’s no conversion to boolean. All objects are true in a boolean context, as simple as that.
    There exist only numeric and string conversions.
1.2 The numeric conversion happens when we subtract objects or apply mathematical functions.
    For instance, Date objects can be subtracted, and the result of date1 - date2 is the time difference between two dates.
1.3 As for the string conversion – it usually happens when we output an object with alert(obj) and in similar contexts.

We can implement string and numeric conversion by ourselves, using special object methods.
*/

// ---------------------- 2. Hints. --------------------------

/*
2.1 How does JavaScript decide which conversion to apply?
2.2 There are three variants of type conversion, that happen in various situations. They’re called “hints”.
*/

// 2.3 hint: "string" -> For an object-to-string conversion, when we’re doing an operation on an object that expects a string, like "alert".

// alert(obj);
// // using object as a property key
// anotherObj[obj] = 123;

// 2.4 hint: "number" -> For an object-to-number conversion, like when we’re doing maths.

// explicit conversion
let obj1 = {
  name: "kapil",
  age: 27,
};
let num = Number(obj1);
console.log("num:", num);

// maths (except binary plus)
let n = +obj1; // unary plus
console.log("obj1 with unary operator:", n);
let date1 = new Date();
let date2 = new Date();
let delta = date1 - date2;
console.log("delta:", delta);

// less/greater comparison
let user1 = {
  name: "user1",
};

let user2 = {
  name: "user2",
};
let greater = user1 < user2;
console.log("greater:", greater);

// 2.5 hint: "default" -> Occurs in rare cases when the operator is “not sure” what type to expect.

/*
For instance, binary plus "+" can work both with strings (concatenates them) and numbers (adds them).
So if a binary plus gets an object as an argument, it uses the "default" hint to convert it.
Also, if an object is compared using "==" with a string, number or a symbol,
it’s also unclear which conversion should be done, so the "default" hint is used.
*/

// binary plus uses the "default" hint.
let obj2 = {
  name: "shreyas",
};
let total = obj1 + obj2;
console.log("total:", total, typeof total);

// obj == number uses the "default" hint.
if (user1 == 1) {
  console.log("default hint example!!");
}

// 2.6 To do the conversion, JavaScript tries to find and call three object methods:

/*
2.6.1: Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key Symbol.toPrimitive (system symbol), if such method exists,
2.6.2: Otherwise if hint is "string" try calling obj.toString() or obj.valueOf(), whatever exists.
2.6.3: Otherwise if hint is "number" or "default" try calling obj.valueOf() or obj.toString(), whatever exists.
*/

// ---------------------- 3. Symbol.toPrimitive --------------------------

/*
Let’s start from the first method. There’s a built-in symbol named
"Symbol.toPrimitive" that should be used to name the conversion method, like this:
*/

obj1[Symbol.toPrimitive] = function (hint) {
  // here goes the code to convert this object to a primitive
  // it must return a primitive value
  // hint = one of "string", "number", "default"
};

// If the method "Symbol.toPrimitive" exists, it’s used for all hints, and no more methods are needed.

let user3 = {
  name: "divya",
  money: 1000,

  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == "string"
      ? `{name: "${this.name}", money: "${this.money}"}`
      : this.money;
  },
};

// conversions demo:
alert(user3); // hint: string -> {name: "divya", money: "1000"}
console.log("user3 with unary operator:", +user3); // hint: number -> 1000
console.log("user3 with binary operator:", user3 + 500); // hint: default -> 1500
console.log("user3 with equality operator:", user3 == 500); // / hint: default -> false

// ---------------------- 4. toString/valueOf --------------------------

/*
If there’s no Symbol.toPrimitive then JavaScript tries to find methods "toString" and "valueOf":

4.1 For the "string" hint: call "toString" method, and if it doesn’t exist or if it returns an object instead of a primitive value,
    then call "valueOf" (so "toString" has the priority for string conversions).
4.2 For other hints: call "valueOf", and if it doesn’t exist or if it returns an object instead of a primitive value,
    then call "toString" (so "valueOf" has the priority for maths).
4.3 These methods (toString/valueOf) must return a primitive value. If "toString" or "valueOf" returns an object, 
    then it’s ignored (same as if there were no method).
4.4 By default, a plain object has following "toString" and "valueOf" methods:
    The "toString" method returns a string "[object Object]".
    The "valueOf" method returns the object itself.    
*/

let user4 = { name: "gorgc" };

alert(user4); // [object Object]
console.log(user4.valueOf() === user4); // true

// 4.5 Here, user5 does the same as above using a combination of "toString" and "valueOf" instead of "Symbol.toPrimitive":

let user5 = {
  name: "ramzes",
  money: 2000,

  // for hint="string"
  toString() {
    return `{name: "${this.name}", money: "${this.money}"}`;
  },

  // for hint="number" or "default"
  valueOf() {
    return this.money;
  },
};

alert(user5); // toString -> {name: "ramzes", money: "2000"}
console.log("user5 with unary operator:", +user5); // valueOf -> 2000
console.log("user5 with binary operator:", user5 + 500); // valueOf -> 2500

// 4.6 Often we want a single “catch-all” place to handle all primitive conversions. In this case, we can implement toString only, like this.

let user6 = {
  name: "yatoro",

  toString() {
    return this.name;
  },
};

alert(user6); // toString -> yatoro
console.log("user6 with binary operator:", user6 + 322); // toString -> John500

// In the absence of Symbol.toPrimitive and valueOf, toString will handle all primitive conversions.

// ---------------------- 5. A conversion can return any primitive type --------------------------

/*
5.1 The important thing to know about all primitive-conversion methods is that they do not necessarily return the “hinted” primitive.
5.2 There is no control whether "toString" returns exactly a string, or whether "Symbol.toPrimitive" method returns a number for the hint "number".
5.3 The only mandatory thing: these methods must return a primitive, not an object.

For historical reasons, if "toString" or "valueOf" returns an object, there’s no error, but such value is ignored (like if the method didn’t exist).
That’s because in ancient times there was no good “error” concept in JavaScript.
In contrast, Symbol.toPrimitive is stricter, it must return a primitive, otherwise there will be an error.
*/

// ---------------------- 6. Further conversions --------------------------

/*
6.1 As we know already, many operators and functions perform type conversions, e.g. multiplication "*" converts operands to numbers.
6.2 If we pass an object as an argument, then there are two stages of calculations:
    6.2.1 The object is converted to a primitive (using the rules described above).
    6.2.2 If necessary for further calculations, the resulting primitive is also converted.
*/

let obj3 = {
  // "toString" handles all conversions in the absence of other methods.
  toString() {
    return "2";
  },
};

console.log("multiplication of object with any primitive value:", obj3 * 2); // 4

/*
6.2.3 The multiplication obj * 2 first converts the object to primitive (that’s a string "2").
6.2.4 Then "2" * 2 becomes 2 * 2 (the string is converted to number).
*/

// 6.3 Binary plus will concatenate strings in the same situation, as it gladly accepts a string:

let obj4 = {
  // "toString" handles all conversions in the absence of other methods.
  toString() {
    return "2";
  },
};

console.log("obj4 with binary operator with any primitive value:", obj4 + 2); // "22" ("2" + 2), conversion to primitive returned a string => concatenation.

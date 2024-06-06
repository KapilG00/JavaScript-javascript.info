// --------------------------------- 1. Symbol.iterator -------------------------------------

/*
1.1 We have an object that is not an array, but looks suitable for "for..of".
1.2 Like a range object that represents an interval of numbers:
*/

let range1 = {
  from: 1,
  to: 5,
};

// We want the "for..of" to work:
// for(let num of range) ... num=1,2,3,4,5

/*
1.3 To make the range object iterable (and thus let "for..of" work) we need to add a method 
    to the object named "Symbol.iterator" (a special built-in symbol just for that).
1.4 When "for..of" starts, it calls that method once (or errors if not found).
    The method must return an iterator – an object with the method next.
1.5 Onward, "for..of" works only with that returned object.
1.6 When "for..of" wants the next value, it calls next() on that object.
1.7 The result of next() must have the form {done: Boolean, value: any}, 
    where done=true means that the loop is finished, otherwise value is the next value.
*/

// Step 1: call to "for..of" initially calls this.
range1[Symbol.iterator] = function () {
  // ...it returns the iterator object:
  // Step 2: Onward, "for..of" works only with the iterator object below, asking it for next values.
  return {
    current: this.from,
    last: this.to,

    // Step 3: next() is called on each iteration by the "for..of" loop.
    next() {
      // Step 4: it should return the value as an object {done:.., value :...}
      if (this.current <= this.last) {
        return {
          done: false,
          value: this.current++,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
};

console.log("range1:", range1);

for (let num of range1) {
  console.log(num);
}

/*
1.8 The range itself does not have the next() method.
1.9 Instead, another object, a so-called “iterator” is created by the call to range[Symbol.iterator](),
    and its next() generates values for the iteration.
1.10 So, the iterator object is separate from the object it iterates over.
1.11 Technically, we may merge them and use range itself as the iterator to make the code simpler.
*/

// This is not a good way to do, since it will mutate the value of this.from
let range2 = {
  from: 1,
  to: 9,

  [Symbol.iterator]() {
    return this;
  },

  next() {
    if (this.from <= this.to) {
      return { done: false, value: this.from++ };
    } else {
      return { done: true };
    }
  },
};

console.log("range2:", range2);

for (let num of range2) {
  console.log(num); // 1, then 2, 3, 4, 5, 6, 7, 8, 9
}

console.log("obj.from after for of loop:", range2.from);
console.log("obj.to after for of loop:", range2.to);

// This is a correct way to do.
let range3 = {
  from: 1,
  to: 9,

  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },

  next() {
    if (this.current <= this.to) {
      return { done: false, value: this.current++ };
    } else {
      return { done: true };
    }
  },
};

console.log("range3:", range3);

for (let num of range3) {
  console.log(num); // 1, then 2, 3, 4, 5, 6, 7, 8, 9
}

console.log("obj.from after for of loop:", range3.from);
console.log("obj.to after for of loop:", range3.to);

/*
1.12 Now range[Symbol.iterator]() returns the range object itself: it has the necessary next() method and remembers
     the current iteration progress in this.current. Shorter? Yes. And sometimes that’s fine too.
1.13 The downside is that now it’s impossible to have two "for..of" loops running over the object simultaneously:
     they’ll share the iteration state, because there’s only one iterator – the object itself.
     But two parallel "for-of"s is a rare thing, even in async scenarios.
*/

// --------------------------------- 2. String is iterable --------------------------------------

// Arrays and strings are most widely used built-in iterables.

// 2.1 For a string, for..of loops over its characters:
for (let char of "sonneiko") {
  console.log(char); // t, then e, then s, then t
}

// --------------------------------- 3. Calling an iterator explicitly --------------------------------------

/*
3.1 Here, we will use an iterator explicitly.
3.2 We’ll iterate over a string in exactly the same way as "for..of", but with direct calls.
    This code creates a string iterator and gets values from it “manually”:
*/

let str = "dendi";

// does the same as
// for (let char of str) console.log(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) {
    break;
  }
  console.log(result.value); // outputs characters one by one.
}

/*
3.3 That is rarely needed, but gives us more control over the process than for..of. For instance,
    we can split the iteration process: iterate a bit, then stop, do something else, and then resume later.
*/

// --------------------------------- 4. Iterables and array-likes --------------------------------------

// Two official terms look similar, but are very different.

/*
4.1 Iterables are objects that implement the "Symbol.iterator" method, as described above.
4.2 Array-likes are objects that have indexes and length, so they look like arrays.
4.3 For instance, strings are both iterable (for..of works on them) and array-like (they have numeric indexes and length).
4.4 But an iterable may be not array-like. And vice versa an array-like may be not iterable.
4.5 For example, the "range" in the example above is iterable, but not array-like, because it does not have indexed properties and length.
4.6 And here’s the object that is array-like, but not iterable:
*/

let arrayLike1 = {
  // has indexes and length => array-like
  0: "Hello",
  1: "World",
  length: 2,
};

// (no Symbol.iterator)
// for (let item of arrayLike1) {
// } // TypeError: arrayLike1 is not iterable

// --------------------------------- 5. Array.from --------------------------------------

/*
5.1 Both iterables and array-likes are usually not arrays, they don’t have push, pop etc.
5.2 That’s rather inconvenient if we have such an object and want to work with it as with an array.
5.3 E.g. we would like to work with "range" using array methods. How to achieve that?

5.4 There’s a universal method "Array.from" that takes an iterable or array-like value and makes a “real” Array from it.
    Then we can call array methods on it.
*/

let arrayLike2 = {
  0: "Hello",
  1: "World",
  length: 2,
};

let arr1 = Array.from(arrayLike2); // (*)
console.log(arr1.pop()); // World (method works)

/*
5.5 "Array.from" at the line (*) takes the object, examines it for being an iterable or array-like,
    then makes a new array and copies all items to it.
*/

// The same happens for an iterable:

// assuming that "range1" is taken from the example above.
let arr2 = Array.from(range1);
console.log(arr2); // [1,2,3,4,5] (array toString conversion works)

/*
5.6 The full syntax for "Array.from" also allows us to provide an optional “mapping” function.
5.7 Array.from(obj[, mapFn, thisArg])
5.8 The optional second argument mapFn can be a function that will be applied to each element
    before adding it to the array, and thisArg allows us to set this for it.
*/

// assuming that "range1" is taken from the example above.
// square each number.
let arr = Array.from(range1, (num) => num * num);
console.log(arr); // [1,4,9,16,25]

// // Testing ES6 syntax.
let obj1 = {
  name: "kapil",
  id: 322,

  fun() {
    console.log(this.name, this.id);
  },
};

console.log(obj1);
console.log(obj1.fun());

let obj2 = {
  name: "kapil",
  id: 322,

  myFunc: () => {
    console.log(this.name, this.id);
  },
};

console.log(obj2);
console.log(obj2.myFunc());

// Strings are iterable:
// 1.
for (let char of "test") {
  console.log(char);
}

// 2.
for (let i = 0; i < str.length; i++) {
  console.log(i, str[i]);
}

// 4. Iterables and array-like.
let arrayLike3 = {
  0: "Hello",
  1: "World",
  length: 2,
};

// Here, we are making it an iterable also.
arrayLike3[Symbol.iterator] = function () {
  console.log("hello, i am an iterator!!");
  let index = 0;
  return {
    next: () => {
      console.log("idx:", index);
      if (index < this.length) {
        return { value: this[index++], done: false };
      } else {
        return { done: true };
      }
    },

    /* 
      Below code will not work, mainly because of usage of normal function
      and how "this" behaves in normal function VS arrow function.   
    */

    // index: 0,
    // next() {
    //   console.log("idx:", this.index);
    //   console.log("this:", this);
    //   if (this.index < this.length) {
    //     this.index++;
    //     return { value: this[this.index++], done: false };
    //   } else {
    //     return { done: true };
    //   }
    // },
  };
};

for (let item of arrayLike3) {
  console.log(item);
}

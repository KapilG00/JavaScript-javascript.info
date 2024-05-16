// // 1.
// let range = {
//     from: 0,
//     to: 10
// };
  
// // 1. call to for..of initially calls this
// range[Symbol.iterator] = function() {
//     // ...it returns the iterator object:
//     // 2. Onward, for..of works only with the iterator object below, asking it for next values
//     return {
//         current: this.from,
//         last: this.to,

//         // 3. next() is called on each iteration by the for..of loop
//         next() {
//             // 4. it should return the value as an object {done:.., value :...}
//             if (this.current <= this.last) {
//                 return { 
//                     done: false,
//                     value: this.current++
//                 };
//             } else {
//                 return {
//                     done: true
//                 };
//             }
//         }
//     };
// };

// console.log(range)
  
// for (let num of range) {
//     console.log(num);
// }

// // Testing ES6 syntax.
// // let obj = {
// //     name: "kapil",
// //     id: 322,

// //     fun() {
// //         console.log(this.name, this.id);
// //     }
// // }

// // let obj = {
// //     name: "kapil",
// //     id: 322,

// //     myFunc: () => {
// //         console.log(this.name, this.id);
// //     }
// // }

// // console.log(obj);
// // console.log(obj.myFunc());

// // 2. String is iterable.
// for (let char of "test") {
//     console.log(char);
// }

// // 3. Calling an iterator explicitly.
// let str = "kapil";
// console.log(str.length);

// let iterator = str[Symbol.iterator]();

// console.log(iterator, typeof iterator);

// while (true) {
//   let result = iterator.next();
//   console.log("result:", result);
//   if (result.done) {
//     break
//   };
//   console.log(result.value);
// }

// // for (let i=0; i<str.length; i++) {
// //     console.log(i, str[i]);
// // }

// // 4. Iterables and array-like.
// let arrayLike = {
//     0: "Hello",
//     1: "World",
//     length: 2,
// };

// arrayLike[Symbol.iterator] = function() {
//     console.log("hello, i am an iterator!!");
//     let index = 0;
//     return {
//         next: () => {
//             if (index < this.length) {
//                 return { value: this[index++], done: false };
//             } else {
//                 return { done: true };
//             }
//         }
//     };
// };

// for (let item of arrayLike) {
//     console.log(item);
// }


// Understanding closures by making simple counters.
// let count = 0;

// function counter() {
//     count++;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

// function counter() {
//     let count = 0;

//     return function() {
//         count++;
//         return count;
//     }
// }

// const counter1 = counter();
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// const counter2 = counter();
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// 
const obj1 = {
    section: "B",
    // func: () => {
    //     console.log("this:", this);
    // },
    valueOfThis: this,
    obj2: {
      valueOfThisNew: this,
      name: "asd",
      class: "12",
      myFunction: () => {
        return {
          valueOfThisAgain: this,
          age: 25,
          printThis: () => {
            console.log(this);
          },
        };
      },
    },
};

// console.log(obj1.obj.myFunction());
// obj1.func()
console.log(obj1.valueOfThis);
obj1.obj2.myFunction().printThis();

// printThis is an arrow function.
// Arrow functions do not bind their own this value; instead, they inherit the this value from the surrounding code.
// In this case, since it's defined within myFunction, it inherits the this value of myFunction.
// However, this in arrow functions is lexically scoped, meaning it's determined by where the function is defined, not where it's called.
// In this case, this inside printThis will refer to the this value of the surrounding scope, which is the obj1 object.
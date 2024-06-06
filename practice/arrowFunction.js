function f() {
  var showArg = () => {
    console.log(arguments[0]);
  };
  showArg();
}

f(1);

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

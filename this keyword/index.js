// 1. “this” is not bound.
const user = {name: "John"};
const admin = {name: "Admin"};

function sayHi1() {
  console.log("this1:", this);
}

user.f = sayHi1;  // implies this.f
admin.f = sayHi1; // implies this.f

user.f();
admin.f();

// 2. Calling without an object: this == undefined.
function sayHi2() {
    console.log("this2:", this);
}

sayHi2();

// 3. Arrow functions have no “this”.
let user2 = {
    firstName: "Ilya",
    sayHi3() {
        const arrow = () => {
            console.log("this3:", this);
        }
        arrow();
    }
};

user2.sayHi3();

// This will work.
let group1 = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        (student) => {
            console.log(this.title + ': ' + student);
        }
      );
    }
};
  
group1.showList();

// This will not work.
// let group = {
//     title: "Our Group",
//     students: ["Kate", "Pete", "Alice"],
  
//     showList() {
//       this.students.forEach(
//         function(student) {
//             console.log(this.title + ': ' + student);
//         }
//       );
//     }
// };
  
// group.showList();

// This will work. Here we are explicitly passing the context for callback function.
let group2 = {
    title: "Our Group",
    students: ["Kate", "Pete", "Alice"],
  
    showList() {
      this.students.forEach(
        function(student) {
            console.log(this.title + ': ' + student);
        }, this);
    }
};
  
group2.showList();

// 4. Arrows have no “arguments”
function defer(f, ms) {
    
    return function() {
        console.log("1111:", this);
        // setTimeout(() => f.apply(this, arguments), ms);
        console.log(this);
        console.log(arguments);
    };
}
  
function sayHi(who) {
    console.log('Hello, ' + who);
}
  
let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John"); // prints "Hello, John" after 2sec.
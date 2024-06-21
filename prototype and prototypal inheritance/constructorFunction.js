// ------------------------ INHERITANCE BEFORE 2015 (ES6) -----------------------

// 1. FLAWED CONSTRUCTOR FUNCTION.

function FlawedStudentFunction(name, standard) {
  this.name = name;
  this.standard = standard;
  this.country = "INDIAN";

  // Adding methods here is "FLAWED" because these methods will be inside the object and not inside prototype.

  this.markAttendance = function () {
    console.log(`hey there ${this.name}`);
  };
  this.grades = function () {
    console.log(`grades of ${this.name} are nice`);
  };
}

const studentFunc1 = new FlawedStudentFunction("Student 1", 22);
const studentFunc2 = new FlawedStudentFunction("Student 2", 25);

console.log("studentFunc1:", studentFunc1);
console.log("studentFunc2:", studentFunc2);

console.log(
  "comparing functions:",
  studentFunc1.markAttendance === studentFunc2.markAttendance
); // false

// 2. GOOD CONSTRUCTOR FUNCTION.

function GoodParentStudentFunction(name, standard) {
  this.name = name;
  this.standard = standard;
  this.country = "INDIAN";
}

GoodParentStudentFunction.prototype.markAttendance = function () {
  console.log(`hey there ${this.name}`);
};

GoodParentStudentFunction.prototype.grades = function () {
  console.log(`grades of ${this.name} are nice`);
};

const studentFunc3 = new GoodParentStudentFunction("Student 3", 26);
const studentFunc4 = new GoodParentStudentFunction("Student 4", 32);

console.log("studentFunc3:", studentFunc3);
console.log("studentFunc4:", studentFunc4);

function GoodChildStudentFunction(name, standard, tool) {
  console.log("THIS inside child:", this);

  // Here, both "call" and "apply" will work.
  // GoodParentStudentFunction.apply(this, [name, standard]);
  GoodParentStudentFunction.call(this, name, standard); // This is similar to super() call.
  this.tool = tool;
}

// Now, we think about last part i.e. implementing "extends" keyword functionality.
function myExtends() {
  const objectWithParentPrototype = Object.create(
    GoodParentStudentFunction.prototype
  ); // {} [[prototype]] {parent prototype}
  console.log("objectWithParentPrototype:", objectWithParentPrototype);
  GoodChildStudentFunction.prototype = objectWithParentPrototype;

  // Now, we have lost child's (GoodChildStudentFunction) constructor.
  // Below is the line where we are setting the constructor to child's constructor.
  GoodChildStudentFunction.prototype.constructor = GoodChildStudentFunction;
}

myExtends();

GoodChildStudentFunction.prototype.markAttendance = function () {
  console.log(`hey there ${this.name}`);
};

GoodChildStudentFunction.prototype.grades = function () {
  console.log(`grades of ${this.name} are nice`);
};

const studentFunc5 = new GoodChildStudentFunction("Student 5", 20, "football");

console.log("studentFunc5:", studentFunc5);

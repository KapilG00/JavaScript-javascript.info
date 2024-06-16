//
const obj = {
  name: "kapil",
  322: "soloDota2",
  false: "I don't play dota2!!",
  123: "one two three",
  3.142: "PI enjoyer",
};

console.log("obj:", obj);

for (let prop in obj) {
  console.log(prop);
}

//
const codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

console.log("codes:", codes);

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// Understanding closures by making simple counters.
let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

//
// const arr = ["asd", "asdasd", "asdasd"];
const arr = ["user"];
const obj1 = {};

// console.log("arr:", ["ad", "qwert", "aka"].toString());

obj1.user = "FE";
obj1[arr] = "React";
console.log("obj1:", obj1);
console.log(obj1.user);

//
function fetch() {
  A = 7;
  console.log("A:", A); // 7
}

let A;
fetch();

//
function abc() {
  console.log("asd");
}

abc.someProperty = 322;
console.log("abc:", abc);
console.log("properties of abc function:", Object.keys(abc));

//
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1);
}

for (var i = 0; i < 3; i++) {
  function inner(val) {
    setTimeout(() => {
      console.log(val);
    }, 1);
  }
  inner(i);
}

//
function f1() {
  let value = Math.random();

  function g1() {
    debugger; // in console: type -> alert(value);
  }

  return g1;
}

let g1 = f1();
g1();

//
let phrase1 = "Hello1";

if (true) {
  let user1 = "John1";

  function sayHi1() {
    console.log(`${phrase1}, ${user1}`);
  }
}

sayHi1();

//
let phrase2 = "Hello2";

{
  let user2 = "John2";

  function sayHi2() {
    console.log(`${phrase2}, ${user2}`); // Hello, John
  }
}

sayHi2();

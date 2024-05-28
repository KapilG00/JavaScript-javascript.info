// 1. Simple array.

const simpleArr1 = [1, 2, 3, 4];
const simpleArr2 = simpleArr1;

console.log("simpleArr1:", simpleArr1);
console.log("simpleArr2:", simpleArr2);
console.log(simpleArr1 == simpleArr2);

// 2. Nested array.

const simpleArr3 = [1, 2, [11, 22, 33], 4];
const simpleArr4 = simpleArr3;

console.log("simpleArr3:", simpleArr3);
console.log("simpleArr4:", simpleArr4);
console.log(simpleArr3 == simpleArr4); // true
console.log(simpleArr3[2] == simpleArr4[2]); // true

simpleArr3[2][2] = 44;
console.log("simpleArr3 after change in simpleArr3:", simpleArr3);
console.log("simpleArr4 after change in simpleArr3:", simpleArr4);
console.log(simpleArr3 == simpleArr4); // true

// 3. Simple object.

const user1 = {
  name: "John",
  age: 30,
};

const user2 = user1;
console.log("user1:", user1);
console.log("user2:", user2);
console.log(user1 == user2); // true

// 4. Nested object.

const user3 = {
  name: "John",
  age: 30,
  companiesData: {
    companyName: "amazon",
    salary: "32LPA",
  },
};

const user4 = user3;
console.log("user3:", user3);
console.log("user4:", user4);
console.log(user3 == user4); // true
console.log(user3.companiesData == user4.companiesData); // true

user3.companiesData.salary = "24LPA";
console.log("user3 after changes in user3:", user3);
console.log("user4 after changes in user3:", user4);
console.log(user3 == user4); // true
console.log(user3.companiesData == user4.companiesData); // true

// 5. Object.assign() AKA (shallow copy).

let user5 = { name: "asd" };
let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// Copies all properties from permissions1 and permissions2 into user5.
Object.assign(user5, permissions1, permissions2);

// Now, user = { name: "asd", canView: true, canEdit: true }
console.log("user5:", user5);
console.log(user5.name); // asd
console.log(user5.canView); // true
console.log(user5.canEdit); // true

// 5.1 Simple object cloning using Object.assign()

let user6 = {
  name: "John",
  age: 30,
};

console.log("user6:", user6);

let clone1 = Object.assign({}, user6);
console.log("clone of user6:", clone1);
console.log(user6 == clone1); // false
console.log(clone1.name); // John
console.log(clone1.age); // 30

// 5.2 Nested cloning.

let user7 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log("user7:", user7);

let clone2 = Object.assign({}, user7);
console.log("clone of user7:", clone2);
console.log(user7.sizes === clone2.sizes); // true

user7.sizes.width = 60;
console.log(clone2.sizes.width); // 60

// 6. structuredClone AKA (deep copy).

// To fix that and make user and clone truly separate objects,
// we should use a cloning loop that examines each value of user[key] and,
// if it’s an object, then replicate its structure as well.
// That is called a “deep cloning/copying” or “structured cloning/copying”.
// There’s structuredClone method that implements deep cloning.

let user8 = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

console.log("user8:", user8);

let clone3 = structuredClone(user8);
console.log("clone3:", clone3);
console.log(user8 == clone3); // false
console.log(user8.sizes === clone3.sizes); // false

// user8 and clone3 are totally unrelated now.
user8.sizes.width = 60;
console.log(clone3.sizes.width); // 50

// The structuredClone method can clone most data types, such as objects, arrays, primitive values.
// It also supports circular references, when an object property references the object itself (directly or via a chain or references).

let user9 = {};
// let's create a circular reference.
// user9.me references the user9 itself.
user9.me = user9;

console.log("user9:", user9);

let clone4 = structuredClone(user9);
console.log("clone4:", clone4);
console.log(user9 == clone4); // false
console.log(clone4.me === clone4); // true

// 7. When an object has a function property that's where structuredClone() fails.

const obj1 = {
  redditKarma: 322,
  f: function () {
    console.log("this:", this);
  },
};

console.log(obj1.f());
// const obj2 = structuredClone(obj1); // DOMException: Failed to execute 'structuredClone' on 'Window': function () {} could not be cloned.

// console.log("obj1:", obj1);
// console.log("obj2:", obj2);

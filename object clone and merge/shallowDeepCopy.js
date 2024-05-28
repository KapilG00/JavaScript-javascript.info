// Shallow Copy in JS (applicable for both array and object).
// 1. Simple arrays.
const arr1 = [1,2,3,4];
const shallowCopyArr1 = [...arr1]  // It creates a new array.

console.log("arr1 before changes:", arr1);
console.log("shallowCopyArr1 before changes:", shallowCopyArr1);

arr1[2] = 14;
console.log("arr1 after changes in arr1:", arr1);
console.log("shallowCopyArr1 after changes in arr1:", shallowCopyArr1);

shallowCopyArr1[2] = 98;
console.log("arr1 after changes in shallowCopyArr1:", arr1);
console.log("shallowCopyArr1 after changes in shallowCopyArr1:", shallowCopyArr1);
console.log();

// 2. Nested arrays.
const arr2 = [1,2,[3,13,23],4];
const shallowCopyArr2 = [...arr2];

console.log("arr2 before changes:", arr2);
console.log("shallowCopyArr2 before changes:", shallowCopyArr2);

arr2[2][1] = 14;
console.log("arr2 after changes in arr2:", arr2);
console.log("shallowCopyArr2 after changes in arr2:", shallowCopyArr2);

shallowCopyArr2[2][2] = 85;
console.log("arr2 after changes in shallowCopyArr2:", arr2);
console.log("shallowCopyArr2 after changes in shallowCopyArr2:", shallowCopyArr2);
console.log();

// 3. Simple objects.
const obj1 = {
    name: "kapil",
    age: 28
}
const shallowCopyobj1 = { ...obj1 }; // It creates a new object.
console.log("obj1 before changes:", obj1);
console.log("shallowCopyobj1 before changes:", shallowCopyobj1);

obj1.name = "aniket";
console.log("obj1 after changes in obj1:", obj1);
console.log("shallowCopyobj1 after changes in obj1:", shallowCopyobj1);

shallowCopyobj1.name = "shubham";
console.log("obj1 after changes in shallowCopyobj1:", obj1);
console.log("shallowCopyobj1 after changes in shallowCopyobj1:", shallowCopyobj1);
console.log();

// 4. Nested objects.
const obj2 = {
    name: "kapil",
    age: 28,
    userDetails: {
        lastName: "gupta",
        gender: "male"
    }
}
const shallowCopyobj2 = { ...obj2 };
console.log("obj2 before changes:", obj2);
console.log("shallowCopyobj2 before changes:", shallowCopyobj2);

obj2.userDetails.lastName = "jaware";
console.log("obj2 after changes in obj2:", obj2);
console.log("shallowCopyobj2 after changes in obj2:", shallowCopyobj2);

shallowCopyobj2.name = "shubham";
shallowCopyobj2.userDetails.lastName = "jagtap";
console.log("obj2 after changes in shallowCopyobj2:", obj2);
console.log("shallowCopyobj2 after changes in shallowCopyobj2:", shallowCopyobj2);
console.log();
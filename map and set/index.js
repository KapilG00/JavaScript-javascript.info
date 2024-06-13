// 1. ------------------------------------------ Map ----------------------------------------------

/*
1.1. Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
1.2 Methods and properties are:
    1.2.1 new Map() – creates the map.
    1.2.2 map.set(key, value) – stores the value by the key.
    1.2.3 map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
    1.2.4 map.has(key) – returns true if the key exists, false otherwise.
    1.2.5 map.delete(key) – removes the element (the key/value pair) by the key.
    1.2.6 map.clear() – removes everything from the map.
    1.2.7 map.size – returns the current element count.
*/

// 1.3
let map1 = new Map();

// map with primitive keys.
map1.set("1", "string");
map1.set(1, "number");
map1.set(1.414, "float");
map1.set(true, "boolean");
map1.set(null, "null");
map1.set(undefined, "undefined");
map1.set(NaN, "nan");

// map with non-primitive keys.
let arr = [1, 2, 3, 4];
map1.set(arr, "array");
let obj = { name: "kapil", age: 27 };
map1.set(obj, "object");
let func = () => console.log("function as a key");
map1.set(func, "function");

console.log(map1);

console.log(map1.get(null));
console.log(map1.get(undefined));
console.log(map1.get(NaN));

console.log(map1.get(arr));
console.log(map1.get(obj));
console.log(map1.get(func));

console.log(map1.size);

map1.set("set1", "str1").set(322, "num1").set(1437, "num2");

console.log("map1:", map1);

// 1.4. ---------------------------- Iteration over Map --------------------------------

let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
console.log("recipeMap:", recipeMap);

// Note: The iteration goes in the same order as the values were inserted. "Map" preserves this order, unlike a regular Object.

// iterate over keys (vegetables).
console.log(recipeMap.keys());
for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts).
console.log(recipeMap.values());
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap.entries()) {
  // the same as of recipeMap.
  console.log(entry); // cucumber, 500 (and so on)
}

recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});

// 1.5 -------------------------------- Object.entries: Map from Object ----------------------------------

let obj1 = {
  name: "John",
  age: 30,
};

let map2 = new Map(Object.entries(obj1));
console.log(map2);

// 1.6 ------------------------------- Object.fromEntries: Object from Map -------------------------------

let prices = Object.fromEntries([
  ["banana", 1],
  ["meat", 4],
  ["orange", 2],
]);

console.log("prices:", prices, typeof prices);

// Map to object.
let map3 = new Map();
map3.set("banana", 11);
map3.set("orange", 22);
map3.set("meat", 44);

let obj2 = Object.fromEntries(map3.entries());
console.log(obj2);

// 2. ----------------------------------- Set -------------------------------------------------

/*
2.1 A "Set" is a special type collection – “set of values” (without keys), where each value may occur only once.
2.2 Its main methods are:
    2.2.1 new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
    2.2.2 set.add(value) – adds a value, returns the set itself.
    2.2.3 set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
    2.2.4 set.has(value) – returns true if the value exists in the set, otherwise false.
    2.2.5 set.clear() – removes everything from the set.
    2.2.6 set.size – is the elements count.
2.3 The main feature is that repeated calls of set.add(value) with the same value don’t do anything. 
    That’s the reason why each value appears in a "Set" only once.
*/

// 2.4
// let set = new Set([{ name: "John" }, { name: "Pete" }, { name: "Mary" }]);

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times.
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log("set:", set);

// "Set" keeps only unique values.
console.log(set.size); // 3

for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}

// 2.5
let set1 = new Set([1, 2, 3, 4, 2, 33, 11, 1, 5, "asd"]);
console.log("set1:", set1);
console.log(set1.has(11));
console.log(set1.has("kapil"));

// 2.6
let set2 = new Set([function a() {}, function b() {}, function c() {}]);
console.log("set2:", set2);

// 2.7 Iteration over "Set".
let set3 = new Set(["oranges", "apples", "bananas", 322, true]);

console.log("set3:", set3);

for (let value of set3) {
  console.log(value);
}

// the same with forEach:
set3.forEach((value, valueAgain, set3) => {
  console.log(value, valueAgain);
});

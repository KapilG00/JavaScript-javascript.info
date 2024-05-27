// Symbols. (It is a primitive data type)

// By specification, only two primitive types may serve as object property keys:
// 1. string type
// 2. symbol type

// 1. A “symbol” represents a unique identifier.

let id1 = Symbol("first id");
console.log("id1:", id1);

// 2. Symbols are guaranteed to be unique. Even if we create many symbols with exactly the same description,
//    they are different values. The description is just a label that doesn’t affect anything.

let id2 = Symbol("id");
let id3 = Symbol("id");

console.log(id2 == id3); // false

// 3. Symbols don’t auto-convert to a string.

let id4 = Symbol("fourth id");
// alert(id4); // TypeError: Cannot convert a Symbol value to a string.

// If we really want to show a symbol, we need to explicitly call .toString() on it.
let id5 = Symbol("fifth id");
alert(id5.toString()); // Symbol(id)

// Or get symbol.description property to show the description only.
alert(id5.description);

// 4. “Hidden” properties.

// Symbols allow us to create “hidden” properties of an object, that no other part of code can accidentally access or overwrite.

let user1 = {
  name: "John",
};

let id6 = Symbol("sixth id");
user1[id6] = "hidden property of a 'user1' object";
console.log("user1:", user1);
console.log(user1[id6]);

// As "user1" object belong to another codebase, it’s unsafe to add fields to them,
// since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally.
// The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the "user1" object.

// 5. Symbols in an object literal.

// If we want to use a symbol in an object literal {...}, we need square brackets around it.
let id7 = Symbol("seventh id");

let user2 = {
  name: "John",
  [id7]: 123, // not "id": 123
};
console.log("user2:", user2);

// That’s because we need the value from the variable id7 as the key, not the string “id7”.

// 6. Symbols are skipped by for…in loops.

// Symbolic properties do not participate in for..in loop.
let id8 = Symbol("eighth id");
let user3 = {
  name: "John",
  age: 30,
  [id8]: 420,
};

console.log("user3:", user3);

for (let key in user3) {
  console.log(key); // name, age (no symbols)
}

// The direct access by the symbol works.
console.log("Direct access: " + user3[id8]); // Direct: 123

// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle.
// If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

console.log("user3 keys:", Object.keys(user3));

// In contrast, Object.assign copies both string and symbol properties.
let id9 = Symbol("ninth id");
let user4 = {
  [id9]: 322,
};

console.log("user4:", user4);

let clone = Object.assign({}, user4);
console.log("clone of user4 object:", clone);
console.log(clone[id9]); // 322

// 7. Global symbols.
// As we’ve seen, usually all symbols are different, even if they have the same name.
// But sometimes we want same-named symbols to be same entities.
// For instance, different parts of our application want to access symbol "id" meaning exactly the same property.

// To achieve that, there exists a global symbol registry. We can create symbols in it and access them later,
// and it guarantees that repeated accesses by the same name return exactly the same symbol.

// In order to read (create if absent) a symbol from the registry, use Symbol.for(key).
// That call checks the global registry, and if there’s a symbol described as key, then returns it, otherwise creates a new symbol Symbol(key) and stores it in the registry by the given key.

let id10 = Symbol.for("tenth id"); // if the symbol did not exist, it is created

// read it again (maybe from another part of the code)
let id11 = Symbol.for("tenth id");

// the same symbol
console.log(id10 === id11); // true

// Symbols inside the registry are called global symbols.
// If we want an application-wide symbol, accessible everywhere in the code – that’s what they are for.

// 8. Symbol.keyFor

// We have seen that for global symbols, Symbol.for(key) returns a symbol by name.
// To do the opposite – return a name by global symbol – we can use: Symbol.keyFor(sym):
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("age");

console.log(Symbol.keyFor(sym1)); // name
console.log(Symbol.keyFor(sym2)); // age

// The Symbol.keyFor internally uses the global symbol registry to look up the key for the symbol.
// So it doesn’t work for non-global symbols. If the symbol is not global, it won’t be able to find it and returns undefined.

let globalSymbol = Symbol.for("dota2");
let localSymbol = Symbol("csgo");

console.log(Symbol.keyFor(globalSymbol)); // dota2, global symbol
console.log(Symbol.keyFor(localSymbol)); // undefined, not global

console.log(globalSymbol.description); // dota2
console.log(localSymbol.description); // csgo

// 9. System symbols.

// There exist many “system” symbols that JavaScript uses internally, and we can use them to fine-tune various aspects of our objects.
// They are listed in the specification in the Well-known symbols table:

// Symbol.hasInstance
// Symbol.isConcatSpreadable
// Symbol.iterator
// Symbol.toPrimitive
// …and so on.
// For instance, Symbol.toPrimitive allows us to describe object to primitive conversion.

// 10.

// NOTE: Technically, symbols are not 100% hidden.
//       There is a built-in method Object.getOwnPropertySymbols(obj) that allows us to get all symbols.
//       Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones.

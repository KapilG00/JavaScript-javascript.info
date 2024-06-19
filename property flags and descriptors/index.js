// Property flags and descriptors

/*
  1. value -> Value of that Key.
  2. Writable -> if this is TRUE, basically means we can change the value. 
     ex : I can change the value of name from "priyanka" to "utkarsh"
  3. Enumerable -> if TRUE, we can get this property inside of for-in loop.
  4. Configurable  -> if TRUE, property can be deleted.
*/

// ----------------------------- 1. Property flags ----------------------------------

/*
1.1 Object properties, besides a value, have three special attributes (so-called “flags”):
    1.1.1 writable – if true, the value can be changed, otherwise it’s read-only.
    1.1.2 enumerable – if true, then listed in loops, otherwise not listed.
    1.1.3 configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.
1.2 We didn’t see them yet, because generally they do not show up. When we create a property “the usual way”,
    all of them are true. But we also can change them anytime.
*/

/*
1.3 First, let’s see how to get those flags.
1.4 The method "Object.getOwnPropertyDescriptor" allows to query the full information about a property.
*/

// Syntax: let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName);

/*
1.5 obj: The object to get information from.
1.6 propertyName: The name of the property.
1.7 The returned value is a so-called “property descriptor” object: it contains the value and all the flags.
*/

let user1 = {
  name: "John",
};

let descriptor1 = Object.getOwnPropertyDescriptor(user1, "name");

console.log(JSON.stringify(descriptor1, null, 2));

// To change the flags, we can use "Object.defineProperty".

// Syntax: Object.defineProperty(obj, propertyName, descriptor)

/*
1.8 obj, propertyName: The object and its property to apply the descriptor.
1.9 descriptor: Property descriptor object to apply.
1.10 If the property exists, defineProperty updates its flags.
1.11 Otherwise, it creates the property with the given value and flags; in that case,
     if a flag is not supplied, it is assumed false.
*/

let user2 = {};

Object.defineProperty(user2, "name", {
  value: "Kapil",
});

console.log("user2:", user2);

let descriptor2 = Object.getOwnPropertyDescriptor(user2, "name");

console.log(JSON.stringify(descriptor2, null, 2));

// Compare it with “normally created” user1.name above: now all flags are falsy.
// If that’s not what we want then we’d better set them to true in descriptor.

// -------------------------------- 2. Non-writable -------------------------------------

// 2.1 Let’s make user3.name non-writable (can’t be reassigned) by changing writable flag:

let user3 = {
  name: "Dendi",
};

Object.defineProperty(user3, "name", {
  writable: false,
});

user3.name = "Puppey"; // Error: Cannot assign to read only property 'name'

console.log("user3:", user3);

// 2.2 Now no one can change the name of our user3, unless they apply their own defineProperty to override ours.

/*
NOTE: Errors appear only in strict mode :-
      In non-strict mode, no errors occur when writing to non-writable properties and such.
      But the operation still won’t succeed. Flag-violating actions are just silently ignored in non-strict.
*/

// 2.3 Here’s the same example, but the property is created from scratch.

let user4 = {};

Object.defineProperty(user4, "name", {
  value: "LightHeaven",
  // for new properties we need to explicitly list what's true
  enumerable: true,
  configurable: true,
});

console.log(user4.name); // LightHeaven
user4.name = "Kuroky"; // Error

// -------------------------------------- 3. Non-enumerable -------------------------------------------

/*
3.1 Now let’s add a custom toString to user5.
3.2 Normally, a built-in toString for objects is non-enumerable,
    it does not show up in for..in. But if we add a toString of our own, then by default it shows up in for..in
*/

let user5 = {
  name: "Watson",
  toString() {
    return this.name;
  },
};

// By default, both our properties are listed.
for (let key in user5) console.log(key); // name, toString

// 3.3 If we don’t like it, then we can set enumerable:false. Then it won’t appear in a for..in loop, just like the built-in one.

let user6 = {
  name: "DM",
  toString() {
    return this.name;
  },
};

Object.defineProperty(user6, "toString", {
  enumerable: false,
});

// Now our toString disappears:
for (let key in user6) console.log(key); // name

// 3.4 Non-enumerable properties are also excluded from Object.keys
console.log(Object.keys(user6)); // name

// ------------------------------------------ 4. Non-configurable -----------------------------------------------

// 4.1 The non-configurable flag (configurable:false) is sometimes preset for built-in objects and properties.
// 4.2 A non-configurable property can’t be deleted, its attributes can’t be modified.

// 4.3 Math.PI is non-writable, non-enumerable and non-configurable.

let descriptor3 = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(descriptor3, null, 2));

/*
4.4 So, a programmer is unable to change the value of Math.PI or overwrite it.
4.5 Math.PI = 3; // Error, because it has writable: false
4.6 delete Math.PI won't work either.
*/

/*
4.7 We also can’t change Math.PI to be writable again.
4.8 Error, because of configurable: false
    Object.defineProperty(Math, "PI", { writable: true }); // TypeError: Cannot redefine property: PI
4.9 There’s absolutely nothing we can do with Math.PI.
4.10 Making a property non-configurable is a one-way road. We cannot change it back with defineProperty.
*/

/*
NOTE: configurable: false prevents changes of property flags and its deletion, while allowing to change its value.
*/

// 4.11 Here user7.name is non-configurable, but we can still change it (as it’s writable).
let user7 = {
  name: "Sonneiko",
};

Object.defineProperty(user7, "name", {
  configurable: false,
});

user7.name = "General"; // works fine
delete user7.name; // Error

// 4.12 And here we make user.name a “forever sealed” constant, just like the built-in Math.PI.

let user8 = {
  name: "KJ",
};

Object.defineProperty(user8, "name", {
  writable: false,
  configurable: false,
});

// won't be able to change user.name or its flags
// all this won't work:
user8.name = "Hector";
delete user8.name;
// Object.defineProperty(user8, "name", { value: "Ramzes" }); // TypeError: Cannot redefine property: name

/*
NOTE: The only attribute change possible: writable true → false
      There’s a minor exception about changing flags.
      We can change writable: true to false for a non-configurable property,
      thus preventing its value modification (to add another layer of protection). Not the other way around though.
*/

// -------------------------------------- 5. Object.defineProperties ------------------------------------------

// There’s a method Object.defineProperties(obj, descriptors) that allows to define many properties at once.

/*
Syntax: Object.defineProperties(obj, {
            prop1: descriptor1,
            prop2: descriptor2
            // ...
        });
*/

let user9 = {};

Object.defineProperties(user9, {
  name: { value: "Val Valiant", writable: false },
  surname: { value: "Thor", writable: false },
  // ...
});

console.log("user9:", user9);

// ------------------------------------- 6. Object.getOwnPropertyDescriptors -------------------------------------------

/*
6.1 To get all property descriptors at once, we can use the method Object.getOwnPropertyDescriptors(obj).
6.2 Together with Object.defineProperties it can be used as a “flags-aware” way of cloning an object.
*/

let obj = {
  name: "force",
  age: 24,
};

console.log(Object.getOwnPropertyDescriptors(obj));

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

console.log("clone:", clone);

// 6.3 Normally when we clone an object, we use an assignment to copy properties, like this.

let user10 = {};

for (let key in user10) {
  clone[key] = user10[key];
}

// 6.4 But that does not copy flags. So if we want a “better” clone then Object.defineProperties is preferred.
// 6.5 Another difference is that for..in ignores symbolic and non-enumerable properties,
// 6.6 but Object.getOwnPropertyDescriptors returns all property descriptors including symbolic and non-enumerable ones.

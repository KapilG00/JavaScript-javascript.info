// Property getters and setters

/*
There are two kinds of object properties.
The first kind is data properties. We already know how to work with them.
All properties that we’ve been using until now were data properties.

The second type of property is something new. It’s an accessor property.
They are essentially functions that execute on getting and setting a value, 
but look like regular properties to an external code.
*/

// --------------------------------- 1. Getters and setters ----------------------------------

// 1.1 Accessor properties are represented by “getter” and “setter” methods. In an object literal they are denoted by get and set.

let obj1 = {
  get propName() {
    // getter, the code executed on getting obj.propName
  },

  set propName(value) {
    // setter, the code executed on setting obj.propName = value
  },
};

/*
1.2 The getter works when obj2.propName is read, the setter – when it is assigned.
1.3 We want to add a fullName property, that should be "John Smith".
    Of course, we don’t want to copy-paste existing information, so we can implement it as an accessor.
*/

let user1 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

console.log(user1.fullName);

/*
1.4 From the outside, an accessor property looks like a regular one. That’s the idea of accessor properties.
    We don’t call user.fullName as a function, we read it normally: the getter runs behind the scenes.
1.5 As of now, fullName has only a getter. If we attempt to assign user.fullName=, there will be an error.
*/

let user2 = {
  get fullName() {
    return `...`;
  },
};

user2.fullName = "Test"; // Error (property has only a getter)
console.log(user2.fullName);

// 1.6 Let’s fix it by adding a setter for user3.fullName.

let user3 = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// set fullName is executed with the given value.
user3.fullName = "Alice Cooper";

console.log(user3.name); // Alice
console.log(user3.surname); // Cooper

// 1.7 As the result, we have a “virtual” property fullName. It is readable and writable.

// --------------------------------------- 2. Accessor descriptors ------------------------------------------

/*
2.1 Descriptors for accessor properties are different from those for data properties.
2.2 For accessor properties, there is no "value" or "writable", but instead there are get and set functions.
2.3 That is, an accessor descriptor may have:
    2.3.1 get – a function without arguments, that works when a property is read,
    2.3.2 set – a function with one argument, that is called when the property is set,
    2.3.3 enumerable – same as for data properties,
    2.3.4 configurable – same as for data properties.
*/

// 2.4 To create an accessor fullName with defineProperty, we can pass a descriptor with get and set.

let user4 = {
  name: "Jackie",
  surname: "Chan",
};

Object.defineProperty(user4, "fullName", {
  get() {
    return `${this.name} ${this.surname}`;
  },

  set(value) {
    [this.name, this.surname] = value.split(" ");
  },
});

console.log(user4.fullName); // Jackie Chan

for (let key in user4) console.log(key); // name, surname

/*
NOTE: Please note that a property can be either an accessor (has get/set methods) or a data property (has a value), not both.
      If we try to supply both get and value in the same descriptor, there will be an error.
*/

// ------------------------------ 3. Smarter getters/setters ------------------------------------

/*
3.1 Getters/setters can be used as wrappers over “real” property values to gain more control over operations with them.
3.2 For instance, if we want to forbid too short names for user, we can have a setter name and keep the value in a separate property _name:
*/

let user5 = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  },
};

user5.name = "Miracle";
console.log(user5.name); // Miracle

user5.name = ""; // Name is too short...

/*
3.3 So, the name is stored in _name property, and the access is done via getter and setter.
3.4 Technically, external code is able to access the name directly by using user._name.
    But there is a widely known convention that properties starting with an underscore "_" are internal
    and should not be touched from outside the object.
*/

// ---------------------------------- 4. Using for compatibility ------------------------------------

/*
4.1 One of the great uses of accessors is that they allow to take control over a “regular” data property
    at any moment by replacing it with a getter and a setter and tweak its behavior.
4.2 Imagine we started implementing user objects using data properties name and age.
*/

function User1(name, age) {
  this.name = name;
  this.age = age;
}

let user6 = new User1("PPD", 25);
console.log("user6:", user6);

console.log(user6.age); // 25

// 4.3 But sooner or later, things may change. Instead of age we may decide to store birthday,
//     because it’s more precise and convenient.

function User2(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

let user7 = new User2("GH", new Date(1998, 6, 1));
console.log("user7:", user7);

/*
4.4 Now what to do with the old code that still uses age property?
4.5 We can try to find all such places and fix them, but that takes time and can be hard to do 
    if that code is used by many other people. And besides, age is a nice thing to have in user, right?
4.6 Let’s keep it.
4.7 Adding a getter for age solves the problem.
*/

function User3(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // age is calculated from the current date and birthday
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    },
  });
}

let kat = new User3("Kataomi", new Date(1992, 6, 1));

console.log(kat.birthday); // birthday is available
console.log(kat.age); // ...as well as the age

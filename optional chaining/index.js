// Optional chaining '?.'

// The optional chaining "?." is a safe way to access nested object properties, even if an intermediate property doesn’t exist.

// ---------------------------- 1. The “non-existing property” problem -------------------------------

/*
1.1 As an example, let’s say we have user objects that hold the information about our users.
1.2 Most of our users have addresses in user.address property, with the street user.address.street, but some did not provide them.
1.3 In such case, when we attempt to get user.address.street, and the user happens to be without an address, we get an error:
*/

let user1 = {}; // a user1 without "address" property.

// console.log("user1:", user1.address.street); // TypeError: Cannot read properties of undefined (reading 'street')

/*
1.4 That’s the expected result. JavaScript works like this. As user1.address is undefined, 
    an attempt to get user1.address.street fails with an error.
1.5 In many practical cases we’d prefer to get undefined instead of an error here (meaning “no street”).
1.6 How can we do this?
1.7 The obvious solution would be to check the value using "if" or the conditional operator "?", 
    before accessing its property, like this:
*/

let user2 = {};
console.log("user2:", user2.address ? user2.address.street : undefined); // undefined (no error)

/*
1.8 It works, there’s no error… But it’s quite inelegant. As you can see, the "user2.address" appears twice in the code.
1.9 For more deeply nested properties, it becomes even uglier, as more repetitions are required.
    E.g. let’s get user3.address.street.name in a similar fashion.
*/

let user3 = {}; // user3 has no address.
console.log(
  "user3:",
  user3.address
    ? user3.address.street
      ? user3.address.street.name
      : null
    : null
); // null (no error)

/*
1.10 That’s just awful, one may even have problems understanding such code.
1.11 There’s a little better way to write it, using the "&&" operator:
*/

let user4 = {}; // user4 has no address
console.log(
  "user4:",
  user4.address && user4.address.street && user4.address.street.name
); // undefined (no error)

/*
1.12 AND’ing the whole path to the property ensures that all components exist (if not, the evaluation stops), but also isn’t ideal.
1.13 As you can see, property names are still duplicated in the code. E.g. in the code above, user.address appears three times.
1.14 That’s why the optional chaining ?. was added to the language. To solve this problem once and for all!
*/

// ---------------------------- 2. Optional chaining -------------------------------

/*
2.1 The optional chaining "?." stops the evaluation if the value before "?." is undefined or null and returns undefined.
2.2 We’ll be saying that something “exists” if it’s not null and not undefined.
*/

let user5 = {}; // user5 has no address.
console.log("user5:", user5?.address?.street); // undefined (no error)

// 2.3 The code is short and clean, there’s no duplication at all.

// 2.4 Reading the address with user6?.address works even if user6 object doesn’t exist:
let user6 = null;
console.log("user6 address:", user6?.address); // undefined
console.log("user6 street:", user6?.address.street); // undefined

// 2.5 The variable before ?. must be declared.
//     If there’s no variable user7 at all, then user7?.anything triggers an error:
// console.log("user7:", user7?.address); // ReferenceError: user7 is not defined.

// ---------------------------- 3. Short-circuiting -------------------------------

/*
3.1 As it was said before, the "?." immediately stops (“short-circuits”) the evaluation if the left part doesn’t exist.
3.2 So, if there are any further function calls or operations to the right of "?.", they won’t be made.
*/

let user8 = null;
let x = 0;

user8?.sayHi(x++); // no "user8", so the execution doesn't reach sayHi call and x++

console.log("x:", x); // 0, value not incremented.

// ---------------------------- 4. Other variants: ?.(), ?.[] -------------------------------

/*
4.1 The optional chaining "?." is not an operator, but a special syntax construct, that also works with functions and square brackets.
4.2 For example, "?.()" is used to call a function that may not exist.
*/

let userAdmin = {
  admin() {
    console.log("I am admin");
  },
};

let userGuest = {};

userAdmin.admin?.(); // I am admin
userGuest.admin?.(); // nothing happens (no such method).

/*
4.3 Here, in both lines we first use the dot (userAdmin.admin) to get admin property,
    because we assume that the user object exists, so it’s safe read from it.
4.4 Then "?.()" checks the left part: if the admin function exists, then it runs (that’s so for userAdmin).
    Otherwise (for userGuest) the evaluation stops without errors.
4.5 The ?.[] syntax also works, if we’d like to use brackets [] to access properties instead of dot ".".
    Similar to previous cases, it allows to safely read a property from an object that may not exist.
*/

let key = "firstName";

let user9 = {
  firstName: "fishman",
};

let user10 = null;

console.log(user9?.[key]); // fishman
console.log(user10?.[key]); // undefined

// 4.6 Also we can use "?." with delete:
delete user10?.name; // delete user10.name if user10 exists.

/*
4.7 We can use "?." for safe reading and deleting, but not writing.
4.8 The optional chaining "?." has no use on the left side of an assignment.
*/
let user11 = null;
// user11?.name = "ame"; // Error, doesn't work
// because it evaluates to: undefined = "ame"

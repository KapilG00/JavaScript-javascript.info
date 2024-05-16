let user1 = {
    name: "John",
    age: 30,
  
    toString() {
      return `{name: "${this.name}", age: ${this.age}}`;
    }
};
  
console.log("user1:", user1);

// JSON.stringify -> to convert objects into JSON.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};
  
let json = JSON.stringify(student);

console.log(typeof json); // string
console.log("student:", json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}

// JSON.stringify can be applied to primitives as well.
console.log(JSON.stringify(1), typeof JSON.stringify(1)) // 1
console.log(JSON.stringify('test'), typeof JSON.stringify('test')) // "test"
console.log(JSON.stringify(true), typeof JSON.stringify(true)); // true
console.log(JSON.stringify([1, 2, 3]), typeof JSON.stringify([1, 2, 3])); // [1,2,3]

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify.
let user2 = {
    sayHi() { // ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
};
  
console.log("user2:", JSON.stringify(user2));

// Nested objects are supported and converted automatically by JSON.stringify.
let meetup1 = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};
  
console.log("meetup1:", JSON.stringify(meetup1));

// The important limitation: there must be no circular references.
let room1 = {
    number: 23
};
  
let meetup2 = {
    title: "Conference",
    participants: ["john", "ann"]
};

meetup2.place = room1;       // meetup references room
room1.occupiedBy = meetup2;  // room references meetup
// JSON.stringify(meetup2);  // Throws error of circular reference.

// Excluding and transforming: replacer.
// The full syntax of JSON.stringify is: JSON.stringify(value, replacer, space).

let room2 = {
    number: 23
};
  
let meetup3 = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room2 // meetup3 references room2
};

room2.occupiedBy = meetup3; // room2 references meetup3
console.log("meetup3 before:", JSON.stringify(meetup3, ['title', 'participants']));
console.log("meetup3 after:", JSON.stringify(meetup3, ['title', 'participants', 'name', 'place', 'number']));
console.log("meetup3 with replacer function:", JSON.stringify(meetup3, function replacer(key, value) {
    console.log("this:", this);
    return (key == 'occupiedBy') ? undefined : value;
}));

/* key:value pairs that come to replacer:
:             [object Object]
title:        Conference
participants: [object Object], [object Object]
0:            [object Object]
name:         John
1:            [object Object]
name:         Alice
place:        [object Object]
number:       23
occupiedBy: [object Object]
*/

// Formatting: space
let user = {
    name: "John",
    age: 25,
    roles: {
      isAdmin: false,
      isEditor: true
    }
};
  
console.log(JSON.stringify(user, null, 2));

// Custom “toJSON”
let room3 = {
    number: 23,
    toJSON() {
        console.log("inside room3 toJSON method");
        return this.number;
      }
};
  
let meetup4 = {
    title: "Conference",
    date: new Date(Date.UTC(2017, 0, 1)),
    room3
};
  
console.log("meetup4:", JSON.stringify(meetup4));
console.log("room3:", JSON.stringify(room3));

// JSON.parse -> to convert JSON strings into objects.
let numbers = "[1, 2, 3, 4]";
numbers = JSON.parse(numbers);
console.log(numbers[3], typeof numbers);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
let newUser = JSON.parse(userData);
console.log("friends:", newUser.friends);

// Using reviver.
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup5 = JSON.parse(str);
console.log("meetup5:", meetup5);

// console.log(meetup5.date.getDate()); // Error!

let meetup6 = JSON.parse(str, function reviver(key, value) {
    return (key == 'date') ? new Date(value) : value;
})

console.log("meetup6:", meetup6.date);
console.log("meetup6 getDate:", meetup6.date.getDate());

// works for nested objects as well.
let schedule = `{
    "meetups": [
      {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
      {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
    ]
}`;
  
schedule = JSON.parse(schedule, function(key, value) {
    return (key == 'date') ? new Date(value) : value
});

console.log("schedule:", schedule);
console.log("schedule.meetups:", schedule.meetups);
console.log(schedule.meetups[0].date.getDate());
console.log(schedule.meetups[1].date.getDate());
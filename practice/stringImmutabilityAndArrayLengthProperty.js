// 1.
const arr = [1,2,4,5,6,7];
console.log(typeof arr);
console.log(arr.length);

arr.length = 2;
console.log(arr.length);
console.log(arr, typeof arr);
console.log();

// 2.
console.log(1 != true);
console.log(1 !== true);
console.log(NaN != NaN);
console.log(NaN !== NaN);
console.log();

// 3. Example of string is immutable  in JS.
const greet = "hello";
greet.length = 10;
console.log(greet.length);
console.log(greet);
console.log();

//
function a(name="abc") {
    console.log(`1 Greet ${name}`);
}
a(undefined);

function a(name="def") {
    console.log(`2 Greet ${name}`);
}
a(null);
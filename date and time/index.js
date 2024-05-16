// Creation.
let now = new Date();
console.log(now);

// new Date(milliseconds)

// 0 means 01.01.1970 UTC+0
let Jan01_1970 = new Date(0);
console.log(Jan01_1970);

// now add 24 hours, get 02.01.1970 UTC+0
let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969);

// new Date(datestring)

let date = new Date("2017-01-26");
console.log(date);

// new Date(year, month, date, hours, minutes, seconds, ms)

date1 = new Date(1996, 6, 21, 0, 0, 0, 0);
date2 = new Date(2011, 0, 1);
console.log(date1, date2);

// Access date components.
// Current time zone.
currentDate = new Date();
console.log(currentDate.getFullYear());
console.log(currentDate.getMonth());
console.log(currentDate.getDate());
console.log(currentDate.getHours());
console.log(currentDate.getMinutes());
console.log(currentDate.getSeconds());
console.log(currentDate.getMilliseconds());
console.log(currentDate.getDay());

// UTC+0 time zone.
console.log(currentDate.getUTCFullYear());
console.log(currentDate.getUTCMonth());
console.log(currentDate.getUTCDate());
console.log(currentDate.getUTCHours());
console.log(currentDate.getUTCMinutes());
console.log(currentDate.getUTCSeconds());
console.log(currentDate.getUTCMilliseconds());
console.log(currentDate.getUTCDay());

console.log(currentDate.getTime());
console.log(new Date().getTimezoneOffset());

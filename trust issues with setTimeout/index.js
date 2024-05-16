console.log("start");

setTimeout(function () {
    console.log("callback function.")
}, 5000);

console.log("end");

// Trying to block the main thread.
let startTime = new Date().getTime();
let endTime = startTime;

while(endTime < startTime + 10000) {
    endTime = new Date().getTime();
}

console.log("Blocking the main thread.")
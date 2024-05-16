// Callback function.
function a(func) {
    console.log("callback function example.");
}
a(function b() {
    console.log("This is a callback function.");
})

// Example demonstrating how callback functions opens the world of async programming in JS.
setTimeout(function () {
    console.log("setTimeout function.")
}, 4000);

function c(func) {
    console.log("This is function c.");
    func();
}

c(function d() {
    console.log("This is function d.");
});

// EventListeners with callbacks.
// document.getElementById("clickButton").addEventListener("click", function clickListenerCallback() {
//     console.log("Button clicked");
// })

// Eventlisteners with closures.
function clickCount() {
    let count = 0;
    document.getElementById("clickButton").addEventListener("click", function clickListenerCallback() {
        console.log("Button clicked", ++count);
    })
}
clickCount();
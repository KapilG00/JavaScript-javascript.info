// Interaction: alert, prompt, confirm.

// 1. alert.
// This one we’ve seen already. It shows a message and waits for the user to press “OK”.

alert("Hello");

// 2. prompt.
// The function prompt accepts two arguments:

let age = prompt("How old are you?", 100);
alert(`You are ${age} years old!`);
// It shows a modal window with a text message, an input field for the visitor, and the buttons OK/Cancel.

// 3. confirm.

// The function confirm shows a modal window with a question and two buttons: OK and Cancel.
// The result is true if OK is pressed and false otherwise.

let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed

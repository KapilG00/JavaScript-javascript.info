// Promises are used to handle 'async' operations in JS.
// Promise is nothing but an empty object.

// const cart = ["shoes", "tshirts", "backpack"];

// // Using callbacks. (before promises)
// createOrder(cart, function (orderId) {
// 	proceedToPayment(orderId);
// });

// // Using promises. (after promises got introduced in JS)
// const my_promise = createOrder(cart);   // Initially, this will return an empty object like {data: undefined} and after executing this async 'createOrder()'function it
// 										// will replace the undefined with the actual returned data from the promise e.g. {data: orderDetails}.
// 										// The value returned by 'createOrder()' function is promise object and it is immutable.

// my_promise.then(function (orderId) {    // Here 'my_promise.then()' function will ensure to run this callback function as soon as the promise object is filled with data.
// 	proceedToPayment(orderId);          // 'my_promise.then()' function will call the callback function exactly once.
// });

// Actual implementation of promise.
const GITHUB_API = "https://api.github.com/users/akshaymarch7";

const user = fetch(GITHUB_API); // fetch() will return a promise.

console.log(user);

user.then(function(data) {
	console.log(data);
});

// Callback hell.
createOrder(cart, function(orderId){
	proceedToPayment(orderId, function(paymentInfo){
		showOrderSummary(paymentInfo, function() {
			updateWalletBalance();
		});
	});
});

// Resolving callback hell using promise chaining.
const order = createOrder(cart);

order
	.then(function(orderId) {
		return proceedToPayment(orderId);
	})
	.then(function(paymentInfo) {
		return showOrderSummary(paymentInfo);
	})
	.then(function(paymentInfo) {
		return updateWalletBalance(paymentInfo);
	})

// (OR)
createOrder(cart)
	.then(function(orderId) {
		return proceedToPayment(orderId);
	})
	.then(function(paymentInfo) {
		return showOrderSummary(paymentInfo);
	})
	.then(function(paymentInfo) {
		return updateWalletBalance(paymentInfo);
	})

// (OR) using arrow functions
createOrder(cart)
	.then((orderId) => proceedToPayment(orderId))
	.then((paymentInfo) => showOrderSummary(paymentInfo))
	.then((paymentInfo) => updateWalletBalance(paymentInfo));
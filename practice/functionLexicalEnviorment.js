// lexical environment of a function = local memory of that function + reference of parent lexical environment.

function a() {
	b();
	function b() {
		console.log(x)    // It prints 10.
	}
}

var x = 10;
a();

function c() {
	var y = 20;
	d();
	function d() {
		console.log(y)   // It prints 20.
	}
}

c();

function e() {
	f();
	var w = 30;
	function f() {
		console.log(w)   // It prints undefined.
	}
}

e();

function g() {
	h();
	function h() {
		console.log(v)   // It prints undefined.
	}
}

g();
var v = 30;

function i() {
	j();
	function j() {
		var z = 30;
		console.log(z)   // It prints 30.
	}
}

i();
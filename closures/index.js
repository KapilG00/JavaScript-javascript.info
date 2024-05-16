// In this example function 'b' bind together with its lexical scope is called as closure.
function a() {
    var x = 1;
    function b() {
        console.log(x);
    }
    b();
}
a();

// Little complicated example.
function c() {
    var y = 2;
    function d() {
        console.log(y);
    }
    return d;
}
var func = c();
console.log(func);
func();

// Corner cases.

// 1.
function e() {
    var z = 3;
    function f() {
        console.log(z);
    }
    var z = 300;
    return f;
}
var func1 = e()
console.log(func1)
func1();

// 2.
function g() {
    var p = 4;
    function h() {
        var q = 5;
        function i() {
            console.log(p, q);
        }
        i();
    }
    h();
}
g();

// Use cases of closures -> 
// Module design pattern
// Currying
// Functions like once
// Memoize
// Maintaining state in async world
// setTimeouts
// Iterators
// and many more....


function aa() {
	var x = 4;
	let y = 5;
	const z = 6;
	function bb() {
		var y = 50;
		var z = 60;
		console.log("bb:", x, y, z);
	}
	bb();
	console.log("aa:", x, y, z);
}
aa();
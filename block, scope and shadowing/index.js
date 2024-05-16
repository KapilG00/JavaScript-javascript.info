// This is a representation of block. It is also called as 'Compound Statement'.
// Block is a group of multiple statements.
{

}

//
{
    var a = 1;
    let b = 2;
    const c = 3;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b); It leads to ReferenceError: 'b'is not defined; since 'let' is block-scoped.
// console.log(c); It leads to ReferenceError: 'c'is not defined; since 'const' is block-scoped.

//
var d = 4;
{
    var d = 5;
    console.log(d);
}
console.log(d);

//
let e = 6;
{
    let e = 7;
    console.log(e);
}
console.log(e);

//
const f = 8;
{
    const f = 9;
    console.log(f);
}
console.log(f);

//
var g = 10;
{
    let g = 11;
    console.log(g);
}
console.log(g);

//
var h = 12;
{
    const h = 13;
    console.log(h);
}
console.log(h);

// It leads to SyntaxError: Identifier 'i' has already been declared.
// It is also known as 'illegal shadowing'.
// let i = 14;
// {
//     var i = 15;
//     console.log(i);
// }
// console.log(i);

// This will work. Reason :- 'var' is 'function-scoped'.
let i = 14;
function func_i() {
    var i = 15;
    console.log(i);
}
func_i();
console.log(i);

//
let j = 16;
{
    const j = 17;
    console.log(j);
}
console.log(j);

// It leads to SyntaxError: Identifier 'k' has already been declared.
// It is also known as 'illegal shadowing'.
// const k = 18;
// {
//     var k = 19;
//     console.log(k);
// }
// console.log(k);

// This will work. Reason :- 'var' is 'function-scoped'.
const k = 18;
function func_k() {
    var k = 19;
    console.log(k);
}
func_k();
console.log(k);

//
const l = 20;
{
    let l = 21;
    console.log("l1", l);
}
console.log("l2", l);

// Block scope also follows Lexical scope.
const m = 22;
{
    const m = 23;
    {
        // const m = 24;
        console.log(m);
    }
}
console.log(m);
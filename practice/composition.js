// Composition in JS.
function square(val) {
    return val * val;
}

function add(a, b) {
    return a + b;
}

function add1(args) {
    return args[0] + args[1];
}

function addTen(a) {
    return a + 10;
}

function composeTwoFunction(func1, func2) {
    return function (aa, bb) {
        return func2(func1(aa, bb))
    };
}

const task1 = composeTwoFunction(add, square);
console.log(task1(2, 3));

function composeUnlimitedFunctions(...funcs) {
    return function (...values) {
        return funcs.reduce(function (acc, current) {
            return current(acc);
        }, values);
    };
}

const task2 = composeUnlimitedFunctions(add1, addTen, square);
console.log(task2(2, 3));
console.log();
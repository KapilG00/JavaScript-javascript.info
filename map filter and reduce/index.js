// map() function of Arrays.
arr = [2,4,1,7,8]

function double(arrEle) {
    return arrEle * 2;
}

function numToBinary(arrEle) {
    return arrEle.toString(2);
}

const transformedArr = arr.map(numToBinary);
console.log(transformedArr);

// filter() function of Arrays.

function isOdd(arrEle) {
    return arrEle % 2 === 1;
}

const filteredArr = arr.filter(isOdd);
console.log(filteredArr);

// reduce() function of Arrays.

function findSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log("Using Normal function: ", findSum(arr));

const reducedArr = arr.reduce(function (accumulator, current) {
    accumulator += current;
    return accumulator;
}, 0)

console.log("Using reduce function of arr: ", reducedArr);

// Tricky reduce() example.

users = [
    {firstName: "kapil", lastName: "gupta", age: 28},
    {firstName: "shubham", lastName: "jagtap", age: 26},
    {firstName: "aniket", lastName: "jaware", age: 28},
    {firstName: "shreyas", lastName: "jadhav", age: 28}
]

const anotherReduced = users.reduce(function (accumulator, current) {
    if (accumulator[current.age]) {
        accumulator[current.age] += 1;
    } else {
        accumulator[current.age] = 1;
    }
    return accumulator;
}, {})

console.log(anotherReduced);
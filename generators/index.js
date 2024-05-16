// Iterators.
// for (const ele of [1,2,3,4,5]) {
//     console.log(ele);
// }

// Custom Iterator. (JS cannot use this custom iterator with iteration styles like "forof" loop, etc.)
function createIterator(start=0, end=Infinity, step=1) {
    let newStart = start;
    let iterationCount = 0;

    return {
        next() {
            let result;
            if (iterationCount < end) {
                result = {
                    value: newStart,
                    done: false
                };
                newStart += step;
                iterationCount++;
                return result;
            } else {
                return {
                    value: iterationCount,
                    done: true
                }
            }  
        } 
    }
}

const myIterator = createIterator(1, 10, 2);
let result = myIterator.next();
console.log("res:", result);

while (!result.done) {
    console.log(result.value);
    result = myIterator.next();
}

// To overcome the issue with iterators we use generators in JS.
// Generator function.
// 1.
function* count() {
    yield 1;
    yield 3;
    yield 5;
    yield 7;
    yield 9;
}

const oddNums = count();

for (const val of oddNums) {
    console.log(val);
}

// 2. Creating iterator using generator function.
function* createNewIterator(start, end, step=1) {
    for (let i = start; i <= end; i += step) {
        yield i;
    }
}

const iteratorUsingGenerator = createNewIterator(5, 20);

console.log(iteratorUsingGenerator.next());
console.log(iteratorUsingGenerator.next());
console.log(iteratorUsingGenerator.next());
console.log(iteratorUsingGenerator.next());
console.log(iteratorUsingGenerator.next());
// for (const val of iteratorUsingGenerator) {
//     console.log(val);
// }

// 3.
// function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//       iterationCount++;
//       yield i;
//     }
//     return iterationCount;
// }
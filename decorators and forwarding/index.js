// Decorators and forwarding, call/apply

/*
JavaScript gives exceptional flexibility when dealing with functions. They can be passed around, used as objects,
and now we’ll see how to forward calls between them and decorate them.
*/

// ------------------------------- 1. Transparent caching ------------------------------------

/*
1.1 Let’s say we have a function slow(x) which is CPU-heavy, but its results are stable.
    In other words, for the same x it always returns the same result.
1.2 If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations.
1.3 But instead of adding that functionality into slow() we’ll create a wrapper function, that adds caching.
    As we’ll see, there are many benefits of doing so.
*/

function slow(x) {
  // there can be a heavy CPU-intensive job here
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

// slow = cachingDecorator(slow);
wrappedSlow = cachingDecorator(slow);

console.log(wrappedSlow(1)); // slow(1) is cached and the result returned
console.log("Again: " + wrappedSlow(1)); // slow(1) result returned from cache

console.log(wrappedSlow(2)); // slow(2) is cached and the result returned
console.log("Again: " + wrappedSlow(2)); // slow(2) result returned from cache

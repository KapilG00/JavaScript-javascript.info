// String.
console.log("****String****");
console.log("str" + "astr");
console.log("str" + 1, typeof("str" + 1));
console.log("str" + 1.4921, typeof("str" + 1.4921));
console.log("str" + false, typeof("str" + false));
console.log("str" + true, typeof("str" + true));
console.log("str" + undefined, typeof("str" + undefined));
console.log("str" + null, typeof("str" + null));
console.log("str" + NaN, typeof("str" + NaN));
console.log(typeof "asd");

// Number.
console.log("****Number****");
console.log(1 + 3, typeof(1 + 3));
console.log(1 + 3.22, typeof(1 + 3.22));
console.log(1 + "str", typeof(1 + "str"));
console.log(1 + false, typeof(1 + false));
console.log(1 + true, typeof(1 + true));
console.log(1 + undefined, typeof(1 + undefined));
console.log(1 + null, typeof(1 + null));
console.log(1 + NaN, typeof(1 + NaN));
console.log(typeof 322);

// Boolean.
console.log("****Boolean****");
console.log(false + 2, typeof(false + 2));
console.log(true + 2, typeof(true + 2));
console.log(false + 2.34, typeof(false + 2.34));
console.log(true + 2.34, typeof(true + 2.34));
console.log(false + "str", typeof(false + "str"));
console.log(true + "str", typeof(true + "str"));
console.log(false + false, typeof(false + false));
console.log(true + true, typeof(true + true));
console.log(true + false, typeof(true + false));
console.log(false + true, typeof(false + true));
console.log(false + undefined, typeof(false + undefined));
console.log(true + undefined, typeof(true + undefined));
console.log(false + null, typeof(false + null));
console.log(true + null, typeof(true + null));
console.log(false + NaN, typeof(false + NaN));
console.log(true + NaN, typeof(true + NaN));
console.log(typeof true);

// undefined.
console.log("****undefined****");
console.log(undefined + 2, typeof(undefined + 2));
console.log(undefined + 2.32, typeof(undefined + 2.32));
console.log(undefined + "str", typeof(undefined + "str"));
console.log(undefined + false, typeof(undefined + false));
console.log(undefined + true, typeof(undefined + true));
console.log(undefined + undefined, typeof(undefined + undefined));
console.log(undefined + null, typeof(undefined + null));
console.log(undefined + NaN, typeof(undefined + NaN));
console.log(typeof undefined);

// null.
console.log("****null****");
console.log(null + 2, typeof(null + 2));
console.log(null + 2.32, typeof(null + 2.32));
console.log(null + "str", typeof(null + "str"));
console.log(null + false, typeof(null + false));
console.log(null + true, typeof(null + true));
console.log(null + undefined, typeof(null + undefined));
console.log(null + null, typeof(null + null));
console.log(null + NaN, typeof(null + NaN));
console.log(typeof null);

// NaN.
console.log("****NaN****");
console.log(NaN + 2, typeof(NaN + 2));
console.log(NaN + 2.32, typeof(NaN + 2.32));
console.log(NaN + "str", typeof(NaN + "str"));
console.log(NaN + false, typeof(NaN + false));
console.log(NaN + true, typeof(NaN + true));
console.log(NaN + undefined, typeof(NaN + undefined));
console.log(NaN + null, typeof(NaN + null));
console.log(NaN + NaN, typeof(NaN + NaN));
console.log(typeof NaN);
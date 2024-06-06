//
const obj = {
  name: "kapil",
  322: "soloDota2",
  false: "I don't play dota2!!",
  123: "one two three",
  3.142: "PI enjoyer",
};

console.log("obj:", obj);

for (let prop in obj) {
  console.log(prop);
}

//
const codes = {
  49: "Germany",
  41: "Switzerland",
  44: "Great Britain",
  1: "USA",
};

console.log("codes:", codes);

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}

// Understanding closures by making simple counters.
let count = 0;

function counter() {
  count++;
  return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = counter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

const counter2 = counter();
console.log(counter2());
console.log(counter2());
console.log(counter2());

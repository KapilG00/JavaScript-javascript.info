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

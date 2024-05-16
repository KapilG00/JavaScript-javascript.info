let user = {
    name: "Kapil",
    city: "Ulhasnagar",
    getIntro: function() {
        console.log("Hello my name is " + this.name + " and i am from " + this.city + ".") ;
    }
}


const var1 = "str";
const var2 = 322;
const var3 = 3.1415;
const var4 = undefined;
const var5 = null;
const var6 = NaN;
const var7 = "";
const var8 = [1,2,3,4,5];
const var9 = [];
const var10 = {
    name: "kapil"
};
const var11 = {};
const var12 = function () {

}
const var13 = function () {
    console.log("xaxaxaxaxaxa");
}

console.log(typeof var1);
console.log(typeof var2);
console.log(typeof var3);
console.log(typeof var4);
console.log(typeof var5);
console.log(typeof var6);
console.log(typeof var7);
console.log(typeof var8);
console.log(typeof var9);
console.log(typeof var10);
console.log(typeof var11);
console.log(typeof var12);
console.log(typeof var13);
console.log();

console.log(var1.__proto__); // {}
console.log(var1.__proto__.__proto__); // [Object: null prototype] {}
console.log(var1.__proto__.__proto__.__proto__); // null
console.log()

console.log(var2.__proto__);
console.log(var2.__proto__.__proto__);
console.log(var2.__proto__.__proto__.__proto__);
console.log()

console.log(var3.__proto__);
console.log(var3.__proto__.__proto__);
console.log(var3.__proto__.__proto__.__proto__);
console.log()

// console.log(var4.__proto__);
// console.log(var4.__proto__.__proto__);
// console.log(var4.__proto__.__proto__.__proto__);
// console.log()

// console.log(var5.__proto__);
// console.log(var5.__proto__.__proto__);
// console.log(var5.__proto__.__proto__.__proto__);
// console.log()

console.log(var6.__proto__);
console.log(var6.__proto__.__proto__);
console.log(var6.__proto__.__proto__.__proto__);
console.log()

console.log(var7.__proto__);
console.log(var7.__proto__.__proto__);
console.log(var7.__proto__.__proto__.__proto__);
console.log()

console.log(var8.__proto__);
console.log(var8.__proto__.__proto__);
console.log(var8.__proto__.__proto__.__proto__);
console.log()

console.log(var9.__proto__);
console.log(var9.__proto__.__proto__);
console.log(var9.__proto__.__proto__.__proto__);
console.log()

console.log(var10.__proto__);
console.log(var10.__proto__.__proto__);
console.log()

console.log(var11.__proto__);
console.log(var11.__proto__.__proto__);
console.log()

console.log(var12.__proto__);
console.log(var12.__proto__.__proto__);
console.log(var12.__proto__.__proto__.__proto__);
console.log()

console.log(var13.__proto__);
console.log(var13.__proto__.__proto__);
console.log(var13.__proto__.__proto__.__proto__);
console.log()
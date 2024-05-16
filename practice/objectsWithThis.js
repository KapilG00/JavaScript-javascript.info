//
const arrObj = {
    name: "kapil",
    age: 28,
    arrFunc1: () => {
        console.log("arrow function 1");
        console.log("this inside 1st arrow function:", this);
        let xx = 322;
        return () => {
            console.log(xx);
            console.log(arrObj.name);
            console.log("arrow function 2");
            console.log("this inside 2nd arrow function:", this);
        }
    }
}

const ret = arrObj.arrFunc1();
console.log(ret);
ret();
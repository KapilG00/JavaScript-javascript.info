function counter() {
    let count = 0;

    return function incrementCounter(){
        // console.log("c:", count);
        count++;
        console.log(count);
    }
}

const counter1 = counter();
counter1(); // 1
counter1(); // 2
counter1(); // 3
counter1(); // 4


const counter2 = counter(); // this will be a completely new counter the previous. 
counter2(); // 1 
counter2(); // 2 
counter2(); // 3
counter2(); // 4
counter2(); // 5
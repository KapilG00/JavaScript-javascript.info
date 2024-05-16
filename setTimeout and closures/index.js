//
// function a() {
//     var p = 1;
//     setTimeout(function () {
//         console.log(p);
//     }, 4000);
// }
// a();

//
// function b() {
//     for (var i = 1; i<=5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// b();

//
// function c() {
//     for (let i = 1; i<=5; i++) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     }
// }
// c();

//
function d() {
    for (var i = 1; i<=5; i++) {
        function insideFunc (iterationCount) {
            setTimeout(function () {
                console.log(iterationCount);
            }, iterationCount * 1000);
        }
        insideFunc(i);
    }
}
d();


const intervalId = setInterval(function () {
    console.log("asd");
}, 1000);

intervalId

clearInterval(5);

function counter() {
    var count = 0;

    return function incrementCounter(){
        counter++;
        console.log(counter);
    }
}

var counter1 = counter();
counter1(); // this will increment the counter to 1
counter1(); // this will increment the counter to 2


var counter2 = counter(); // this will be a completly new counter the previous. 
counter2(); // 1 
counter2(); // 2 
// 1
// function a() {
//     console.log(b);
// }

// var b = 10;
// a();

// 2
function c() {
    d();
    function d() {
        console.log(e);
    }
    // d();
}

var e = 20;
c();
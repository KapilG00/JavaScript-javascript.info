for (var i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

for (let j = 0; j < 5; j++) {
    setTimeout(() => {
        console.log(j);
    }, 1000);
}


let nums = [1,2,3,4,5];

for (var idx = 0; idx < nums.length; idx++) {
    setTimeout(() => {
        console.log(nums[idx]);
    }, 1000);
}

for (let indx = 0; indx < nums.length; indx++) {
    setTimeout(() => {
        console.log(nums[indx]);
    }, 1000);
}

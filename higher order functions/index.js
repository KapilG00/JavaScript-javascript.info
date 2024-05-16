const radius = [3, 1, 2, 4];

// This is not efficient way to do this since we are not following DRY principle and also the code is not modular.

// // Calculating area of circles.
// function calculateArea(radius) {
//     const circleAreaArray = [];
//     for(let i = 0; i < radius.length; i++) {
//         circleAreaArray.push(Math.PI * radius[i] * radius[i]);
//     }
//     return circleAreaArray;
// }
// console.log(calculateArea(radius));

// // Calculating circumference of circles.
// function calculateCircumference(radius) {
//      const circleCircumferenceArray = [];
//     for(let i = 0; i < radius.length; i++) {
//         circleCircumferenceArray.push(2 * Math.PI * radius[i]);
//     }
//     return circleCircumferenceArray;
// }
// console.log(calculateCircumference(radius));

// // Calculating diameters of circles.
// function calculateDiameter(radius) {
//      const circleDiameterArray = [];
//     for(let i = 0; i < radius.length; i++) {
//         circleDiameterArray.push(2 * radius[i]);
//     }
//     return circleDiameterArray;
// }
// console.log(calculateDiameter(radius));

// More modular code which follows 'DRY' principle.
const area = function (radius) {
    return Math.PI * radius * radius;
}

const circumference = function (radius) {
    return 2 * Math.PI * radius;
}

const diameter = function (radius) {
    return 2 * radius;
}

const calculate = function (radius, characteristicLogic) {
    const calculateCircleCharacteristics = [];
    for(let i = 0; i < radius.length; i++) {
        calculateCircleCharacteristics.push(characteristicLogic(radius[i]));
    }
    return calculateCircleCharacteristics;
}

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circumference));
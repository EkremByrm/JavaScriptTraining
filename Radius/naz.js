// const points = [45, 85, 56, 15, 90];

// const result = points.reduce((value, point) => {
//     if (point > 50) {
//         value++;
//     }
//     return value;
// }, 0);

// console.log(result);


const students = [
    { name: 'can', passed: 45 },
    { name: 'tuba', passed: 80 },
    { name: 'elif', passed: 90 },
    { name: 'osman', passed: 40 },
    { name: 'ahmet', passed: 64 },
    { name: 'can', passed: 80 },
    { name: 'murat', passed: 74 }
];

const result = students.reduce((value, student) => {
    if (student.name == "can") {
        value += student.passed;
    }
    return value;
}, 0)

console.log(result);
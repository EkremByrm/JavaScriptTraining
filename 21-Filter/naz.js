// const points = ["45", "85", "56", "15", "90"];
// const studentsPassed = points.filter(point => {
//     return point >= 50;

// })

// console.log(studentsPassed);


const students = [
    { name: 'can', passed: true },
    { name: 'tuba', passed: false },
    { name: 'elif', passed: false },
    { name: 'osman', passed: true }
];

const passingStudents = students.filter(x => {
    return !x.passed
})
console.log(passingStudents);
// const points = [45, 85, 56, 15, 90];

// const newPoints = points.map(point => {
//     return point + 10;
// })

// console.log(newPoints);


const students = [
    { name: 'can', passed: 45 },
    { name: 'tuba', passed: 80 },
    { name: 'elif', passed: 90 },
    { name: 'osman', passed: 40 },
    { name: 'ahmet', passed: 64 },
    { name: 'murat', passed: 74 }
];

const result = students.map(x => {
    if (x.passed < 50) {

        x.name += ' ekrem';
        x.passed += +15;
        return x;
        
    } else {
        return x;
    }
})
console.log(result);
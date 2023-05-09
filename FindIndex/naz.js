const points = [45, 85, 56, 15, 90];


const students = [
    { name: 'can', passed: 45 },
    { name: 'tuba', passed: 80 },
    { name: 'elif', passed: 90 },
    { name: 'osman', passed: 40 },
    { name: 'ahmet', passed: 64 },
    { name: 'can', passed: 80 },
    { name: 'murat', passed: 74 }
];

const result = students.findIndex(x => x.name == 'elif');

console.log(result);

const objIndex = students.findIndex(x => x.name == 'osman');
students[objIndex].passed = 41;
console.log(students[objIndex]);
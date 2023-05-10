const students = [
    { name: 'can', passed: 45 },
    { name: 'tuba', passed: 80 },
    { name: 'elif', passed: 90 },
    { name: 'osman', passed: 40 },
    { name: 'ahmet', passed: 64 },
    { name: 'murat', passed: 74 }
];


const filteredValue = students.filter(x => x.passed < 50);
const plusPoint = filteredValue.map(x => {
    return `${x.name} adlı öğrencinin yeni notu ${x.passed + 15}`;
})

console.log(plusPoint);

const newNote = students.filter(x => x.passed < 50).map(x => {
    return `${x.name} adlı öğrencinin yeni notu ${x.passed + 15}`;
})
console.log(newNote);
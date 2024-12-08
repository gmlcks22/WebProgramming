const studentList = [
  {name: 'ksd', age: 31, math: 95, science: 75},
  {name: 'kjh', age: 31, math: 95, science: 83},
  {name: 'pch', age: 35, math: 76, science: 98}
];
const plus = (a, b) => a+b;
studentList.forEach(student => console.log(`${student.name} total: ${plus(student.math, student.science)}`));
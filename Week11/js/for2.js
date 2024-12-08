constuserList = [
  { name: 'ksd', age: 31, score: 85 },
  { name: 'kjh', age: 13, score: 95 },
  { name: 'pch', age: 35, score: 76 },
];

const plus = (a, b) => a + b;
studentList.forEach((student) =>
  console.log(`${student.name} total: ${plus(student.math, student.science)}`)
);

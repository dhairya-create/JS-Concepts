//map filter reduce - O/P Based Questions

let students = [
  { name: "Dhairya", rollNumber: 31, marks: 80 },
  { name: "Aarav", rollNumber: 32, marks: 85 },
  { name: "Anika", rollNumber: 33, marks: 90 },
  { name: "Vihaan", rollNumber: 34, marks: 75 },
  { name: "Mira", rollNumber: 35, marks: 88 },
  { name: "Kian", rollNumber: 36, marks: 92 },
  { name: "Sara", rollNumber: 37, marks: 78 },
  { name: "Rohan", rollNumber: 38, marks: 83 },
  { name: "Ishaan", rollNumber: 39, marks: 89 },
  { name: "Neha", rollNumber: 40, marks: 81 },
];

// ----> Give names of student in capital

//Traditional For loop

let names = [];
for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}

console.log(names);


//Map Method
let result = students.map((student) => {
  return student.name.toUpperCase();
});

// console.log(result);

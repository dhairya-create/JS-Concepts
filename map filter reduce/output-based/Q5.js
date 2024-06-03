//map filter reduce - O/P Based Questions
//Q:5 only names of the student who scored more than 50
let students = [
  { name: "Dhairya", rollNumber: 31, marks: 80 },
  { name: "Aarav", rollNumber: 2, marks: 30 },
  { name: "Anika", rollNumber: 33, marks: 90 },
  { name: "Vihaan", rollNumber: 34, marks: 75 },
  { name: "Mira", rollNumber: 35, marks: 88 },
  { name: "Kian", rollNumber: 5, marks: 92 },
  { name: "Sara", rollNumber: 8, marks: 5 },
  { name: "Rohan", rollNumber: 1, marks: 3 },
  { name: "Ishaan", rollNumber: 39, marks: 89 },
  { name: "Neha", rollNumber: 40, marks: 1 },
];

const names = students
  .filter((stu) => {
    return stu.marks > 60;
  })
  .map((stu) => {
    return stu.name;
  });

console.log(names);

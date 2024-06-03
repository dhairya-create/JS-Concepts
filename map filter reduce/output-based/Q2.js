//map filter reduce - O/P Based Questions
//Q:2 Return only details of those who scored more than 60
let students = [
    { name: "Dhairya", rollNumber: 31, marks: 80 },
    { name: "Aarav", rollNumber: 32, marks: 30 },
    { name: "Anika", rollNumber: 33, marks: 90 },
    { name: "Vihaan", rollNumber: 34, marks: 75 },
    { name: "Mira", rollNumber: 35, marks: 88 },
    { name: "Kian", rollNumber: 36, marks: 92 },
    { name: "Sara", rollNumber: 37, marks: 5 },
    { name: "Rohan", rollNumber: 38, marks: 3 },
    { name: "Ishaan", rollNumber: 39, marks: 89 },
    { name: "Neha", rollNumber: 40, marks: 1 },
  ];


  const result = students.filter((stu) => {
    return stu.marks >60
  })

  console.log(result);


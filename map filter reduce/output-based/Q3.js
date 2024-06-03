//map filter reduce - O/P Based Questions
//Q:2 More than 60 marks and rollNumber grater than 15
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


  const details = students.filter((stu) =>{
    return stu.marks > 60 && stu.rollNumber >15
  })

  console.log(details);
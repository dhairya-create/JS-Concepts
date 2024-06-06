//Destrucuturing in objects

let user = {
  name: "Dhairya",
  age: 23,
};

const { name, age } = user;
console.log(name + "->" + age);

let user2 = {
  fullName: {
    first: "Ram",
    last: "Shyam",
  },
};

const {fullName:{first}} = user2;
console.log(first);
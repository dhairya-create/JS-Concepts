//Q4 What is JSON.stringify and JSON.parse?

//Main usage is for storing it in the local storage
const user = {
  name: "Dhairya",
  age: 24,
};

const strObj = JSON.stringify(user);
console.log(strObj);

//Converting back to the obj
console.log(JSON.parse(strObj));

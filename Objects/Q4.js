const user = {
  name: "Dhairya",
  age: 24,
  isHappy: true,
};

for (key in user) {
  console.log(user[key], "->", key);
}

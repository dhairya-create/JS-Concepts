//Q2 - Create a func multiplyByTwo(obj) that multiplies all numberic propery values of nums by 2

let nums = {
  a: 100,
  b: 200,
  title: "My nums",
};

mutiplyNumeric(nums);
console.log(nums);
function mutiplyNumeric(obj) {
  for (key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
}

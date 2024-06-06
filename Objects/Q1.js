//Objects in Javascript

//Delete key is used only when we want to delete an object and not a local variable
const func = (function (a) {
  delete a;
  return a;
})(5);

console.log(func);

//Wrtie a function that allows you to do this

function createBase(baseValue) {
  return function (num) {
    console.log(num + baseValue);
  };
}

var addSix = createBase(6);
addSix(10); //returns 16
addSix(21); //returns 27

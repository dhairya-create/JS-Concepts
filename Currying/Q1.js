//Currying in JavaScript

//Q-1 sum(2)(6)(1)

function sum(a) {
  return function (b) {
    return function (c) {
      console.log(a + b + c);
    };
  };
}

sum(2)(6)(1);

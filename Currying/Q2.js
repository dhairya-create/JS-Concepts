//Q2

//evaluate("sum") (4)(2) => 6
//evaluate("multiply") (4)(2) => 8
//evalaute("divide") (4)(2) => 2
//evalauate("substract") (4)(2) => 2

function evaluate(operation) {
  return function (a) {
    return function (b) {
      if (operation === "sum") return a + b;
      else if (operation === "multiply") return a * b;
      else if (operation === "divide") return a / b;
      else if (operation === "substract") return a - b;
      else return "Invalid operation";
    };
  };
}

console.log(evaluate("sum")(4)(2));
console.log(evaluate("multiply")(4)(2));
console.log(evaluate("divide")(4)(2));
console.log(evaluate("substract")(4)(2));


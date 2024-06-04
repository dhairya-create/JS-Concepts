// curry() implementation
//converts f(a,b,c) into f(a)(b)(c)

function curry(func) {
  return function curriedFun(...args){
  if (args.length >= func.length) {
    return func(...args);
  } else {
    return function (...next) {
      return curriedFun(...args, ...next);
    };
  }
}
}

const sum = (a,b,c,d) => a+b+c+d;

const totalSum = curry(sum);

console.log(totalSum(1)(3)(8)(99));
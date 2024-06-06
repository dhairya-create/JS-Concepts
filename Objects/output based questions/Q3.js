//Q-3 Guess the output

const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);

//In JavaScript, when you use objects as keys in a
//another object, they are automatically converted to strings.
// Specifically, both b and c will be converted to the string "[object Object]". 
//This results in a collision where both a[b] and a[c] refer to the same property in the a object.

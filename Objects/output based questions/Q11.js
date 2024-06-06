let c = {greetings:"Hey!"};
let d;

d = c;
c.greetings = "Hello";
console.log(d.greetings);
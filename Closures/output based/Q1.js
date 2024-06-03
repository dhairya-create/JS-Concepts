//What will be logged ot the console?

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1;
    console.log(count);
  }

  console.log(count);
})();

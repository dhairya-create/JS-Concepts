//How would you use a closure to create a porvate counter?

function counter() {
  var _counter = 0;

  function add(increment) {
    _counter += increment;
  }

  function retrieve() {
    return "Counter: " + _counter;
  }

  return { add, retrieve };
}


const c= counter();
c.add(10)
c.add(3);
console.log(c.retrieve());
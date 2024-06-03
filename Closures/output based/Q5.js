//Make this run only once

let count;
let name;
function test() {
  let called = false;

  return function () {
    if (called) {
      console.log("already called");
    }
    else
    {
        name = "Dhairya";
        console.log("Name is: "+name);
        called = true;
    }
  };
}


let z = test();
z();
z();
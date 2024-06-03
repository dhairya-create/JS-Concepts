//Closure Example

function makeFunc() {
  var name = "Dhairya";
  function displayName() {
    console.log(name);
  }

  return displayName;
}

var myFunc = makeFunc();
myFunc();

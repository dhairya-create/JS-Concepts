document.getElementById("grandparent").addEventListener(
  "click",
  () => {
    alert("Grandparent clicked");
  },
  true 
);

document.getElementById("parent").addEventListener(
  "click",
  () => {
    alert("Parent clicked");
  },
  true 
);

document.getElementById("child").addEventListener(
  "click",
  () => {
     alert("Child clicked");
  },true 
);

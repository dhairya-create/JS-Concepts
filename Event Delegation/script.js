document.getElementById("card-container").addEventListener("click", (e) => {
  
  // Check if a card was clicked
  if (e.target.classList.contains("card")) {
    alert("Clicked Item: " + e.target.dataset.item);
  }

});

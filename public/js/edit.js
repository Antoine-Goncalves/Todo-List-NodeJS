document.addEventListener("click", function(elem) {
  if (elem.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entrez votre nouvelle tâche ...");
    console.log(userInput);
  }
});

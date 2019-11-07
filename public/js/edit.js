document.addEventListener("click", function(e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("Veuillez entrez votre nouvelle tâche ...");
    axios
      .post("/udpate-item", { itemUpdated: userInput })
      .then()
      .catch(err => {
        console.log(err);
      });
  }
});

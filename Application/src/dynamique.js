function changerCouleur() {
    const choix = document.querySelector('input[name="choix"]:checked');

    if (choix) {
      if (choix.value === "option3") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } 
      alert("Votre choix a été enregistré, merci pour votre générosité")
    } else {
      alert("Veuillez sélectionner une option avant de valider !");
    }
  }

const boutonValider = document.getElementById('valider');
boutonValider.addEventListener('click', changerCouleur);
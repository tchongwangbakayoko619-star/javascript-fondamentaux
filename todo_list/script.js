function ajouterTache() {

    
    var texte = document.getElementById("tache").value;

    
    if (texte == "") {
        alert("Entrez une tâche");
        return;
    }

   
    var li = document.createElement("li");

   
    li.innerHTML = texte;

    
    li.onclick = function () {
        li.classList.toggle("termine");
    };

   
    var bouton = document.createElement("button");
    bouton.innerHTML = "Supprimer";
    bouton.className = "btnSupprimer";


    bouton.onclick = function () {
        li.remove();
    };

    li.appendChild(bouton);

    document.getElementById("liste").appendChild(li);

    
    document.getElementById("tache").value = "";
}
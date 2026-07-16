function verifier(reponse){

    const resultat = document.getElementById("resultat");

    if(reponse === "Yaoundé"){
        resultat.textContent = " Bonne réponse !";
        resultat.style.color = "green";
    }else{
        resultat.textContent = " Mauvaise réponse. La bonne réponse est Yaoundé.";
        resultat.style.color = "red";
    }

}
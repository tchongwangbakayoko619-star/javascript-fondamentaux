const bouton = document.getElementById("btnMode");

bouton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        bouton.textContent = " Mode clair";
    } else {
        bouton.textContent = "Mode sombre";
    }
});
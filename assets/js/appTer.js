

//Création d'un bouton pour ajouter un livre au chargement de la page
const addBookButton = document.createElement("button");
addBookButton.innerHTML = "Ajouter un livre";
document
    .getElementById("myBooks")
    .insertBefore(addBookButton, document.getElementById("content"));
addBookButton.id = "addBookButton";
addBookButton.className = "btn btn-success btn-sm";

// Création d'un formulaire de recherche de livres en html;
const formDiv = `<div class="text-left" id="searchBookForm">
        <form id="bookForm" class="text-left">
        <label class="form-label">Titre du livre</label>
        <input id= "bookTitle" type="text" class="form-control">
            <label class="form-label">Auteur</label>
            <input id="author" type="text" class="form-control">
            </form>
            <button id="search-button" class="btn btn-secondary btn-success btn-sm btn-block">Rechercher</button>
            <button id="cancel-button" class="btn btn-annuler btn-sm btn-block">Annuler</button>
        </div>`;
//Creation d'une div de resultat de la recherche
const searchBookResults = `<div id="searchBookResults">
            <h3 class="text-center">Resultats de recherche</h3>
            <div id="booksList" class="cardsGroup"></div>
            </div>`;

//Formulaire de recherche d'un livre
const addBookForm = document.createElement("div");
addBookForm.id = "addBookForm";
document
    .getElementById("myBooks")
    .insertBefore(addBookForm, document.getElementById("content"));
addBookForm.innerHTML += formDiv;
addBookForm.style.visibility = "hidden";
addBookForm.style.display = "none";

//Disparition du bouton et apparition du formulaire au click du bouton
$("#addBookButton").click(function () {
    addBookForm.style.visibility = "visible";
    addBookForm.style.display = "block";
    this.style.visibility = "hidden";
    document.getElementById("searchBookResults").style.visibility = "hidden";
    document.getElementById("searchBookResults").style.display = "none";

});
$("#searchBookForm").append(searchBookResults);

//Ajout des cards
const card = `<div class="card">
<div class="card-body m-auto" id="book">
<button id="" class="button" onclick=""><i class="far fa-bookmark fa-2x"></i></button>
<h5 class="card-title">Titre : </h5>
 <h5>Id : </h5>
 <p>Auteur : </p>
 <p class="card-text text-justify">Description :  </p>
 <img class="card-img-bottom" src="" alt="">
</div>
</div>`;


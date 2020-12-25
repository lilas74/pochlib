$(document).ready(function () {

    const addBookButton = document.createElement("button");
    addBookButton.innerHTML = "Ajouter un livre";
    document.getElementById("myBooks").insertBefore(addBookButton, document.getElementById("content"));
    addBookButton.id = "addBookButton";
    addBookButton.className = "btn btn-success btn-sm";

    //initialized the books data variable
    const googleBookApiUrl = "";
    let search = "";

    const formDiv = `<div class="text-left" id="searchBookForm">
        <form id="bookForm" class="text-left">
        <label class="form-label">Titre du livre</label>
        <input type="text" class="form-control">
            <label class="form-label">Auteur</label>
            <input id="bookTitle"type="text" class="form-control">
            </form>
            <button id="search-button" class="btn btn-secondary btn-success btn-sm btn-block">Rechercher</button>
            <button id="cancel-button" class="btn btn-annuler btn-sm btn-block">Annuler</button>
        </div>`;

    const searchBookResults = `<div id="searchBookResults">
            <h3>Resultats de recherche</h3>
            <img src = "https://via.placeholder.com/150">
            </div>`;

    const addBookForm = document.createElement("div");
    addBookForm.id = "addBookForm";
    document.getElementById("myBooks").insertBefore(addBookForm, document.getElementById("content"));
    addBookForm.innerHTML += formDiv;
    addBookForm.style.visibility = "hidden";
    addBookForm.style.display = "none";


    $("#addBookButton").click(function () {
        addBookForm.style.visibility = "visible";
        addBookForm.style.display = "block";
        this.style.visibility = "hidden";
    });

    $("#search-button").click(function () {
        console.log("hello");
    })

    let results;
    results += searchBookResults;
    results.id = "resultatRecherche";
    $("#searchBookForm").append(searchBookResults);
    searchBookResults.style.display = "none";
   searchBookResults.style.visibility = "visible";



    return false;
})

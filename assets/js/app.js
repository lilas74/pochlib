/**
 * Create a button to add a book in the pochlist
 * @type {HTMLButtonElement}
 */

//Création d'un bouton pour ajouter un livre au chargement de la page
const addBookButton = document.createElement("button");
addBookButton.innerHTML = "Ajouter un livre";
document
  .getElementById("myBooks")
  .insertBefore(addBookButton, document.getElementById("content"));
addBookButton.id = "addBookButton";
addBookButton.className = "btn btn-success btn-sm";


/**
 * Create a form in html to find book from google books API;
 * @type {string}
 */
const formDiv = `<div class="text-left" id="searchBookForm">
        <form id="bookForm" class="text-left">
        <label class="form-label">Titre du livre</label>
        <input id= "bookTitle" type="text" class="form-control">
            <label class="form-label">Auteur</label>
            <input id="author" type="text" class="form-control">
            <label for="nbAfficher" class="form-label">Nombre de résultats souhtaités:</label>
            <select name="nbAfficher" id="nbAfficher" class="form-control col-lg-3 col-md-5">
            <option value="10">--Merci de choisir une option--</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            </select>
            </form>
            <button id="search-button" class="btn btn-secondary btn-success btn-sm btn-block">Rechercher</button>
            <button id="cancel-button" class="btn btn-annuler btn-sm btn-block">Annuler</button>
                     
        </div>`;

/**
 * Create a div to store the book result search
 * @type {string}
 */
const searchBookResults = `<div id="searchBookResults" class="col-lg-11">
            <h3 class="text-center h3">Resultats de recherche</h3>
            <div id="booksList" class="cardsGroup row"></div>
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
  this.style.display = "none";
  document.getElementById("searchBookResults").style.visibility = "hidden";
  document.getElementById("searchBookResults").style.display = "none";
});
$("#searchBookForm").append(searchBookResults);

$("#cancel-button").click(function (){
  addBookForm.style.visibility = "hidden";
  addBookForm.style.display = "none";
  $("#addBookButton").css("visibility","visible");
  $("#addBookButton").css("display","block");

})
/**
 * Formatting an object to html through Bootstrap card
 * @param obj
 * @returns {HTMLDivElement}
 */
const formattingSearchResults = (obj) => {
  const cards = document.createElement("div");
  //document.getElementById("searchBookResults").appendChild(cards);
  cards.className = "card col-lg-6 col-md-5 justify-content-center";
  cards.id = obj.identifier;

  const cardBody = document.createElement("div");
  cardBody.className = "card-body m-auto";
  cards.appendChild(cardBody);

  const title = document.createElement("h5");
  title.className = "card-title";
  title.innerHTML = `Titre : ${obj.title}`;
  cardBody.appendChild(title);

  const identifier = document.createElement("h5");
  identifier.className = "livre-identifier";
  identifier.innerHTML = `Id : ${obj.identifier}`;
  cardBody.appendChild(identifier);

  const author = document.createElement("p");
  author.className = "";
  author.innerHTML = `Auteur(e) : ${obj.author}`;
  cardBody.appendChild(author);

  const description = document.createElement("p");
  description.className = "card-text text-justify";
  description.innerHTML = `Description : ${obj.description}`;
  cardBody.appendChild(description);

  const cardImage = document.createElement("img");
  cardImage.src = obj.bookImage;
  cardImage.className = "card-img-bottom";
  cardImage.alt = obj.title;
  cards.appendChild(cardImage);

  const icon = document.createElement("button");
  cardBody.appendChild(icon);
  icon.className = "button";
  icon.innerHTML = "<i class='fas fa-bookmark'></i>";

  //click function to saved book in the pochlist
  icon.onclick = function () {
    displaySavedBook();
    saveBook(obj);
    displaySavedBook();
  };
  return cards;
};


/**
 * Formatting an object to html through Bootstrap card for the saved book
 * @param obj
 * @returns {HTMLDivElement}
 */
const formattingSavedResults = (obj) => {
  const cardsSaved = document.createElement("div");
  //document.getElementById("searchBookResults").appendChild(cards);
  cardsSaved.className = "card col-lg-6 col-md-5 justify-content-center";
  cardsSaved.id = obj.identifier;

  const cardBodySaved = document.createElement("div");
  cardBodySaved.className = "card-body m-auto";
  cardsSaved.appendChild(cardBodySaved);

  const titleBookSaved = document.createElement("h5");
  titleBookSaved.className = "card-title";
  titleBookSaved.innerHTML = `Titre : ${obj.title}`;
  cardBodySaved.appendChild(titleBookSaved);

  const identifierSaved = document.createElement("h5");
  identifierSaved.className = "livre-identifier";
  identifierSaved.innerHTML = `Id : ${obj.identifier}`;
  cardBodySaved.appendChild(identifierSaved);

  const authorSaved = document.createElement("p");
  authorSaved.className = "";
  authorSaved.innerHTML = `Auteur(e) : ${obj.author}`;
  cardBodySaved.appendChild(authorSaved);

  const descriptionSaved = document.createElement("p");
  descriptionSaved.className = "card-text text-justify";
  descriptionSaved.innerHTML = `Description : ${obj.description}`;
  cardBodySaved.appendChild(descriptionSaved);

  const cardImageSaved = document.createElement("img");
  cardImageSaved.src = obj.bookImage;
  cardImageSaved.className = "card-img-bottom";
  cardImageSaved.alt = obj.title;
  cardsSaved.appendChild(cardImageSaved);

  const iconTrash = document.createElement("button");
  cardBodySaved.appendChild(iconTrash);
  iconTrash.className = "button";
  iconTrash.innerHTML = "<i class='fas fa-trash-alt'></i>";


  /**
   * onclick function to remove book from the pochList
   */
  iconTrash.onclick = function () {

    removedBook(obj.identifier);
    displaySavedBook();
  };
  return cardsSaved;
};

/**
 * Create a div where all books saved are displayed
 * @type {HTMLDivElement}
 */
const bookList = document.createElement("div");
document.getElementById("content").appendChild(bookList);
bookList.id = "bookList";
bookList.className = "row col-lg-11";


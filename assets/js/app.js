//elments included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
$(document).ready(function () {
const googleApiKey = "AIzaSyDVwtDeJjhuVK76P8sbZMnUHgSY7vjEC1A";
let intitle = "";
let inauthor = "inauthor:";
const urlGoogleBook = "https://www.googleapis.com/books/v1/volumes?q=";

    //Get the div with content ID
    const divContent = document.getElementById("content");
    const myBookDiv = document.getElementById("myBooks");
    const cancelButton = document.createElement("button");
    const searchButton = document.createElement("button");
    const addBookForm = document.createElement("FORM");
    const bookSearchResults = document.createElement("div");

    //Get the firstChild of the divContent
    const firstChildContent = divContent.firstChild;

//Create the new Button to add a book
    const addBookButton = document.createElement("button");
    addBookButton.innerHTML = "Ajouter un livre";

//insert the new book button before the divContent
    myBookDiv.insertBefore(addBookButton, divContent);

//add ID to the new button
    addBookButton.id = "addBookButton";
    addBookButton.className = "btn btn-success btn-sm";

//display a form when the addBookButton is clicked and hide the clicked button
    addBookButton.addEventListener("click", function () {
//add a form element to the document
        // const addBookForm = document.createElement("FORM");
        addBookForm.className = "text-left";
        myBookDiv.insertBefore(addBookForm, divContent);
//add the label to the title search input  to the form
        const titleBarLabel = document.createElement("LABEL");
        titleBarLabel.innerHTML = "Titre du livre";
        addBookForm.appendChild(titleBarLabel);
        titleBarLabel.className = "form-label";
//add the title search input to the form
        const titleBarSearch = document.createElement("INPUT");
        titleBarSearch.setAttribute("type", "text");
        titleBarSearch.ID = "titleSearchData";
        addBookForm.appendChild(titleBarSearch);
        titleBarSearch.className = "form-control";
//add the label author search to the form
        const authorBarLabel = document.createElement("LABEL");
        authorBarLabel.innerHTML = "Auteur";
        addBookForm.appendChild(authorBarLabel);
        authorBarLabel.className = "form-label";
//add the author search input to the form
        const authorBarSearch = document.createElement("INPUT");
        authorBarSearch.setAttribute("type", "text");
        addBookForm.appendChild(authorBarSearch);
        authorBarSearch.className = "form-control";
//add the search button to the form
        //const searchButton = document.createElement("button");
        searchButton.innerHTML = "Rechercher";
        searchButton.ID = "search-button";
        addBookForm.appendChild(searchButton);
        searchButton.className = "btn btn-secondary btn-success btn-sm btn-block";
//add the cancel button to the form
        //cancelButton = document.createElement("button");
        cancelButton.innerHTML = "Annuler";
        addBookForm.appendChild(cancelButton);
        cancelButton.className = "btn btn-annuler btn-sm btn-block";



        bookSearchResults.id = "bookSearchResults";

        myBookDiv.insertBefore(bookSearchResults, divContent);
        addBookButton.hidden = true;
        //displaySearchResults();

    }, {once: true});// the clicked button should work once


    function displaySearchResults() {

        const headerSearch = document.createElement("h1");
        headerSearch.innerHTML ="Resultats de recherche";

        const placeHolder = document.createElement("img");
        placeHolder.src = "https://via.placeholder.com/150";

        myBookDiv.insertBefore(bookSearchResults, divContent);
        bookSearchResults.appendChild(headerSearch);
        bookSearchResults.appendChild(placeHolder);

    }

    $("#searchButton").click(function (e) {
        e.preventDefault();
        displaySearchResults();
           searchButton.hidden = false;
    },{once:false});

    function formattingSearchResults() {
        const cards = `<div class="card" style="width: 18rem;">
  <img src="https://via.placeholder.com/150\n" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
return cards;

    }
    return false;
})

//Get the div with content ID
const divContent = document.getElementById("content");
const myBookDiv = document.getElementById("myBooks");

//Get the firstChild of the divContent
const firstChildContent = divContent.firstChild;

//Create the new Button to add a book
const addBookButton = document.createElement("button");
addBookButton.innerHTML = "Ajouter un livre";

//insert the new book button before the divContent
myBookDiv.insertBefore(addBookButton, divContent);

//add ID to the new button
addBookButton.id = "addButton";
addBookButton.className = "btn btn-success btn-sm";

//display a form when the addBookButton is clicked and hide the clicked button
addBookButton.addEventListener("click", function () {

    const addBookForm = document.createElement("FORM");
    addBookForm.className = "text-left";
    myBookDiv.insertBefore(addBookForm, divContent);

    const titleBarLabel = document.createElement("LABEL");
    titleBarLabel.innerHTML = "Titre du livre";
    addBookForm.appendChild(titleBarLabel);
    titleBarLabel.className = "form-label";

    const titleBarSearch = document.createElement("INPUT");
    titleBarSearch.setAttribute("type", "text");
    addBookForm.appendChild(titleBarSearch);
    titleBarSearch.className = "form-control";

    const authorBarLabel = document.createElement("LABEL");
    authorBarLabel.innerHTML = "Auteur";
    addBookForm.appendChild(authorBarLabel);
    authorBarLabel.className = "form-label";

    const authorBarSearch = document.createElement("INPUT");
    authorBarSearch.setAttribute("type", "text");
    addBookForm.appendChild(authorBarSearch);
    authorBarSearch.className = "form-control";

    const searchButton = document.createElement("button");
    searchButton.innerHTML = "Rechercher";
    addBookForm.appendChild(searchButton);
    searchButton.className = "btn btn-secondary btn-sm btn-block";

    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Annuler";
    addBookForm.appendChild(cancelButton);
    cancelButton.className = "btn btn-primary btn-sm btn-block";
    addBookButton.hidden = true;
}, {once: true});



//Get the div with content ID
const divContent = document.getElementById("content");
const myBookDiv = document.getElementById("myBooks");
const cancelButton = document.createElement("button");
const searchButton = document.createElement("button");
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
//add a form element to the document
    const addBookForm = document.createElement("FORM");
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
    addBookForm.appendChild(searchButton);
    searchButton.className = "btn btn-secondary btn-success btn-sm btn-block";
//add the cancel button to the form
    //cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Annuler";
    addBookForm.appendChild(cancelButton);
    cancelButton.className = "btn btn-annuler btn-sm btn-block";
    addBookButton.hidden = true;


}, {once: true});// the clicked button should work once
cancelButton.addEventListener("click", function(e) {
    console.log("ca marche "+ e);
    alert("j'ai ete clické")
})




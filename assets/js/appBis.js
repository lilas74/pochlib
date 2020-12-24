$(document).ready(function () {

    const addBookButton = document.createElement("button");
    addBookButton.innerHTML = "Ajouter un livre";
    document.getElementById("myBooks").insertBefore(addBookButton, document.getElementById("content"));
    addBookButton.id = "addBookButton";
    addBookButton.className = "btn btn-success btn-sm";
    $("#addBookButton").click(function () {
        const addBookForm = document.createElement("div");
        document.getElementById("myBooks").insertBefore(addBookForm, document.getElementById("content"));
        addBookForm.innerHTML += createABookSearchForm();

        this.hidden = true;
    })
    createABookSearchForm = () => {
        const formDiv = `<div class="text-left" id="searchBookForm">
        <form class="text-left">
        <label class="form-label">Titre du livre</label>
        <input type="text" class="form-control">
            <label class="form-label">Auteur</label>
            <input type="text" class="form-control">
            </form>
        </div>`;
        // document.getElementById("myBooks").insertBefore(formDiv, document.getElementById("content"));
        return formDiv;

        //document.getElementById("myBooks").insertBefore(formDiv, document.getElementById("content"));
    }
    return false;
});

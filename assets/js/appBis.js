$(document).ready(function () {
    const addBookButton = document.createElement("button");
    addBookButton.innerHTML = "Ajouter un livre";
    document
        .getElementById("myBooks")
        .insertBefore(addBookButton, document.getElementById("content"));
    addBookButton.id = "addBookButton";
    addBookButton.className = "btn btn-success btn-sm";

    //initialized the books data variable

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

    const searchBookResults = `<div id="searchBookResults">
            <h3 class="text-center">Resultats de recherche</h3>
            <div id="booksList" class="cardsGroup"></div>
            </div>`;

    const addBookForm = document.createElement("div");
    addBookForm.id = "addBookForm";
    document
        .getElementById("myBooks")
        .insertBefore(addBookForm, document.getElementById("content"));
    addBookForm.innerHTML += formDiv;
    addBookForm.style.visibility = "hidden";
    addBookForm.style.display = "none";

    $("#addBookButton").click(function () {
        addBookForm.style.visibility = "visible";
        addBookForm.style.display = "block";
        this.style.visibility = "hidden";
        document.getElementById("searchBookResults").style.visibility = "hidden";
        document.getElementById("searchBookResults").style.display = "none";

    });
    $("#searchBookForm").append(searchBookResults);

    let book,
        title,
        author,
        identifier,
        description,
        bookImage,
        searchTitle,
        searchAuthor,
        bool;
    const googleBookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    const apiKey = "&key=AIzaSyDVwtDeJjhuVK76P8sbZMnUHgSY7vjEC1A";
    const defaultImageSrc =
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P1_FR/unavailable.png";

    $("#search-button").click(function () {
        document.getElementById("booksList").innerHTML = "";
        document.getElementById("searchBookResults").style.visibility = "visible";
        document.getElementById("searchBookResults").style.display = "block";
        searchTitle = $("#bookTitle").val();
        searchAuthor = $("#author").val();
        if (
            searchTitle == null ||
            searchAuthor == null ||
            searchTitle == "" ||
            searchAuthor == ""
        ) {
            alert("Merci de renseigner les champs titre et auteur");
        } else {
            $.ajax({
                url: googleBookApiUrl + searchTitle + "+inauthor:" + searchAuthor, //+apiKey,
                dataType: "json",
                success: function (response) {
                    if (response.items === undefined) {
                        alert("Pas de résultat trouvé, merci d'effectuer une nouvelle recherche");
                    } else {
                        displayBooksResult(response);


                    }
                },
                error: function () {
                    console.log("Une erreur s'est produite");
                }
            });
        }
        $("#bookTitle").val("");
        searchAuthor = $("#author").val("");

    });
    $("#cancel-button").click(function () {
        $("#bookTitle").val("");
        searchAuthor = $("#author").val("");
    })

    function displayBooksResult(response) {
        for (let i = 0; i < response.items.length; i += 2) {
            book = response.items[i];
            identifier = book.id;
            title = book.volumeInfo.title;
            if (book.volumeInfo.description === undefined) {
                description = ""
            } else {
                description = book.volumeInfo.description.length > 200 ?
                    book.volumeInfo.description.substring(0, 200) :
                    book.volumeInfo.description;
            }
            author = book.volumeInfo.authors;
            bookImage = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : defaultImageSrc;


            book1 = response.items[i + 1];
            identifier1 = book1.id;
            title1 = book1.volumeInfo.title;
            if (book1.volumeInfo.description === undefined) {
                description1 = ""
            } else {
                description1 = book1.volumeInfo.description.length > 200 ?
                    book1.volumeInfo.description.substring(0, 200) :
                    book1.volumeInfo.description;
            }
            author1 = book1.volumeInfo.authors;
            bookImage1 = (book1.volumeInfo.imageLinks) ? book1.volumeInfo.imageLinks.thumbnail : defaultImageSrc;

            document.getElementById("booksList").innerHTML += `<div class="card-group">` +
                formattingSearchResults(
                    title,
                    identifier,
                    author,
                    description,
                    bookImage
                ) +
                formattingSearchResults(
                    title1,
                    identifier1,
                    author1,
                    description1,
                    bookImage1
                ) +
                '</div>';


                //savedBook(title,identifier,author,description,bookImage,bool)
               // savedBook(title1,identifier1,author1,description1,bookImage1,bool)

        }
    }

    return false;
});


let booksSaved = [];

function savedBook(book) {

    if (sessionStorage.getItem("booksSaved") === null) {

        booksSaved.push(book);
        sessionStorage.setItem("booksSaved", JSON.stringify(booksSaved));
        console.log(booksSaved);
    } else {
        booksSaved = JSON.parse(sessionStorage.getItem("booksSaved)"));
        console.log(booksSaved);
    }

    document.getElementById('content').innerHTML +=  "<div>" + formattingSearchResults(
        title,
        identifier,
        author,
        description,
        bookImage,

        )+"</div>";
}

function formattingSearchResults(
    title,
    identifier,
    author,
    description,
    bookImage,
) {
let titre = title;
 let cards = `<div class="card">
<div class="card-body m-auto" id="book">
<button class="but" onclick="saveResults()"><i class="far fa-bookmark fa-2x" ></i></button>
<h5 class="card-title">Titre : ${title}</h5>
 <h5>Id : ${identifier}</h5>
 <p>Auteur : ${author}</p>
 <p class="card-text text-justify">Description :  ${description}</p>
 <img class="d-xl-flex m-auto card-img-top w-60 d-block h-70" src=${bookImage} alt="...">
</div>
</div>`;

 return cards;
}
let element = document.querySelectorAll(".but");
let  button = document.createElement('button');



function saveResults(){
    console.log("cliqué");
}
/*handleSaveBook = event => {
    event.preventDefault();

    const bookID = event.target.getAttribute('data-id')

    const newState = {...this.state}

    let targetBook = this.state.results.filter(book => book.id === bookID)
    // Parses out book data from results by book id

    const newBook = {
        title: targetBook[0].volumeInfo.title,
        authors: targetBook[0].volumeInfo.authors,
        description: targetBook[0].volumeInfo.description,
        image: targetBook[0].volumeInfo.imageLinks.thumbnail,
        link: targetBook[0].volumeInfo.infoLink
    }
    // Instantiates new object formatted per the db schema.
}*/

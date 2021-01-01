let book,
    title,
    author,
    identifier,
    description,
    bookImage,
    searchTitle,
    searchAuthor,
    results = [];


const googleBookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = "&key=AIzaSyDVwtDeJjhuVK76P8sbZMnUHgSY7vjEC1A";
const defaultImageSrc =
    "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P1_FR/unavailable.png";

const searchBook = () => {
    if (searchTitle == null ||
        searchAuthor == null ||
        searchTitle == "" ||
        searchAuthor == "") {
        alert("Merci de renseigner les champs titre et auteur");
    } else {
        $.ajax({
            url: googleBookApiUrl + searchTitle + "+inauthor:" + searchAuthor,
            datatype: "json",
            success: function (response) {
                if (response.items == undefined || response.items == null) {
                    alert("Pas de résultat trouvé, merci d'effectuer une nouvelle recherche");
                } else {
                    for (let i = 0; i < response.items.length; i++) {
                        book = response.items[i];
                        let livre = new Object();
                        livre.identifier = book.id;
                        livre.title = book.volumeInfo.title;
                        livre.description = (book.volumeInfo.description === undefined) ? livre.description = "" : livre.description = (book.volumeInfo.description.length > 200) ?
                             book.volumeInfo.description.substring(0, 200) :
                             book.volumeInfo.description;
                        livre.author = book.volumeInfo.authors;
                        livre.bookImage = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : defaultImageSrc;
                        results.push(livre);

                    }
                    console.log(results.length);
                }
            },
            error: function () {
                alert("Une erreur s'est produite");
            }
        });
    }
}

$("#searchButton").click(function () {
    searchTitle = $("#bookTitle").val();
    searchAuthor = $("#author").val();
    searchBook();
})
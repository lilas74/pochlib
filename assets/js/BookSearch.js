
    let book,
        title,
        author,
        identifier,
        description,
        bookImage,
        searchTitle,
        searchAuthor,
        results = [],
        savedBook = [];

    const googleBookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
    const apiKey = "&key=AIzaSyDVwtDeJjhuVK76P8sbZMnUHgSY7vjEC1A";
    const defaultImageSrc =
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Salesforce_P1_FR/unavailable.png";

    const searchBook = () => {
        results = [];

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
                            livre.title = (book.volumeInfo.title === undefined) ? livre.title = "" : livre.title = (book.volumeInfo.title.length > 60) ?
                                (book.volumeInfo.title.substring(0, 60) + "...") :
                                book.volumeInfo.title;
                            livre.description = (book.volumeInfo.description === undefined) ? livre.description = "" : livre.description = (book.volumeInfo.description.length > 200) ?
                                (book.volumeInfo.description.substring(0, 200) + "...") :
                                book.volumeInfo.description;
                            livre.author = book.volumeInfo.authors;
                            livre.bookImage = (book.volumeInfo.imageLinks) ? book.volumeInfo.imageLinks.thumbnail : defaultImageSrc;
                            results.push(livre);

                        }
                        displaySearchResults(results, "booksList");
                    }
                },
                error: function () {
                    alert("Une erreur s'est produite");
                }
            });
        }
        $("#bookTitle").val("");
        searchAuthor = $("#author").val("");
    }

    $("#search-button").click(function () {
        searchTitle = $("#bookTitle").val();
        searchAuthor = $("#author").val();
        document.getElementById("booksList").innerHTML = "";
        searchBook();

        document.getElementById("searchBookResults").style.visibility = "visible";
        document.getElementById("searchBookResults").style.display = "block";

    })

    const displaySearchResults = (array, target) => {
        for (let i = 0; i < array.length; i += 2) {
            let cardGroup = document.createElement("div");
            cardGroup.className = "card-deck content";
            document.getElementById(target).appendChild(cardGroup);
            cardGroup.appendChild(formattingSearchResults(array[i]));
            cardGroup.appendChild(formattingSearchResults(array[i+1]));

        }
    }

    const saveBook = (obj) => {
        savedBook.push(obj);
        sessionStorage.setItem(obj.identifier, JSON.stringify(obj));
    }
    const displaySavedBook = () => {
        bookList.innerHTML = "";
        document.getElementById("bookList").innerHTML = "";
        //let allBookDiv = document.createElement("div");
         for (let i = 0; i < sessionStorage.length; i++) {
             const key = sessionStorage.key(i);
             //const cardGroup = document.createElement("div");
            //cardGroup.className = "card-group";
            //document.getElementById("content").appendChild(cardGroup);
            //cardGroup.appendChild(formattingSavedResults(JSON.parse(sessionStorage.getItem(key))));
            //cardGroup.appendChild(formattingSavedResults(JSON.parse(sessionStorage.getItem(key))));
             document.getElementById("bookList").appendChild(formattingSavedResults(JSON.parse(sessionStorage.getItem(key))));

         }
        const content = $("#content .card");
        for(let i = 0 ; i < content.length ; i+=2){
            const cardGroupOne = document.createElement("div");
            cardGroupOne.className = "card-deck";
            document.getElementById("bookList").appendChild(cardGroupOne);
            if(content[i+1]){
                cardGroupOne.appendChild(content[i]);
                cardGroupOne.appendChild(content[i+1]);
            }else {
                cardGroupOne.appendChild(content[i]);
            }


        }
    }
    displaySavedBook();

const removedBook = (key) => {
    sessionStorage.removeItem(key);
}
/*const content = $("#content .card");
for(let i = 0 ; i < content.length ; i+=2){
    const cardGroupOne = document.createElement("div");
    cardGroupOne.className = "card-group";
    document.getElementById("content").appendChild(cardGroupOne);
    cardGroupOne.appendChild(content[i]);
    cardGroupOne.appendChild(content[i+1]);
}*/